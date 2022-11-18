import React from "react";
import { PATH_IMAGE } from "@/lib/const";
import { LazyImage } from "@/components/LazyImage/LazyImage";
import s from "./MainSeoSection.module.scss";
import reactMarkdown from "react-markdown";

export default function MainSeoSection({ data }) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.header}>{data.firstHeader}</h2>
        <div className={s.row}>
          <div className={s.seo_text}>
            <reactMarkdown>{data.firstDescription}</reactMarkdown>
          </div>
          <LazyImage
            src={PATH_IMAGE + data.seoImagePc}
            srcTablet={PATH_IMAGE + data.seoImageTablet}
            srcMobile={PATH_IMAGE + data.seoImageMobile}
            alt={data.firstHeader}
            className={[s.seo_image]}
          />
        </div>
        <h2 className={s.seo_header}>{data.secondHeader}</h2>
        <div className={s.row}>
          <div className={s.seo_text}>
            <reactMarkdown>{data.secondDescription}</reactMarkdown>
          </div>
        </div>
      </div>
    </section>
  );
}
