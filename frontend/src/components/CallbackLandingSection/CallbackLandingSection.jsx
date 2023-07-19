import React, { useState } from 'react'
import { Input, InputController } from '../FeedbackModal/FeedbackModal'
import { useForm } from "react-hook-form";
import Button2 from '../uikit/Button2/Button2'
import style from './CallbackLandingSection.module.scss'
import { callbackOrder } from '@/lib/callbackOrder';
import Portal from '../Portal/Portal';
import OverlayingPopup from '../OverlayingPopup/OverlayingPopup';
import CloseBtn from '../uikit/CloseBtn/CloseBtn';
import { star } from './../LandingHeroSection/LandingHeroSection';

export default function CallbackLandingSection() {
    const {
        register,
        formState: { errors },
        control,
        reset,
        handleSubmit,
    } = useForm();

    const [thanksMessage, setThankMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const handlerThanks = () => {
        setThankMessage(true);
        reset();
        setTimeout(() => {
            setThankMessage(false);
        }, 4000);
    };

    const handlerError = () => {
        setErrorMessage(true);
        setTimeout(() => {
            setErrorMessage(false);
        }, 4000);
    };


    const onSubmit = (data) => {
        callbackOrder(
            {
                ...data,
                theme: 'Обратная связь по разработке сайта',
                emailOffice: {
                    email: 'mail@1ppc.ru'
                }
            },
            handlerThanks,
            handlerError
        );
    };

    return (
        <section className={style.section}>
            <div className={style.outer_container}>
                <div className={style.container}>
                    {star(style.star)}
                    {star(style.star)}
                    {star(style.star)}
                    {star(style.star)}
                    <p className={style.header}>
                        Получите индивидуальное коммерческое предложение
                    </p>
                    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            register={register}
                            required
                            placeholder={"Имя"}
                            type="text"
                            name={"name"}
                            className={style.input}
                            classNameBlock={style.input_block}
                            errors={errors}
                        />
                        <Input
                            register={register}
                            placeholder={"ivanov@yandex.ru"}
                            type="text"
                            name={"email"}
                            className={style.input}
                            classNameBlock={style.input_block}
                            errors={errors}
                        />
                        <InputController
                            register={register}
                            placeholder={"+7 000 000 00 00"}
                            type={"tel"}
                            name={"phone"}
                            classNameBlock={style.input_block}
                            required
                            className={style.input}
                            errors={errors}
                            control={control}
                        />
                        <Button2 className={style.submit} type="submit">Получить</Button2>
                        <p className={style.subFormText}>
                            Нажимая на кнопку, соглашаюсь на обработку персональных данных
                        </p>
                    </form>
                    <p className={style.subtext}>
                        Или напишите нам на <a className={style.link} rel="noreferrer" href="mailto:mail@1ppc.ru">почту</a> или в <a rel="noreferrer" target={'_blank'} className={style.link} href="https://t.me/Zinkovsky">телеграм</a>
                    </p>
                </div>
            </div>
            {errorMessage || thanksMessage ? (
                <Portal>
                <OverlayingPopup
                    isOpened={thanksMessage || errorMessage}
                    onClose={() => {
                        setErrorMessage(false)
                        setThankMessage(false)
                    }}
                    overlayClass={style.overlay}
                    child={style.child}
                >
                    <div className={style.modal_container}>
                        <CloseBtn
                            className={style.close}
                            onClick={() => {
                                setErrorMessage(false)
                                setThankMessage(false)
                            }} />
                        {thanksMessage && (
                            <>
                                <svg className={style.modal_icon} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="64" height="64" rx="20" fill="#056AC7" />
                                    <path d="M30.7689 44.3595C30.684 44.3595 30.6001 44.3419 30.5223 44.3079C30.4445 44.2738 30.3746 44.2241 30.317 44.1618L18.1332 30.9824C18.052 30.8945 17.9982 30.7849 17.9783 30.6669C17.9584 30.5489 17.9734 30.4277 18.0213 30.318C18.0693 30.2084 18.1481 30.1152 18.2483 30.0497C18.3484 29.9842 18.4654 29.9493 18.5851 29.9493H24.4497C24.5378 29.9493 24.6248 29.9682 24.7049 30.0047C24.785 30.0412 24.8564 30.0945 24.9142 30.1609L28.9861 34.8455C29.4261 33.9048 30.278 32.3385 31.7729 30.4299C33.9829 27.6084 38.0935 23.4588 45.1264 19.7128C45.2623 19.6405 45.4205 19.6217 45.5696 19.6602C45.7187 19.6987 45.8479 19.7917 45.9318 19.9209C46.0156 20.0501 46.048 20.206 46.0225 20.3579C45.997 20.5098 45.9155 20.6466 45.7941 20.7413C45.7673 20.7623 43.0556 22.8976 39.9349 26.809C37.0628 30.4083 33.2448 36.2939 31.3661 43.892C31.3331 44.0255 31.2563 44.1441 31.148 44.2289C31.0398 44.3137 30.9062 44.3597 30.7687 44.3597L30.7689 44.3595Z" fill="white" />
                                </svg>
                                <p className={style.head}>Зявка отправлена!</p>
                                <p className={style.message}>
                                    Наш менеджер свяжется с вами в ближайшее время для уточнения
                                    деталей
                                </p>
                            </>
                        )}
                        {errorMessage && (
                            <p className={style.head}>Произошла ошибка, попробуйте снова</p>
                        )}
                    </div>
                </OverlayingPopup>
            </Portal>
            ) : null}
        </section>
    )
}
