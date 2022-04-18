import React, { Component } from "react";
import Tab from "../../../uikit/Tab/Tab";
import s from "./CatalogTabs.module.scss";
import cs from "classnames";
export default function CatalogTabs({ className }) {
  return (
    <div className={cs(s.tabs, className)}>
      <Tab className={s.tab} isActive={true}>
        Брошюровка и переплёт
      </Tab>
      <Tab className={s.tab}>Визитки</Tab>
      <Tab className={s.tab}>Календари</Tab>
      <Tab className={s.tab}>Копирование, сканирование</Tab>
      <Tab className={s.tab}>Ламинирование</Tab>
      <Tab className={s.tab}>Листовки и буклеты</Tab>
      <Tab className={s.tab}>Печать</Tab>
      <Tab className={s.tab}>Печати и штампы</Tab>
      <Tab className={s.tab}>Таблички</Tab>
      <Tab className={s.tab}>Фото на документы</Tab>
    </div>
  );
}
