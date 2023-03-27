import React, {useState} from "react";
import { useKeenSlider } from "keen-slider/react";
import ArrowBtn from "@/components/uikit/ArrowBtn/ArrowBtn";
import cs from 'classnames'
import s from './PersonalSlider.module.scss'
import PersonalCard from "../PersonalCard/PersonalCard";

export default function PersonalSlider({ className, data }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
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
        "(min-width: 1100.98px)": {
            slides: {
              perView: 3,
              spacing: 24,
            },
          },
      },
      slides: {
        perView: "auto",
        spacing: 16,
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
        setIsVisible(null)
      },
      created() {
        setLoaded(true);
      },
    });

    const handleClick = (item, index) => {
        setIsVisible(item)
    }
  
    return (
      <>
        <div className={cs("navigation-wrapper", s.wrapper, className)}>
          <div ref={sliderRef} className={cs("keen-slider", s.slider)}>
            {data &&
               data.sort((a,b) => { return b.specific - a.specific}).map((item, index) => {
                return (
                  <PersonalCard
                    key={item.id}
                    index={index}
                    className={cs("keen-slider__slide", s.slide)}
                    personInfo={item}
                    onClick={handleClick}
                    isVisible={isVisible?.id === item.id}
                  />
                );
              })}
          </div>
          {loaded && instanceRef.current && (
            <div className={s.arrows}>
              <Arrow
                left
                onClick={(e) =>
                  {
                    e.stopPropagation() || instanceRef.current?.prev()
                    setIsVisible(null)
                }
                  
                }
              />
  
              <Arrow
                onClick={(e) =>
                  {
                    e.stopPropagation() || instanceRef.current?.next()
                    setIsVisible(null)
                }
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
  