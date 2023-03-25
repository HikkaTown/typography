import React, { useState } from 'react'
import { Input, InputController } from '../FeedbackModal/FeedbackModal'
import { useForm, Controller } from "react-hook-form";
import Button2 from '../uikit/Button2/Button2'
import style from './CallbackLandingSection.module.scss'
import cs from 'classnames'
import { callbackOrder } from '@/lib/callbackOrder';

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
            },
            handlerThanks,
            handlerError
        );
    };

    return (
        <section className={style.section}>
            <div className={style.outer_container}>
                <div className={style.container}>
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
                        <Button2 className={style.submit}>Получить</Button2>
                        <p className={style.subFormText}>
                            Нажимая на кнопку, соглашаюсь на обработку персональных данных
                        </p>
                    </form>
                    <p className={style.subtext}>
                        Или напишите нам на <a className={style.link} href="mailto:mail@1ppc.ru">почту</a> или в <a target={'_blank'} className={style.link} href="https://t.me/Zinkovsky">телеграм</a>
                    </p>
                </div>
            </div>
        </section>
    )
}
