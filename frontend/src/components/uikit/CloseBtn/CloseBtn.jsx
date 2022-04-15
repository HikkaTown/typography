import React from "react";
import s from "./CloseBtn.module.scss";
import cs from "classnames";
export default function CloseBtn({ className, onClick }) {
  return (
    <button className={cs(s.btn, className)} onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={s.svg}
      >
        <path
          d="M18 6L6 18"
          stroke="#056AC7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke="#056AC7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
