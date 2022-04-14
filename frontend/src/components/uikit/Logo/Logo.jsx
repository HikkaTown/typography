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
          src="/assets/logo.png"
          className={[s.image]}
          wrapperClass={s.image_wrapper}
        />
        <p className={s.text}>Первый печатный</p>
      </div>
    </Link>
  );
}
