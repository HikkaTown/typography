import React from "react";
import { LazyImage, LazyImageWrapper } from "../LazyImage/LazyImage";
import PlayBtn from "../uikit/PlayBtn/PlayBtn";
import s from "./PathImagesBlock.module.scss";
export default function PathImagesBlock({ images, video }) {
  return (
    <div className={s.container}>
      <div className={s.video_block}>
        <PlayBtn className={s.btn} />
        <LazyImage
          src="https://zoocenter58.ru/u/ckupload/files/s1200%20%282%29.jpg"
          alt=""
          className={[s.image]}
        />
      </div>
      <LazyImage
        src="https://zoo-galereya.ru/img/work/article/a_183_134.jpg"
        className={s.image}
      />
      <LazyImage
        src="https://goodhands.vet/upload/iblock/c45/c45c902c4572a629cc016257973a6126.jpg"
        className={s.image}
      />
      <LazyImage
        src="https://zooteatr.ru/wp-content/uploads/2015/07/morskaya-svinka-shelti.jpg"
        className={s.image}
      />
    </div>
  );
}
