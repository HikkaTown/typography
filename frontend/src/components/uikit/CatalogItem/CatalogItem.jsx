import React from "react";
import Link from "next/link";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";
import s from "./CatalogItem.module.scss";
import cs from "classnames";
export default function CatalogItem({ className, data }) {
  return (
    <Link href="/" passHref={true}>
      <div className={cs(s.card, className)}>
        <LazyImageWrapper
          className={[s.image]}
          wrapperClass={s.image_wrapper}
          src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg"
          srcTablet={"https://www.imgonline.com.ua/examples/bee-on-daisy.jpg"}
          srcMobile={"https://www.imgonline.com.ua/examples/bee-on-daisy.jpg"}
          alt={""}
        />
        <h3 className={s.card_name}>Название категории</h3>
      </div>
    </Link>
  );
}
