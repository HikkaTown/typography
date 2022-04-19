import React from "react";
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
} from "./Icons";
import s from "./Background.module.scss";
export default function Background({ style }) {
  return (
    <>
      {style === "yellow" ? (
        <>
          <Line className={s.left_line} />
          <Line className={s.right_line} />
          <Star className={s.first_star} />
          <Star className={s.second_star} />
          <Star className={s.three_star} />
          <Book className={s.book} />
          <Photo className={s.photo} />
          <Photoaparat className={s.photoaparat} />
        </>
      ) : (
        ""
      )}
      {style === "blue" ? (
        <>
          <Line className={s.stamp_line} />
          <Stamp className={s.stamp} />
          <Broshure className={s.broshure} />
          <Newspaper className={s.newspaper} />
          <Star className={s.stamp_star} />
          <Star className={s.stamp_second_star} />
        </>
      ) : (
        ""
      )}
      {style === "red" ? (
        <>
          <Line className={s.red_line} />
          <PaperRoll className={s.roll} />
          <Star className={s.red_star} />
          <Star className={s.red_second_star} />
          <Newspaper className={s.red_newspaper} />
          <Textprint className={s.red_textprint} />
        </>
      ) : (
        ""
      )}
      {style === "green" ? (
        <>
          <Star className={s.green_star} />
          <Star className={s.green_second_star} />
          <Star className={s.green_three_star} />
          <Plotter className={s.green_plotter} />
          <Line className={s.green_line} />
          <Paper className={s.green_paper} />
        </>
      ) : (
        ""
      )}
      {style === "hightblue" ? (
        <>
          <Star className={s.one} />
          <Star className={s.two} />
          <Star className={s.three} />
          <Star className={s.four} />
          <Photo className={s.hightblue_photo} />
          <Line className={s.hightblue_line} />
          <Plotter className={s.hightblue_plotter} />
        </>
      ) : (
        ""
      )}
    </>
  );
}
