import React from "react";
import CatalogItem from "@/uikit/CatalogItem/CatalogItem";
import s from "./CatalogSection.module.scss";
import { Element } from "react-scroll";
export default function CatalogSection({ data }) {
  return (
    <section className={s.section}>
      <Element id="catalog" />
      <div className={s.container}>
        <h2 className={s.header}>Каталог наших услуг</h2>
        <div className={s.items}>
          {data &&
            data.map((item, index) => {
              return (
                <CatalogItem
                  key={index}
                  className={s.item}
                  data={item}
                  href={`/catalog?id=${item.id}`}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
