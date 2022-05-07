import React from "react";
import Link from "next/link";
import cs from "classnames";
import s from "./NewsCard.module.scss";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";
import { PATH_IMAGE } from "../../../lib/const";

export default function NewsCard({ className, data }) {
  return (
    <Link href={`/blog/${data.url}`} passHref={true}>
      <div
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
        <h3 className={s.card_name} itemProp="headline">
          {data.postName}
        </h3>
        <p
          className={s.date}
          itemProp="datePublished"
          dateTime={new Date(data.postDate).toLocaleDateString("en-US")}
        >
          {new Date(data.postDate).toLocaleDateString("en-US")}
        </p>
      </div>
    </Link>
  );
}
