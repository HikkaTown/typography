import React from "react";
import { LazyImage, LazyImageWrapper } from "../LazyImage/LazyImage";
import PlayBtn from "../uikit/PlayBtn/PlayBtn";
import s from "./PathImagesBlock.module.scss";
export default function PathImagesBlock({ images, video }) {
  return (
    <div className={s.container}>
      <div className={s.video_block}>
        <PlayBtn className={s.btn} />
        <LazyImage src={video.url} alt="" className={[s.image]} />
      </div>
      {images.map((item, index) => {
        return <LazyImage key={index} src={item.url} className={s.image} />;
      })}
    </div>
  );
}
