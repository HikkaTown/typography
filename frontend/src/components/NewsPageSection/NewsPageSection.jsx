import React from "react";
import NewsCard from "@/uikit/NewsCard/NewsCard";
import s from "./NewsPageSection.module.scss";
export default function NewsPageSection({ data, header }) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h1 className={s.header}>{header}</h1>
        <div className={s.cards_block}>
          {data &&
            data.map((item, index) => {
              return <NewsCard className={s.card} key={index} data={item} />;
            })}
        </div>
      </div>
    </section>
  );
}
