import React from "react";
import cs from "classnames";
import s from "./StepCardItem.module.scss";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";

export default function StepCardItem({
  className,
  data,
  inCart = false,
  onClick,
}) {
  return (
    <div
      className={cs(s.card, inCart ? s.card_inCart : "", className)}
      onClick={onClick}
    >
      {inCart && <CardInCart />}
      <LazyImageWrapper
        src={data.image}
        alt={data.name}
        className={[s.image]}
        wrapperClass={s.image_wrapper}
      />
      <h3 className={s.card_name}>{data.name}</h3>
      <p className={s.price}>
        {data.price === 0 ? "Бесплатно" : data.price + " ₽"}
      </p>
    </div>
  );
}

const CardInCart = () => {
  return (
    <div className={s.added}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.4605 35.4494C18.3544 35.4493 18.2495 35.4274 18.1523 35.3848C18.0551 35.3423 17.9677 35.2801 17.8957 35.2022L2.66592 18.728C2.56439 18.6181 2.49708 18.4811 2.47224 18.3336C2.44739 18.1861 2.46608 18.0346 2.52602 17.8976C2.58595 17.7605 2.68454 17.6439 2.80971 17.5621C2.93487 17.4802 3.0812 17.4366 3.23076 17.4366H10.5615C10.6716 17.4366 10.7804 17.4602 10.8805 17.5059C10.9807 17.5515 11.0699 17.6181 11.1421 17.7011L16.232 23.5568C16.7821 22.381 17.8469 20.4231 19.7155 18.0374C22.478 14.5105 27.6163 9.32351 36.4074 4.64105C36.5773 4.55057 36.775 4.52708 36.9613 4.57524C37.1477 4.62339 37.3093 4.73968 37.4141 4.90114C37.5189 5.0626 37.5594 5.2575 37.5276 5.44735C37.4957 5.6372 37.3938 5.8082 37.242 5.92659C37.2085 5.95282 33.8189 8.62205 29.918 13.5112C26.3278 18.0104 21.5554 25.3674 19.207 34.865C19.1657 35.0319 19.0698 35.1801 18.9345 35.2861C18.7991 35.3921 18.6322 35.4496 18.4603 35.4497L18.4605 35.4494Z"
          fill="white"
        />
      </svg>
    </div>
  );
};
