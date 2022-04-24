import React from "react";
import s from "./SeoProduct.module.scss";
export default function SeoProduct({ data }) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.header}>{data.header}</h2>
        <p className={s.description}>{data.seoDescription}</p>
      </div>
    </section>
  );
}
