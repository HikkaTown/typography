import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import cs from "classnames";
import s from "./NewsSlider.module.scss";
import ArrowBtn from "@/uikit/ArrowBtn/ArrowBtn";
import NewsCard from "@/uikit/NewsCard/NewsCard";

export default function NewsSlider({ className, data }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
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
      // origin: "center",
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
            data.map((item, index) => {
              return (
                <NewsCard
                  className={cs("keen-slider__slide", s.slide)}
                  key={index}
                  data={item}
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
