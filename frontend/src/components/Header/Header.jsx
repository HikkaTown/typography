import React from "react";
import Link from "next/link";
import cs from "classnames";
import s from "./Header.module.scss";
import MenuNavBtn from "../uikit/MenuNavBtn/MenuNavBtn";
import Logo from "../uikit/Logo/Logo";
import Button2 from "../uikit/Button2/Button2";
import Navigation from "../Navigation/Navigation";
import useHeaderFixed from "../../hooks/useHeaderFixed";

export default function Header() {
  const { isMenuShow, isMenuFixed } = useHeaderFixed();
  return (
    <header
      className={cs(
        s.header,
        isMenuFixed && s.headerFixed,
        isMenuShow && s.headerShow
      )}
    >
      <div
        itemScope
        itemType="http://schema.org/SiteNavigationElement"
        className={s.visually_hidden}
      >
        <Link href="/catalog">
          <a itemProp="url">Каталог</a>
        </Link>
        <Link href="/contacts">
          <a itemProp="url">Контакты</a>
        </Link>
        <Link href="/projects">
          <a itemProp="url">Наши проекты</a>
        </Link>
      </div>
      <div className={s.container}>
        <Logo />
        <Navigation className={s.nav} />
        <MenuNavBtn className={s.btn_nav} />
        <Button2 className={s.callback_btn}>Обратная связь</Button2>
      </div>
    </header>
  );
}
