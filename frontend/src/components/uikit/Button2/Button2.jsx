import React from "react";
import cs from "classnames";
import s from "./Button2.module.scss";
export default function Button2({ className, onClick, children }) {
  return <button className={cs(s.btn, className)}>{children}</button>;
}
