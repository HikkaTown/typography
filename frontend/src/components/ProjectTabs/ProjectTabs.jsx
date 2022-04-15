import React from "react";
import Tab from "../uikit/Tab/Tab";
import s from "./ProjectTabs.module.scss";

export default function ProjectTabs() {
  return (
    <div className={s.container}>
      <Tab className={s.tab} isActive={true}>
        Все
      </Tab>
      <Tab className={s.tab}>Календари</Tab>
      <Tab className={s.tab}>Визитки</Tab>
      <Tab className={s.tab}>Фото</Tab>
      <Tab className={s.tab}>Таблички</Tab>
      <Tab className={s.tab}>Таблички</Tab>
      <Tab className={s.tab}>Таблички</Tab>
      <Tab className={s.tab}>Таблички</Tab>
    </div>
  );
}
