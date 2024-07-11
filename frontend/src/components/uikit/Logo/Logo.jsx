import React from "react";
import Link from "next/link";
import cs from "classnames";
import s from "./Logo.module.scss";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";

export default function Logo({ className }) {
  return (
    <Link href="/" passHref={true}>
      <div className={cs(s.logo, className)}>
        <LazyImageWrapper
          lazy={false}
          src="/assets/logo.png"
          className={[s.image]}
          wrapperClass={s.image_wrapper}
        />
        {/*<div>*/}
        {/*  <p className={s.text}>Первый печатный</p>*/}
        {/*  <p className={s.small_text}>Напечатаем <br/>быстро и легко</p>*/}
        {/*</div>*/}
      </div>
    </Link>
  );
}
