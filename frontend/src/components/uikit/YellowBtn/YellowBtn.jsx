import React from "react";
import cs from "classnames";
import s from "./YellowBtn.module.scss";
export default function YellowBtn({ className, onClick, children }) {
  return <button className={cs(s.btn, className)}>{children}</button>;
}
