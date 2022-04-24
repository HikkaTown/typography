import React from "react";
import cs from "classnames";
import s from "./ReviewCard.module.scss";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";
import { PATH_IMAGE } from "../../../lib/const";
export default function ReviewCard({ className, data }) {
  return (
    <div className={cs(s.card, className)}>
      <div className={s.person_data}>
        <LazyImageWrapper
          src={PATH_IMAGE + data.userPhoto}
          alt={data.personName}
          className={[s.image]}
          wrapperClass={s.image_wrapper}
        />
        <div className={s.person_info}>
          <h3 className={s.person_name}>{data.personName}</h3>
          <div className={s.person_start}>
            <>
              {renderStars(+data.stars).map((item) => {
                return item;
              })}
            </>
          </div>
        </div>
      </div>
      <p className={s.person_text}>{data.reviewText}</p>
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

const renderStars = (amount) => {
  let counter = amount;
  const stars = [];
  while (counter) {
    stars.push(<StarComponent className={s.star} key={counter} />);
    counter--;
  }
  return stars;
};
