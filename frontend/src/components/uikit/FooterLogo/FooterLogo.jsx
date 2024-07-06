import React from "react";
import Link from "next/link";
import cs from "classnames";
import s from "./FooterLogo.module.scss";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";

export default function FooterLogo({ className }) {
  return (
    <Link href="/" passHref={true}>
      <div className={cs(s.logo, className)}>
        <LazyImageWrapper
          src="/assets/footerLogo.png"
          className={[s.image]}
          wrapperClass={s.image_wrapper}
        />
        <p className={s.text}>Первый печатный</p>
        <p className={s.small_text}>Напечатаем <br/>быстро и легко</p>
      </div>
    </Link>
  );
}
