import React from "react";
import s from "./Tab.module.scss";
import cs from "classnames";
import Link from 'next/link';
export default function Tab({ className, onClick, children, isActive, href, isLink }) {
  
  if (isLink) {
    return (
      <Link href={href}>
        <a 
          className={cs(s.btn, isActive ? s.btn_active : "", className)}
        >
          {children}
        </a>
      </Link>
    );
  }
  
  return (
    <button
      className={cs(s.btn, isActive ? s.btn_active : "", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
