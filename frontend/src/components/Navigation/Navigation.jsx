import React from "react";
import Link from "next/link";
import cs from "classnames";
import s from "./Navigation.module.scss";
import NavLink from "../uikit/NavLink/NavLink";
export default function Navigation({ className }) {
  return (
    <nav className={cs(s.nav, className)}>
      <NavLink href="/" className={s.nav_link}>
        Главная
      </NavLink>
      <NavLink href="/catalog" className={s.nav_link}>
        Каталог услуг
      </NavLink>
      <NavLink href="/projects" className={s.nav_link}>
        Наши проекты
      </NavLink>
      <NavLink href="/contacts" className={s.nav_link}>
        Контакты
      </NavLink>
    </nav>
  );
}
