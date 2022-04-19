import React from "react";
import cs from "classnames";
import s from "./Button2.module.scss";
export default function Button2({
  className,
  onClick,
  children,
  type = "button",
}) {
  return (
    <button
      type={type}
      className={cs(s.btn, className)}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {children}
    </button>
  );
}
