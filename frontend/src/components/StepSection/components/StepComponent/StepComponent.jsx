import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import cs from "classnames";
import s from "./StepComponent.module.scss";
import ArrowBtn from "../../../uikit/ArrowBtn/ArrowBtn";
import StepCardItem from "../../../uikit/StepCardItem/StepCardItem";

export default function StepComponent({
  products,
  className,
  select,
  setSelect,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
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
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className={cs("navigation-wrapper", s.wrapper, className)}>
        <div ref={sliderRef} className={cs("keen-slider", s.slider)}>
          {products.map((item) => {
            return (
              <StepCardItem
                className={cs("keen-slider__slide", s.slide)}
                key={item.id}
                data={item}
                inCart={item.id === select?.id ? true : false}
                onClick={() => {
                  setSelect((prev) => (prev?.id !== item.id ? item : null));
                }}
              />
            );
          })}
        </div>
        {loaded && instanceRef.current && (
          <div className={s.arrows}>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            />
          </div>
        )}
        {loaded && instanceRef.current && (
          <div className={s.progress_bar}>
            <span
              className={s.bar}
              style={{
                width: `${
                  (100 / instanceRef.current.track.details.slides.length) *
                  (currentSlide + 1)
                }%`,
              }}
            ></span>
          </div>
        )}
      </div>
    </>
  );
}

function Arrow(props) {
  return (
    <ArrowBtn
      onClick={props.onClick}
      className={cs(s.arrow, props.left ? s.arrow_left : s.arrow_right)}
    />
  );
}
