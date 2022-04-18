import React from "react";
import s from "./CardNewsSlider.module.scss";
import { useKeenSlider } from "keen-slider/react";
import cs from "classnames";
import NewsCard from "../uikit/NewsCard/NewsCard";
export default function CardNewsSlider({ className }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 767.98px)": {
        slides: {
          perView: "auto",
          spacing: 24,
        },
      },
    },
    slides: {
      perView: "auto",
      spacing: 8,
    },
  });
  return (
    <>
      <div className={cs("navigation-wrapper", s.wrapper, className)}>
        <div ref={sliderRef} className={cs("keen-slider", s.slider)}>
          <NewsCard className={cs("keen-slider__slide", s.slide)} />
          <NewsCard className={cs("keen-slider__slide", s.slide)} />
          <NewsCard className={cs("keen-slider__slide", s.slide)} />
          <NewsCard className={cs("keen-slider__slide", s.slide)} />
          <NewsCard className={cs("keen-slider__slide", s.slide)} />
          <NewsCard className={cs("keen-slider__slide", s.slide)} />
          <NewsCard className={cs("keen-slider__slide", s.slide)} />
          <NewsCard className={cs("keen-slider__slide", s.slide)} />
        </div>
      </div>
    </>
  );
}
