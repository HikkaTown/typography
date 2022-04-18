import React from "react";
import s from "./StepBtn.module.scss";
import cs from "classnames";
export default function StepBtn({ className, children, onClick, isActive }) {
  return (
    <button className={cs(s.btn, isActive ? s.btn_active : "", className)}>
      {children}
    </button>
  );
}
