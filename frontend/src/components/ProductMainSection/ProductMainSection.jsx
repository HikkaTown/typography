import React from "react";
import { LazyImage } from "../LazyImage/LazyImage";
import s from "./ProductMainSection.module.scss";
export default function ProductMainSection() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h1 className={s.header}>Новая печать от 700 ₽</h1>
        <p className={s.description}>
          описание/описание/описание/описание/описание/описаниеописание/описание/описание/описание/описание/описаниеописание/описание/описание/описание/описание/описание
        </p>
        <LazyImage
          src="/assets/PageProduct1/hero_pc.png"
          srcTablet={"/assets/PageProduct1/hero_tab.png"}
          srcMobile={"/assets/PageProduct1/hero_mob.png"}
          className={[s.background]}
          lazy={false}
        />
      </div>
    </section>
  );
}
