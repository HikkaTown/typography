import React from "react";
import FooterLink from "../uikit/FooterLink/FooterLink";
import FooterLogo from "../uikit/FooterLogo/FooterLogo";
import s from "./Footer.module.scss";
import cs from "classnames";

const links = [
  {
    url: "/",
    name: "Страница1",
  },
  {
    url: "/",
    name: "Страница2",
  },
  {
    url: "/",
    name: "Страница3",
  },
  {
    url: "/",
    name: "Страница4",
  },
  {
    url: "/",
    name: "Страница5",
  },
  {
    url: "/",
    name: "Страница6",
  },
  {
    url: "/",
    name: "Страница7",
  },
  {
    url: "/",
    name: "Страница8",
  },
  {
    url: "/",
    name: "Страница9",
  },
  {
    url: "/",
    name: "Страница10",
  },
  {
    url: "/",
    name: "Страница11",
  },
];

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.column}>
          <FooterLogo className={s.logo} />
          <p className={s.logo_description}>Центр печати в Москве</p>
        </div>
        <div className={cs(s.column, s.column_links)}>
          <FooterLink href={"/"} className={s.link}>
            Главная
          </FooterLink>
          <FooterLink href={"/projects"} className={s.link}>
            Наши проекты
          </FooterLink>
          <FooterLink href={"/blog"} className={s.link}>
            Блог
          </FooterLink>
          <FooterLink href={"/contacts"} className={s.link}>
            Контакты
          </FooterLink>
          <FooterLink href={"/privacy"} className={s.link}>
            Политика конфиденциальности
          </FooterLink>
        </div>
        <div className={cs(s.column, s.column_links)}>
          {links.slice(0, Math.ceil(links.length / 2)).map((item, index) => {
            return (
              <FooterLink href={item.url} key={index} className={s.link}>
                {item.name}
              </FooterLink>
            );
          })}
        </div>
        <div className={cs(s.column, s.column_links)}>
          {links
            .slice(Math.ceil(links.length / 2), links.length)
            .map((item, index) => {
              return (
                <FooterLink href={item.url} key={index} className={s.link}>
                  {item.name}
                </FooterLink>
              );
            })}
        </div>
      </div>
    </footer>
  );
}
