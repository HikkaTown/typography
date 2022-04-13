import React from "react";
import s from "./BenefitsSection.module.scss";
import {
  BenefitsIconGeo,
  BenefitsIconPerson,
  BenefitsIconPrint,
  BenefitsIconSending,
} from "./components/BenefitsIcons";
export default function BenefitsSection() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.content}>
          <h2 className={s.header}>Работать с нами удобно</h2>
          <ul className={s.list}>
            <li className={s.list_item}>
              <ListIcon className={s.list_icon} />
              <span className={s.list_text}>
                Выполняем заказы в короткие сроки
              </span>
            </li>
            <li className={s.list_item}>
              <ListIcon className={s.list_icon} />
              <span className={s.list_text}>
                Быстро и просто решаем сложные задачи
              </span>
            </li>
          </ul>
        </div>
        <div className={s.benefits_list}>
          <div className={s.benefits_card}>
            <StarForCard className={s.star} />
            <BenefitsIconGeo className={s.icon} />
            <p className={s.description}>
              Все 5 студий находятся в переделах садового кольца
            </p>
          </div>
          <div className={s.benefits_card}>
            <StarForCard className={s.star} />
            <BenefitsIconPrint className={s.icon} />
            <p className={s.description}>
              Нам подвластны все методы печати, от цифровой до офсетной
            </p>
          </div>
          <div className={s.benefits_card}>
            <StarForCard className={s.star} />
            <BenefitsIconPerson className={s.icon} />
            <p className={s.description}>
              Консультируем по всем вопросам, связанным с подготовкой макета
              к печати
            </p>
          </div>
          <div className={s.benefits_card}>
            <StarForCard className={s.star} />
            <BenefitsIconSending className={s.icon} />
            <p className={s.description}>
              Организуем быструю доставку вашего заказа в любую точку
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const ListIcon = ({ className }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M31.7073 15.658C23.9396 14.1807 17.8176 8.05972 16.3411 0.292207C16.2668 -0.0974024 15.7332 -0.0974024 15.6589 0.292207C14.1824 8.05972 8.06044 14.1824 0.292714 15.658C-0.0975715 15.732 -0.0975715 16.2662 0.292714 16.3403C8.06044 17.8176 14.1824 23.9385 15.6589 31.7078C15.7332 32.0974 16.2668 32.0974 16.3411 31.7078C17.8176 23.9403 23.9396 17.8176 31.7073 16.3403C32.0976 16.2662 32.0976 15.7338 31.7073 15.658Z"
        fill="#056AC7"
      />
    </svg>
  );
};

const StarForCard = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M23.7805 11.7435C17.9547 10.6355 13.3632 6.04479 12.2558 0.219155C12.2001 -0.0730518 11.7999 -0.0730518 11.7442 0.219155C10.6368 6.04479 6.04533 10.6368 0.219536 11.7435C-0.0731786 11.799 -0.0731786 12.1997 0.219536 12.2552C6.04533 13.3632 10.6368 17.9539 11.7442 23.7808C11.7999 24.0731 12.2001 24.0731 12.2558 23.7808C13.3632 17.9552 17.9547 13.3632 23.7805 12.2552C24.0732 12.1997 24.0732 11.8004 23.7805 11.7435Z"
        fill="#181C27"
      />
    </svg>
  );
};
