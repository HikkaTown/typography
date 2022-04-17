import React from "react";
import CatalogItem from "../../../uikit/CatalogItem/CatalogItem";
import CatalogTabs from "../CatalogTabs/CatalogTabs";
import s from "./CatalogBlock.module.scss";
export default function CatalogBlock() {
  return (
    <div className={s.container}>
      <CatalogTabs className={s.tabs} />
      <div className={s.items}>
        <CatalogItem className={s.item} />
        <CatalogItem className={s.item} />
        <CatalogItem className={s.item} />
        <CatalogItem className={s.item} />
      </div>
    </div>
  );
}
