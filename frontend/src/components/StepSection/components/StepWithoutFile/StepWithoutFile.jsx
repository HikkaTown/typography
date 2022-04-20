import React from "react";
import s from "./StepWithoutFile.module.scss";

export default function StepWithoutFile({ register, reset }) {
  return (
    <div className={s.container}>
      <label htmlFor="ogrn" className={s.label}>
        <p className={s.label_text}>ОГРН</p>
        <input
          {...register("ogrn")}
          type="text"
          name="ogrn"
          id="ogrn"
          placeholder="1288573894"
          className={s.input}
        />
      </label>
      <label htmlFor="corp_name" className={s.label}>
        <p className={s.label_text}>
          Название (как в уставе) для ООО или укажите ФИО для ИП
        </p>
        <input
          type="text"
          {...register("corp_name")}
          placeholder="ООО КОМФОРТ"
          className={s.input}
          name="corp_name"
          id="corp_name"
        />
        <p className={s.label_description}>
          важно соблюдать регистр букв в названии*
        </p>
      </label>
    </div>
  );
}
