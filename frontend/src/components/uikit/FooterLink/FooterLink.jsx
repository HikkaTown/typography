import Link from "next/link";
import React from "react";
import cs from "classnames";
import s from "./FooterLink.module.scss";

export default function FooterLink({ className, children, href }) {
  return (
    <Link href={href} prefetch={true}>
      <a className={cs(s.link, className)} itemProp="url">
        {children}
      </a>
    </Link>
  );
}
