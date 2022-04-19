import React from "react";
import cs from "classnames";
import {
  Book,
  Broshure,
  Line,
  Newspaper,
  Paper,
  PaperRoll,
  Photo,
  Photoaparat,
  Plotter,
  Stamp,
  Star,
  Textprint,
} from "./components/Icons";
import s from "./ProductMainSection.module.scss";
import Background from "./components/Background";
export default function ProductMainSection({ style = "yellow" }) {
  return (
    <section className={s.section}>
      <div className={cs(s.container, s[style])}>
        <h1 className={s.header}>Новая печать от 700 ₽</h1>
        <p className={s.description}>
          описание/описание/описание/описание/описание/описаниеописание/описание/описание/описание/описание/описаниеописание/описание/описание/описание/описание/описание
        </p>
        <Background style={style} />
      </div>
    </section>
  );
}
