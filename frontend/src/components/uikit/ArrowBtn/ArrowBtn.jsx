import React from "react";
import cs from "classnames";
import s from "./ArrowBtn.module.scss";
export default function ArrowBtn({ className, onClick }) {
  return (
    <button className={cs(s.btn, className)}>
      <span className={s.container}>
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={s.svg}
        >
          <path
            d="M1 13L7 7L1 1"
            stroke="#AFD7FD"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}
