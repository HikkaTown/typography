import React from "react";
import cs from "classnames";
import s from "./ReviewSection.module.scss";
import { LazyImage } from "@/components/LazyImage/LazyImage";
import ReviewSlider from "./components/ReviewSlider/ReviewSlider";

export default function ReviewSection({ data }) {
  return (
    <section className={s.section}>
      <span className={s.header_mobile}>Что говорят о нас</span>
      <div className={s.container}>
        <LazyImage
          src="/assets/ReviewSection/image_tab.png"
          srcMobile="/assets/ReviewSection/image_mob.png"
          className={[s.image]}
          wrapperClass={s.image_wrapper}
        />
        <div className={s.content}>
          <span className={s.header}>Что говорят о нас</span>
          <ReviewSlider className={s.slider} data={data} />
        </div>
      </div>
    </section>
  );
}
