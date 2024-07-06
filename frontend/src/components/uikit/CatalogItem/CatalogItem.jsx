import React from "react";
import Link from "next/link";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";
import s from "./CatalogItem.module.scss";
import cs from "classnames";
import { PATH_IMAGE } from "@/lib/const";
export default function CatalogItem({ className, data, href }) {
  return (
    <Link href={href}>
      <a className={cs(s.card, className)}>
        <LazyImageWrapper
          className={[s.image]}
          wrapperClass={s.image_wrapper}
          src={PATH_IMAGE + data.servicesPoster}
          alt={data.servicesName}
        />
        <span className={s.card_name}>{data.servicesName}</span>
      </a>
    </Link>
  );
}

