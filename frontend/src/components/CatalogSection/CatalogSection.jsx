import React from "react";
import CatalogItem from "../uikit/CatalogItem/CatalogItem";
import s from "./CatalogSection.module.scss";

export default function CatalogSection() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.header}>Каталог наших услуг</h2>
        <div className={s.items}>
          <CatalogItem className={s.item} />
          <CatalogItem className={s.item} />
          <CatalogItem className={s.item} />
          <CatalogItem className={s.item} />
          <CatalogItem className={s.item} />
          <CatalogItem className={s.item} />
          <CatalogItem className={s.item} />
          <CatalogItem className={s.item} />
          <CatalogItem className={s.item} />
          <CatalogItem className={s.item} />
        </div>
      </div>
    </section>
  );
}
