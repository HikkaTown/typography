import React from "react";
import NewsCard from "../uikit/NewsCard/NewsCard";
import s from "./NewsPageSection.module.scss";
export default function NewsPageSection() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h1 className={s.header}>Блог нашей компании</h1>
        <div className={s.cards_block}>
          <NewsCard className={s.card} />
          <NewsCard className={s.card} />
          <NewsCard className={s.card} />
          <NewsCard className={s.card} />
          <NewsCard className={s.card} />
          <NewsCard className={s.card} />
          <NewsCard className={s.card} />
          <NewsCard className={s.card} />
          <NewsCard className={s.card} />
        </div>
      </div>
    </section>
  );
}
