import React from "react";
import Link from "next/link";
import cs from "classnames";
import s from "./NavLink.module.scss";
export default function NavLink({ className, children, href }) {
  return (
    <Link href={href}>
      <a className={cs(s.link, className)}>{children}</a>
    </Link>
  );
}
