import React from "react";
import cs from "classnames";
import s from "./ProjectCard.module.scss";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";
export default function ProjectCard({ className, data }) {
  return (
    <div className={cs(s.card, className)}>
      <div className={s.overlay}></div>
      <LazyImageWrapper
        src={
          "https://www.ixbt.com/img/n1/news/2021/10/2/22459ff25f8eff76bddf34124cc2c85b16f4cd4a_large.jpg"
        }
        srcMobile={
          "https://www.ixbt.com/img/n1/news/2021/10/2/22459ff25f8eff76bddf34124cc2c85b16f4cd4a_large.jpg"
        }
        alt={""}
        className={[s.image]}
        wrapperClass={s.image_wrapper}
      />
      <span className={s.hashtag}>Фото на паспорт</span>
    </div>
  );
}
