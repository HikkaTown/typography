import React from "react";
import s from "./FeedbackModal.module.scss";
import { useForm, Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import OverlayingPopup from "../OverlayingPopup/OverlayingPopup";
import Portal from "../Portal/Portal";
import Button2 from "../uikit/Button2/Button2";
import cs from "classnames";

export default function FeedbackModal({ isOpened, onClose }) {
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Portal>
      <OverlayingPopup
        isOpened={isOpened}
        onClose={onClose}
        overlayClass={s.overlay}
      >
        <div className={s.container}>
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <Input
              label={"Имя *"}
              register={register}
              required
              placeholder={"Имя"}
              type="text"
              name={"name"}
              className={s.input}
              errors={errors}
            />
            <Input
              label={"Почта"}
              register={register}
              placeholder={"ivanov@yandex.ru"}
              type="text"
              name={"email"}
              className={s.input}
              errors={errors}
            />
            {/* <InputController
              label={"Телефон *"}
              register={register}
              placeholder={"+7 000 000 00 00"}
              type={"tel"}
              name={"phone"}
              required
              className={s.input}
              errors={errors}
              control={control}
            /> */}
            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange, onBlur, ref } }) => (
                <InputMask
                  mask="(999) 999-9999"
                  onBlur={onBlur}
                  onChange={onChange}
                  inputRef={ref}
                />
              )}
            />

            <Input
              label={"Адрес доставки"}
              register={register}
              placeholder={"Адрес доставки"}
              name="address"
              type="text"
              className={s.input}
              errors={errors}
            />
            <Button2 type="submit">Оставить заявку</Button2>
          </form>
        </div>
      </OverlayingPopup>
    </Portal>
  );
}

const Input = ({
  label,
  className,
  placeholder,
  name,
  type,
  register,
  required,
  errors,
}) => {
  return (
    <div className={s.input_block}>
      <label className={s.label}>{label}</label>
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

// const InputController = ({
//   label,
//   className,
//   placeholder,
//   name,
//   type,
//   register,
//   required,
//   errors,
//   control,
// }) => {
//   return (
//     <div className={s.input_block}>
//       <label className={s.label}>{label}</label>
//       <Controller
//         name="phone"
//         control={control}
//         rules={{
//           required: true,
//         }}
//         render={({ field: { onChange, ref } }) => (
//           <InputMask
//             mask="+7 999 999 99 99"
//             maskChar=""
//             placeholder={placeholder}
//             // value={value}
//             defaultValue=""
//             onChange={onChange}
//             // inputRef={ref}
//             ref={ref}
//             type="tel"
//             className={cs(s.input, errors[name] && s.input_error)}
//           />
//         )}
//       />
//     </div>
//   );
// };
