import React from "react";
import cs from "classnames";
import s from "./AddFileBtn.module.scss";

export default function AddFileBtn({ className, isAdded }) {
  return (
    <button className={cs(s.btn, isAdded ? s.btn_added : "", className)}>
      {isAdded ? "Прикреплено" : "Прикрепить файл"}
    </button>
  );
}
