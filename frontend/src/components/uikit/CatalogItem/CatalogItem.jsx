import React from "react";
import Link from "next/link";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";
import s from "./CatalogItem.module.scss";
import cs from "classnames";
import { PATH_IMAGE } from "@/lib/const";
export default function CatalogItem({ className, data, href }) {
  return (
    <Link href={href} prefetch={true}>
      <span className={cs(s.card, className)}>
        <LazyImageWrapper
          className={[s.image]}
          wrapperClass={s.image_wrapper}
          src={PATH_IMAGE + data.servicesPoster}
          alt={data.servicesName}
        />
        <Link href={href} prefetch={true}><a className={s.card_name}>{data.servicesName}</a></Link>
      </span>
    </Link>
  );
}

