import React from "react";
import cs from "classnames";
import s from "./Button4.module.scss";
export default function Button4({ className, onClick, children }) {
  return (
    <button className={cs(s.btn, className)} onClick={onClick}>
      {children}
    </button>
  );
}
