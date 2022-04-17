import React from "react";
import Link from "next/link";
import cs from "classnames";
import s from "./NavLink.module.scss";
import { useRouter } from "next/router";
export default function NavLink({ className, children, href }) {
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        className={cs(
          s.link,
          router.pathname === href ? s.link_active : "",
          className
        )}
      >
        {children}
      </a>
    </Link>
  );
}
