import dynamic from "next/dynamic";
import React from "react";
import s from "./SeoProduct.module.scss";

const DynamicMarkdown = dynamic(() => import("react-markdown"), { ssr: true });

export default function SeoProduct({ data }) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.header}>{data.header}</h2>
        <div className={s.description}>
          <DynamicMarkdown>{data.seoDescription}</DynamicMarkdown>
        </div>
      </div>
    </section>
  );
}
