import useLockBodyScroll from '@hooks/useLockBodyScroll';
import React, { useState } from 'react'
import { useKeenSlider } from "keen-slider/react";
import Portal from '@/components/Portal/Portal';
import OverlayingPopup from '@/components/OverlayingPopup/OverlayingPopup';
import s from './ModalFormCard.module.scss';
import CloseBtn from '@/components/uikit/CloseBtn/CloseBtn';
import cs from 'classnames';
import ArrowBtn from '@/components/uikit/ArrowBtn/ArrowBtn';
import { LazyImage } from '@/components/LazyImage/LazyImage';
import DownloadIcon from '../DownloadIcon/DownloadIcon';

export default function ModalFormCard({
    isOpened,
    onClose,
    cards,
    currentItem,
}) {
    const [currentSlide, setCurrentSlide] = useState(currentItem);
    const [loaded, setLoaded] = useState(false);

    const lock = useLockBodyScroll();

    const [sliderRef, instanceRef] = useKeenSlider({
        initial: currentItem,
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
                    <div  ref={sliderRef} className={cs("keen-slider", s.slider)}>
                        {cards?.length > 0 ? cards.map((item, index) => {
                            return (
                                <div className={cs("keen-slider__slide", s.slide)} key={index}>
                                    <div className={s.card}>
                                        <img
                                            src={item.image}
                                            className={s.image}
                                            alt={item.name}
                                        />
                                        <div className={s.card_info}>
                                            <p className={s.card_name}>{item.name}</p>
                                            <a href={item.image} className={s.card_download} download title='Скачать'>
                                                <DownloadIcon className={s.download_icon} />
                                                <span className={s.download_text}>Скачать</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : null}
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
            </OverlayingPopup>
        </Portal>
    )
}

function Arrow(props) {
    return (
      <ArrowBtn
        onClick={props.onClick}
        className={cs(s.arrow, props.left ? s.arrow_left : s.arrow_right)}
      />
    );
  }
  