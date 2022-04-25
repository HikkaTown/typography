import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import cs from "classnames";
import OverlayingPopup from "@/components/OverlayingPopup/OverlayingPopup";
import Portal from "@/components/Portal/Portal";
import { LazyImageWrapper } from "@/components/LazyImage/LazyImage";
import ArrowBtn from "@/uikit/ArrowBtn/ArrowBtn";
import s from "./ModalProjectPhoto.module.scss";
import CloseBtn from "@/uikit/CloseBtn/CloseBtn";
import { PATH_IMAGE } from "@/lib/const";

export default function ModalProjectPhoto({ isOpened, onClose, photos }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      size: 1,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <Portal>
      <OverlayingPopup
        isOpened={isOpened}
        onClose={onClose}
        child={s.overlay}
        overlayClass={s.overlay_wrapper}
      >
        <div className={cs("navigation-wrapper", s.wrapper)}>
          <CloseBtn className={s.close} onClick={onClose} />
          <div ref={sliderRef} className={cs("keen-slider", s.slider)}>
            {photos.map((item, index) => {
              return (
                <div className={cs("keen-slider__slide", s.slide)} key={index}>
                  <LazyImageWrapper
                    ratio={1}
                    className={[s.image]}
                    wrapperClass={s.image_wrapper}
                    src={PATH_IMAGE + item}
                    alt={""}
                  />
                </div>
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
            <div className={s.counter}>
              {currentSlide + 1}/
              {instanceRef.current.track.details.slides.length}
            </div>
          )}
        </div>
      </OverlayingPopup>
    </Portal>
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
