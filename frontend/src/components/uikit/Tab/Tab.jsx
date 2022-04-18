import React from "react";
import s from "./Tab.module.scss";
import cs from "classnames";
export default function Tab({
  className,
  onClick,
  children,
  isActive = false,
}) {
  return (
    <button
      className={cs(s.btn, isActive ? s.btn_active : "", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
