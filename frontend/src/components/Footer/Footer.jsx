import React from "react";
import FooterLink from "../uikit/FooterLink/FooterLink";
import FooterLogo from "../uikit/FooterLogo/FooterLogo";
import s from "./Footer.module.scss";
import cs from "classnames";

export default function Footer({ footerLinks }) {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.column}>
          <FooterLogo className={s.logo} />
          <p className={s.logo_description}>Центр печати в Москве</p>
        </div>
        <div
          className={cs(s.column, s.column_links)}
          itemScope
          itemType="http://schema.org/SiteNavigationElement"
        >
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
        <div
          className={cs(s.column, s.column_links)}
          itemScope
          itemType="http://schema.org/SiteNavigationElement"
        >
          {footerLinks &&
            footerLinks
              .slice(0, Math.ceil(footerLinks.length / 2))
              .map((item, index) => {
                return (
                  <FooterLink
                    href={
                      item?.meta?.metaHead
                        ? "/catalog/" + item.url
                        : `/${item.url}`
                    }
                    key={index}
                    className={s.link}
                  >
                    {item.servicesName}
                  </FooterLink>
                );
              })}
        </div>
        <div
          className={cs(s.column, s.column_links)}
          itemScope
          itemType="http://schema.org/SiteNavigationElement"
        >
          {footerLinks &&
            footerLinks
              .slice(Math.ceil(footerLinks.length / 2), footerLinks.length)
              .map((item, index) => {
                return (
                  <FooterLink
                    href={
                      item?.meta?.metaHead
                        ? "/catalog/" + item.url
                        : `/${item.url}`
                    }
                    key={index}
                    className={s.link}
                  >
                    {item.servicesName}
                  </FooterLink>
                );
              })}
        </div>
      </div>
    </footer>
  );
}
