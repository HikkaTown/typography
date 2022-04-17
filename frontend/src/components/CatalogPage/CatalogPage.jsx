import React from "react";
import s from "./CatalogPage.module.scss";
import CatalogBlock from "./components/CatalogBlock/CatalogBlock";
export default function CatalogPage() {
  return (
    <div className={s.section}>
      <div className={s.container}>
        <h1 className={s.header}>Каталог услуг</h1>
        <CatalogBlock />
      </div>
    </div>
  );
}
