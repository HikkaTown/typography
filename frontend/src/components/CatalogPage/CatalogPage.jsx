import React from "react";
import s from "./CatalogPage.module.scss";
import CatalogBlock from "./components/CatalogBlock/CatalogBlock";
export default function CatalogPage({ header, tabs, id }) {
  return (
    <div className={s.section}>
      <div className={s.container}>
        <h1 className={s.header}>{header}</h1>
        <CatalogBlock tabs={tabs} id={id} />
      </div>
    </div>
  );
}
