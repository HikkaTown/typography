import React from "react";
import Link from "next/link";
import cs from "classnames";
import s from "./NewsCard.module.scss";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";
import { PATH_IMAGE } from "../../../lib/const";

export default function NewsCard({ className, data }) {
  return (
    <Link href={`/blog${data?.url ? "/" + data.url : ""}`}>
      <span
        className={cs(s.card, className)}
        itemProp="blogPosts"
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        <LazyImageWrapper
          src={PATH_IMAGE + data.image}
          alt={data.postName}
          className={[s.image]}
          wrapperClass={s.image_wrapper}
        />
        <span className={s.card_name} itemProp="headline">
          {data.postName}
        </span>
        <p
          className={s.date}
          itemProp="datePublished"
          dateTime={new Date(data.postDate).toLocaleDateString("ru-RU")}
        >
          {new Date(data.postDate).toLocaleDateString("ru-RU")}
        </p>
      </span>
    </Link>
  );
}
