import React from "react";
import cs from "classnames";
import s from "./ShortDescription.module.scss";
export default function ShortDescription({ data }) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <Item className={s.card} text={data.firstBlock} />
        <Item className={s.card} text={data.secondBlock} />
        <Item className={s.card} text={data.thirdBlock} />
      </div>
    </section>
  );
}

const Item = ({ className, data, text }) => {
  return (
    <div className={cs(s.item, className)}>
      <div className={s.check}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.4605 35.4493C18.3544 35.4493 18.2495 35.4273 18.1523 35.3848C18.0551 35.3423 17.9677 35.2801 17.8957 35.2022L2.66592 18.7279C2.56439 18.6181 2.49708 18.4811 2.47224 18.3336C2.44739 18.1861 2.46608 18.0345 2.52602 17.8975C2.58595 17.7605 2.68454 17.6439 2.80971 17.562C2.93487 17.4802 3.0812 17.4365 3.23076 17.4365H10.5615C10.6716 17.4366 10.7804 17.4602 10.8805 17.5058C10.9807 17.5514 11.0699 17.618 11.1421 17.7011L16.232 23.5568C16.7821 22.3809 17.8469 20.4231 19.7155 18.0374C22.478 14.5105 27.6163 9.32347 36.4074 4.641C36.5773 4.55052 36.775 4.52704 36.9613 4.57519C37.1477 4.62334 37.3093 4.73963 37.4141 4.90109C37.5189 5.06256 37.5594 5.25745 37.5276 5.4473C37.4957 5.63715 37.3938 5.80816 37.242 5.92654C37.2085 5.95277 33.8189 8.622 29.918 13.5112C26.3278 18.0104 21.5554 25.3673 19.207 34.865C19.1657 35.0319 19.0698 35.1801 18.9345 35.2861C18.7991 35.392 18.6322 35.4496 18.4603 35.4496L18.4605 35.4493Z"
            fill="#181C27"
          />
        </svg>
      </div>
      <p className={s.description}>
        {text ? text : "Любим свою работу и отдаёмся ей полностью"}
      </p>
    </div>
  );
};
