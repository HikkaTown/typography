import React from "react";
import s from "./FeedbackModal.module.scss";
import { useForm, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import OverlayingPopup from "../OverlayingPopup/OverlayingPopup";
import Portal from "../Portal/Portal";
import Button2 from "../uikit/Button2/Button2";
import cs from "classnames";
import AddFileBtn from "../uikit/AddFileBtn/AddFileBtn";
import OfficeDropdown from "../uikit/OfficeDropdown/OfficeDropdown";

export default function FeedbackModal({
  header,
  isOpened,
  onClose,
  delivery = false,
  file = true,
}) {
  const {
    register,
    formState: { errors },
    control,
    reset,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Portal>
      <OverlayingPopup
        isOpened={isOpened}
        onClose={onClose}
        overlayClass={s.overlay}
        child={s.child}
      >
        <div className={s.container}>
          <CloseBtn onClick={onClose} />
          <h1 className={s.header}>{header ? header : "Обратная связь"}</h1>
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <Input
              label={"Имя"}
              register={register}
              required
              placeholder={"Имя"}
              type="text"
              name={"name"}
              className={s.input}
              classNameBlock={s.name}
              errors={errors}
            />
            <Input
              label={"Почта"}
              register={register}
              placeholder={"ivanov@yandex.ru"}
              type="text"
              name={"email"}
              className={s.input}
              classNameBlock={s.email}
              errors={errors}
            />
            <InputController
              label={"Телефон"}
              register={register}
              placeholder={"+7 000 000 00 00"}
              type={"tel"}
              name={"phone"}
              classNameBlock={s.phone}
              required
              className={cs(s.input, s.phone)}
              errors={errors}
              control={control}
            />
            {file && (
              <div className={cs(s.input_block, s.file)}>
                <label className={s.label}>Прикрепите документ</label>
                <AddFileBtn register={register} reset={reset} />
              </div>
            )}
            {!delivery && (
              <Input
                label={"Ваш комментарий"}
                register={register}
                placeholder={"Ваш комментарий"}
                name="comentary"
                type={"text"}
                className={cs(s.input, s.input_comment)}
                classNameBlock={s.comment}
                errors={errors}
              />
            )}
            {delivery && (
              <>
                <Input
                  label={"Адрес доставки"}
                  register={register}
                  placeholder={"Адрес доставки"}
                  name="address"
                  type="text"
                  className={cs(s.input, s.input_comment)}
                  classNameBlock={s.comment}
                  errors={errors}
                />
                <p className={s.description}>
                  Нажмая на кнопку, соглашаюсь на обработку персональных данных
                </p>
              </>
            )}
            {!delivery && (
              <div className={cs(s.input_block, s.address)}>
                <label className={s.label}>
                  Выберите офис обращения <span className={s.star}>*</span>
                </label>
                <OfficeDropdown className={s.dropdown} />
                <p className={s.description}>
                  Нажмая на кнопку, соглашаюсь на обработку персональных данных
                </p>
              </div>
            )}
            <Button2 type="submit" className={s.submit}>
              Оставить заявку
            </Button2>
          </form>
        </div>
      </OverlayingPopup>
    </Portal>
  );
}

const CloseBtn = ({ onClick }) => {
  return (
    <button className={s.close} onClick={onClick} type="button">
      <span className={s.icon}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 8L8 24"
            stroke="#37465D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 8L24 24"
            stroke="#37465D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
};

const Input = ({
  label,
  className,
  placeholder,
  name,
  type,
  register,
  required,
  errors,
  classNameBlock,
}) => {
  return (
    <div className={cs(s.input_block, classNameBlock)}>
      <label className={s.label}>
        {label} {required && <span className={s.star}>*</span>}
      </label>
      <input
        className={cs(className, errors[name] && s.input_error)}
        {...register(name, { required })}
        placeholder={placeholder}
        name={name}
        type={type}
      />
    </div>
  );
};

const InputController = ({
  label,
  className,
  placeholder,
  name,
  type,
  register,
  required,
  errors,
  control,
  classNameBlock,
}) => {
  return (
    <div className={cs(s.input_block, classNameBlock)}>
      <label className={s.label}>
        {label} {required && <span className={s.star}>*</span>}
      </label>
      <Controller
        name="phone"
        control={control}
        defaultValue=""
        rules={{
          required: true,
          pattern: /\+\d \d\d\d \d\d\d \d\d \d\d/gm,
        }}
        render={({ field: { onChange, value, ref } }) => (
          <IMaskInput
            name="phone"
            className={cs(s.input, errors.phone && s.input_error)}
            type="tel"
            mask="+7 000 000 00 00"
            placeholder={"+7 000 000 00 00"}
            value={value}
            onChange={onChange}
            ref={ref}
          />
        )}
      />
    </div>
  );
};
