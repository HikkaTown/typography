import React from "react";
import NewsSlider from "./components/NewsSlider/NewsSlder";
import s from "./NewsSection.module.scss";
export default function NewsSection({ data }) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <Star className={s.first_star} />
        <Star className={s.second_star} />
        <Star className={s.three_star} />
        <Star className={s.four_star} />
        <div className={s.content}>
          <span className={s.header}>Блог нашей компании</span>
          <p className={s.title}>
            Для нас важнее всего, чтобы клиенты получали от нас больше, чем
            планировали
          </p>
        </div>
        <NewsSlider className={s.slider} data={data} />
      </div>
    </section>
  );
}

const Star = ({ className }) => {
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
        fill="#181C27"
      />
    </svg>
  );
};

