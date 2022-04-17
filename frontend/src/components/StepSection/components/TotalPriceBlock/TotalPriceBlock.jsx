import React from "react";
import Button2 from "../../../uikit/Button2/Button2";
import TrashBtn from "../../../uikit/TrashBtn/TrashBtn";
import s from "./TotalPriceBlock.module.scss";
export default function TotalPriceBlock() {
  return (
    <div className={s.container}>
      <div className={s.block}>
        <div className={s.content}>
          <h3 className={s.header}>Ваш заказ</h3>
          <p className={s.description}>
            Изготовление печати 700 ₽ + оснастка + дизайн-макет + доставка
          </p>
        </div>
        <div className={s.price}>
          <p className={s.cost}>Сумма</p>
          <div className={s.amount}>
            <p className={s.amount_text}>
              1 250 <span className={s.currency}>₽</span>
            </p>
            <TrashBtn className={s.clear_btn} />
          </div>
        </div>
        <Button2 className={s.order_btn}>Оформить заказ</Button2>
      </div>
    </div>
  );
}
