import React from "react";
import Link from "next/link";
import cs from "classnames";
import s from "./NewsCard.module.scss";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";

export default function NewsCard({ className, data }) {
  return (
    <Link href={"/"} passHref={true}>
      <div className={cs(s.card, className)}>
        <LazyImageWrapper
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtXbz8WkPqwd949Hcuctb7P8Cqq7HMWVVfEw&usqp=CAU"
          }
          alt={""}
          className={[s.image]}
          wrapperClass={s.image_wrapper}
        />
        <h3 className={s.card_name}>
          Название новости/Название новости/Название новости/
        </h3>
        <p className={s.date}>12.01.2022</p>
      </div>
    </Link>
  );
}
