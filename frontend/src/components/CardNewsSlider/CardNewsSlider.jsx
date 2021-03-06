import React, { useEffect } from "react";
import s from "./CardNewsSlider.module.scss";
import { useKeenSlider } from "keen-slider/react";
import cs from "classnames";
import NewsCard from "@/uikit/NewsCard/NewsCard";
import { useRouter } from "next/router";
export default function CardNewsSlider({ className, data, currentUrl }) {
  const router = useRouter();
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
  useEffect(() => {
    instanceRef.current.update();
  }, [router, instanceRef]);
  return (
    <>
      <div className={cs("navigation-wrapper", s.wrapper, className)}>
        <div ref={sliderRef} className={cs("keen-slider", s.slider)}>
          {data &&
            data.map((item, index) => {
              if (item) {
                if (currentUrl !== item.url) {
                  return (
                    <NewsCard
                      key={index}
                      className={cs("keen-slider__slide", s.slide)}
                      data={item}
                    />
                  );
                }
              }
            })}
        </div>
      </div>
    </>
  );
}
