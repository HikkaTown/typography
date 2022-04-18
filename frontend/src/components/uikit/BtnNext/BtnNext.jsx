import React from "react";
import s from "./BtnNext.module.scss";
import cs from "classnames";
export default function BtnNext({ className, onClick }) {
  return <button className={cs(s.btn, className)}>Далее</button>;
}
