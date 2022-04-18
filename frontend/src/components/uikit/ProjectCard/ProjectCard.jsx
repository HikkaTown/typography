import React, { useState } from "react";
import cs from "classnames";
import s from "./ProjectCard.module.scss";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";
import ModalProjectPhoto from "../../ModalProjectPhoto/ModalProjectPhoto";
import { AnimatePresence } from "framer-motion";

const testPhoto = [
  {
    src: "https://mobimg.b-cdn.net/v3/fetch/f0/f0d1686d41677c0c43745978a3954df5.jpeg",
    srcMobile:
      "https://mobimg.b-cdn.net/v3/fetch/f0/f0d1686d41677c0c43745978a3954df5.jpeg",
  },
  {
    src: "https://mobimg.b-cdn.net/v3/fetch/c0/c06b22033ed71e8a54cef9492e5e1f2d.jpeg",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgHSdLX8DFDxjFvFNeta9TXK0PP98hzAZcMktMe3y5ywaVn91lWxXE77xHYCybMaB8hk&usqp=CAU",
  },
  {
    src: "https://www.dive.is/thumbs/diving-snorkeling-tours/snorkeling-day-tours/private-snorkeling-day-tour/iceland_day_3_silfra_andersnyberg-260-720x720.jpg",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGu0xRGFOJ8zKtM2jiBrMmT5lxJ3iJH41YwA&usqp=CAU",
  },
  {
    src: "https://i.pinimg.com/originals/fb/b0/e9/fbb0e99e6b5cfcc53ba26a9c2a3a97fc.jpg",
  },
  {
    src: "https://www.mk.ru/upload/entities/2022/04/14/07/articlesImages/image/34/32/f6/73/6ac6f889aa43b870b5ea5200911b526e.jpg",
  },
  {
    src: "https://goldcigars.ru/image/cache/catalog/goods/607a3b7231fc9029863f1e4e5ae8eb5b-720x720.jpg",
  },
];

export default function ProjectCard({ className, data }) {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <>
      <div className={cs(s.card, className)} onClick={handleOpen}>
        <div className={s.overlay}></div>
        <LazyImageWrapper
          src={testPhoto[0].src}
          srcMobile={testPhoto[0].srcMobile}
          alt={""}
          className={[s.image]}
          wrapperClass={s.image_wrapper}
        />
        <span className={s.hashtag}>Фото на паспорт</span>
      </div>
      <AnimatePresence>
        {isOpened && (
          <ModalProjectPhoto
            isOpened={isOpened}
            onClose={handleOpen}
            photos={testPhoto}
          />
        )}
      </AnimatePresence>
    </>
  );
}
