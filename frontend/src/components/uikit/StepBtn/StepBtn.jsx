import React from "react";
import s from "./StepBtn.module.scss";
import cs from "classnames";
export default function StepBtn({ className, children, onClick }) {
  return <button className={cs(s.btn, className)}>{children}</button>;
}
