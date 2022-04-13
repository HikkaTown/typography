import React from "react";
import cs from "classnames";
import s from "./RadioBtn.module.scss";
export default function RadioBtn({ className, isChecked = false }) {
  return (
    <button className={cs(s.btn, isChecked ? s.btn_checked : "", className)}>
      <span className={s.check}></span>
    </button>
  );
}
