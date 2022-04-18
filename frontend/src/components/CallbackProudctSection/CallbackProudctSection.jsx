import React from "react";
import { LazyImage } from "../LazyImage/LazyImage";
import Button2 from "../uikit/Button2/Button2";
import s from "./CallbackProudctSection.module.scss";
export default function CallbackProudctSection() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <LazyImage
          src="/assets/CallbackProductSection/bg_desktop.jpg"
          srcTablet="/assets/CallbackProductSection/bg_tab.jpg"
          srcMobile="/assets/CallbackProductSection/bg_mob.jpg"
          className={[s.background]}
        />
        <h2 className={s.header}>
          Все вопросы уточняйте у менеджера, оставьте заявку и мы свяжемся
          с вами в ближайщее время
        </h2>
        <Button2 className={s.btn}>Оставить заявку</Button2>
      </div>
    </section>
  );
}
