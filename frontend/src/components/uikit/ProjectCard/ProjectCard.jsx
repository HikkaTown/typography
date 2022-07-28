import React, { useState } from "react";
import cs from "classnames";
import s from "./ProjectCard.module.scss";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";
import ModalProjectPhoto from "../../ModalProjectPhoto/ModalProjectPhoto";
import { AnimatePresence } from "framer-motion";
import { PATH_IMAGE } from "../../../lib/const";

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
          src={PATH_IMAGE + data.images[0]}
          srcMobile={PATH_IMAGE + data.images[0]}
          alt={""}
          className={[s.image]}
          wrapperClass={s.image_wrapper}
        />
        <span className={s.hashtag}>{data.category}</span>
      </div>
      <AnimatePresence>
        {isOpened && (
          <ModalProjectPhoto
            isOpened={isOpened}
            onClose={handleOpen}
            photos={data.images}
          />
        )}
      </AnimatePresence>
    </>
  );
}
