import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import cs from "classnames";
import s from "./ReviewSlider.module.scss";
import ArrowBtn from "../../../uikit/ArrowBtn/ArrowBtn";
import ReviewCard from "../../../uikit/ReviewCard/ReviewCard";

export default function ReviewSlider({ className, data }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 767.98px)": {
        slides: {
          perView: 2,
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
          {data &&
            data.map((item) => {
              return (
                <ReviewCard
                  key={item.id}
                  data={item}
                  className={cs("keen-slider__slide", s.slide)}
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
      </div>
    </>
  );
}

function Arrow(props) {
  return (
    <ArrowBtn
      onClick={props.onClick}
      className={cs(s.arrow, props.left ? s.arrow_left : "")}
    />
  );
}
