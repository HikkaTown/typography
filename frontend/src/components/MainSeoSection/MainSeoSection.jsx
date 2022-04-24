import React from "react";
import { PATH_IMAGE } from "../../lib/const";
import { LazyImage } from "../LazyImage/LazyImage";
import s from "./MainSeoSection.module.scss";

export default function MainSeoSection({ data }) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.header}>{data.firstHeader}</h2>
        <div className={s.row}>
          <p className={s.seo_text}>
            {data.firstDescription}
            <LazyImage
              src={PATH_IMAGE + data.seoImagePc}
              srcTablet={PATH_IMAGE + data.seoImageTable}
              srcMobile={PATH_IMAGE + data.seoImageMobile}
              alt={data.firstHeader}
              className={[s.seo_image]}
            />
          </p>
        </div>
        <div className={s.row}>
          <h3 className={s.seo_header}>{data.secondHeader}</h3>
          <p className={s.seo_text}>{data.secondDescription}</p>
        </div>
      </div>
    </section>
  );
}
