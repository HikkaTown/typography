import React from "react";
import cs from "classnames";
import s from "./TabProductBtn.module.scss";
export default function TabProductBtn({
  className,
  children,
  isActive = false,
  onClick,
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
