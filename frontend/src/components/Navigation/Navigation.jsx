import React from "react";
import cs from "classnames";
import s from "./Navigation.module.scss";
import NavLink from "@/uikit/NavLink/NavLink";
export default function Navigation({ className }) {
  return (
    <nav
      className={cs(s.nav, className)}
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      <NavLink href="/" className={s.nav_link} itemProp="url">
        Главная
      </NavLink>
      <NavLink href="/catalog" className={s.nav_link} itemProp="url">
        Каталог услуг
      </NavLink>
      <NavLink href="/projects" className={s.nav_link} itemProp="url">
        Наши проекты
      </NavLink>
      <NavLink href="/landing-page" className={s.nav_link} itemProp="url">
        Разработка сайтов
      </NavLink>
      <NavLink href="/contacts" className={s.nav_link} itemProp="url">
        Контакты
      </NavLink>
    </nav>
  );
}
