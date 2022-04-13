import React from "react";
import cs from "classnames";
import s from "./ReviewCard.module.scss";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";
export default function ReviewCard({ className }) {
  return (
    <div className={cs(s.card, className)}>
      <div className={s.person_data}>
        <LazyImageWrapper
          src={
            "https://javasea.ru/uploads/posts/2021-09/1632834474_art_-morda-lva-vo-mrake22.jpg"
          }
          alt={""}
          className={[s.image]}
          wrapperClass={s.image_wrapper}
        />
        <div className={s.person_info}>
          <h3 className={s.person_name}>Константин Иванов</h3>
          <div className={s.person_start}>
            <>{renderStars(5)}</>
          </div>
        </div>
      </div>
      <p className={s.person_text}>
        текст отзыва/текст отзыва/текст отзыва/текст отзыва/текст отзыва/текст
        отзыва/текст отзыва/текст отзыва/отзыва/текст отзыва/текст отзыва/
      </p>
    </div>
  );
}

const StarComponent = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={s.className}
    >
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill="#FEB648"
        stroke="#FEB648"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// TODO: исправить колхоз
const renderStars = (count) => {
  if (count === 0) {
    return;
  }
  if (count === 1) {
    return <StarComponent className={s.star} />;
  }
  if (count === 2) {
    return (
      <>
        <StarComponent className={s.star} />
        <StarComponent className={s.star} />
      </>
    );
  }
  if (count === 3) {
    return (
      <>
        <StarComponent className={s.star} />
        <StarComponent className={s.star} />
        <StarComponent className={s.star} />
      </>
    );
  }
  if (count === 4) {
    return (
      <>
        <StarComponent className={s.star} />
        <StarComponent className={s.star} />
        <StarComponent className={s.star} />
        <StarComponent className={s.star} />
      </>
    );
  }
  if (count === 5) {
    return (
      <>
        <StarComponent className={s.star} />
        <StarComponent className={s.star} />
        <StarComponent className={s.star} />
        <StarComponent className={s.star} />
        <StarComponent className={s.star} />
      </>
    );
  }
};
