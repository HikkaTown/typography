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
export default function ProductMainSection({
  style = "yellow",
  header,
  description,
}) {
  return (
    <section className={s.section}>
      <div className={cs(s.container, s[style])}>
        <h1 className={s.header}>{header}</h1>
        <p className={s.description}>{description}</p>
        <Background style={style} />
      </div>
    </section>
  );
}
