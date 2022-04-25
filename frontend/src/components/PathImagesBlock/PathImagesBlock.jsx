import React from "react";
import { PATH_IMAGE } from "@/lib/const";
import { LazyImage } from "@/components/LazyImage/LazyImage";
import PlayBtn from "@/uikit/PlayBtn/PlayBtn";
import s from "./PathImagesBlock.module.scss";
export default function PathImagesBlock({ images, video }) {
  return (
    <div className={s.container}>
      <div className={s.video_block}>
        <PlayBtn className={s.btn} />
        <LazyImage src={PATH_IMAGE + video.url} alt="" className={[s.image]} />
      </div>
      {images.map((item, index) => {
        return (
          <LazyImage key={index} src={PATH_IMAGE + item} className={s.image} />
        );
      })}
    </div>
  );
}
