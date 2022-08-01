import React, { useState } from "react";
import CatalogItem from "@/uikit/CatalogItem/CatalogItem";
import s from "./CatalogSection.module.scss";
import { Element } from "react-scroll";
import Button2 from "../uikit/Button2/Button2";
export default function CatalogSection({ data, header }) {
  const [size, setSize] = useState(8);

  const handleMoreBtn = () => {
    setSize((prev) => prev + 8);
  };

  return (
    <section className={s.section}>
      <Element id="catalog" />
      <div className={s.container}>
        <span className={s.header}>
          {header ? header : "Каталог наших услуг"}
        </span>
        <div className={s.items}>
          {data &&
            data.slice(0, size).map((item, index) => {
              return (
                <CatalogItem
                  key={index}
                  className={s.item}
                  data={item}
                  href={item?.meta?.metaHead ? `/${item.url}` : `/${item.url}`}
                />
              );
            })}
        </div>
        {data && size < data.length ? (
          <Button2 className={s.btn} onClick={handleMoreBtn}>
            Показать ещё
          </Button2>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
