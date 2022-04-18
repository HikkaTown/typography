import React from "react";
import s from "./DeliveryStep.module.scss";
import RadioBtn from "../../../uikit/RadioBtn/RadioBtn";

export default function DeliveryStep({
  officesData,
  deliveryAmount,
  select,
  setSelect,
}) {
  return (
    <div className={s.container}>
      {officesData.map((item, index) => {
        return (
          <div
            className={s.btn_line}
            key={item.id}
            onClick={() => {
              setSelect(item);
            }}
          >
            <RadioBtn
              className={s.radio}
              isChecked={select?.id === item.id ? true : false}
            />
            <p className={s.address_text}>{item.address}</p>
          </div>
        );
      })}
      <div
        className={s.btn_line}
        onClick={() => {
          setSelect("delivery");
        }}
      >
        <RadioBtn
          className={s.radio}
          isChecked={select === "delivery" ? true : false}
        />
        <p className={s.address_text}>Доставка + {deliveryAmount} ₽</p>
      </div>
    </div>
  );
}
