import React from "react";
import { LazyImage, LazyImageWrapper } from "../LazyImage/LazyImage";
import s from "./ProductMainSection.module.scss";
export default function ProductMainSection() {
  return (
    <section className={s.section}>
      <div className={s.container} style={{ background: "#FEB648" }}>
        <h1 className={s.header}>Новая печать от 700 ₽</h1>
        <p className={s.description}>
          описание/описание/описание/описание/описание/описаниеописание/описание/описание/описание/описание/описаниеописание/описание/описание/описание/описание/описание
        </p>
        <LazyImageWrapper
          src="/assets/PageProduct1/hero_pc.png"
          srcTablet={"/assets/PageProduct1/hero_tab.png"}
          srcMobile={"/assets/PageProduct1/hero_mob.png"}
          className={[s.background]}
          wrapperClass={s.background_wrapper}
          lazy={false}
        />
      </div>
    </section>
  );
}
