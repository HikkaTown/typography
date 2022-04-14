import React from "react";
import cs from "classnames";
import s from "./ReviewSection.module.scss";
import { LazyImage } from "../LazyImage/LazyImage";
import ReviewSlider from "./components/ReviewSlider/ReviewSlider";

export default function ReviewSection() {
  return (
    <section className={s.section}>
      <h2 className={s.header_mobile}>Что говорят о нас</h2>
      <div className={s.container}>
        <LazyImage
          src="/assets/ReviewSection/image_tab.png"
          srcMobile="/assets/ReviewSection/image_mob.png"
          className={[s.image]}
          wrapperClass={s.image_wrapper}
        />
        <div className={s.content}>
          <h2 className={s.header}>Что говорят о нас</h2>
          <ReviewSlider className={s.slider} />
        </div>
      </div>
    </section>
  );
}
