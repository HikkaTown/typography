import React from "react";
import s from "./PlayBtn.module.scss";
import cs from "classnames";

export default function PlayBtn({ className, onClick }) {
  return (
    <button className={cs(s.btn, className)}>
      <div className={s.container}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.74999 3L19.75 12L5.74999 21V3Z" fill="#056AC7" />
        </svg>
      </div>
    </button>
  );
}
