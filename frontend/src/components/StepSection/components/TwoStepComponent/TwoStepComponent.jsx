import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import cs from "classnames";
import s from "./TwoStepComponent.module.scss";
import ArrowBtn from "../../../uikit/ArrowBtn/ArrowBtn";
import StepCardItem from "../../../uikit/StepCardItem/StepCardItem";
import TabProductBtn from "../../../uikit/TabProductBtn/TabProductBtn";

const MutationPlugin = (slider) => {
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      slider.update();
    });
  });
  const config = { childList: true };

  slider.on("created", () => {
    observer.observe(slider.container, config);
    slider.update();
  });
  slider.on("destroyed", () => {
    slider.update();
    observer.disconnect();
  });
};

export default function TwoStepComponent({
  products,
  className,
  select,
  setSelect,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [filtersList, setFiltersList] = useState([]);
  const [activeFilter, setActiveFilter] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      breakpoints: {
        "(min-width: 767.98px)": {
          drag: false,
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
    },
    [MutationPlugin]
  );

  useEffect(() => {
    let filters = [];
    products.map((item) => {
      if (item.category) {
        !filters.includes(item.category) ? filters.push(item.category) : "";
      }
    });
    setFiltersList(filters);
  }, [products]);

  const counter = () => {
    let count = 0;
    products.map((item) => {
      if (item.category === filtersList[activeFilter]) {
        count++;
      }
    });
    return count;
  };

  useEffect(() => {
    if (instanceRef) {
      instanceRef.current.update({
        loop: true,
        breakpoints: {
          "(min-width: 767.98px)": {
            drag: false,
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
    }
  }, [activeFilter]);

  return (
    <div className={s.container}>
      <div className={s.tabs}>
        {filtersList?.length
          ? filtersList.map((item, index) => {
              return (
                <TabProductBtn
                  key={index}
                  isActive={index === activeFilter ? true : false}
                  className={s.tab}
                  onClick={() => {
                    setActiveFilter(index);
                  }}
                >
                  {item}
                </TabProductBtn>
              );
            })
          : ""}
      </div>
      <div className={cs("navigation-wrapper", s.wrapper, className)}>
        <div ref={sliderRef} className={cs("keen-slider", s.slider)}>
          {products.map((item) => {
            if (filtersList?.length) {
              if (item.category === filtersList[activeFilter]) {
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
              }
            } else {
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
            }
          })}
        </div>
        {products.length < 5 && false && loaded && instanceRef.current && (
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
        {loaded && instanceRef?.current && (
          <div
            className={cs(s.progress_bar, s.desktop)}
            style={counter() === 1 ? { display: "none" } : { display: "block" }}
          >
            <span
              className={s.bar}
              key={activeFilter}
              style={{
                width: `${(100 / counter()) * (currentSlide + 1)}%`,
              }}
            ></span>
          </div>
        )}
      </div>
    </div>
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
