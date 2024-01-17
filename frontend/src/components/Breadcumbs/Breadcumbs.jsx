import React from "react";
import Link from "next/link";
import s from "./Breadcumbs.module.scss";
export default function Breadcumbs({ categoryPage, titlePage }) {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li className={s.item}>
          <Link href={"/"}>
            <a className={s.link}>Главная</a>
          </Link>
          <Star />
        </li>
        <li className={s.item}>
          <Link href={"/catalog"}>
            <a className={s.link}>Каталог</a>
          </Link>
          <Star />
        </li>
        {categoryPage?.pages?.length > 1 ? (
          <li className={s.item}>
            <Link href={`/${categoryPage.url}`}>
              <a className={s.link}>{categoryPage.serviceName}</a>
            </Link>
            <Star />
          </li>
        ) : (
          ""
        )}
        <li className={s.item}>
          <span className={s.link}>{titlePage}</span>
          <Star />
        </li>
      </ul>
    </div>
  );
}

const Star = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={s.star}
    >
      <path
        d="M11.8902 5.87175C8.97733 5.31774 6.6816 3.0224 6.1279 0.109578C6.10005 -0.0365259 5.89995 -0.0365259 5.8721 0.109578C5.3184 3.0224 3.02267 5.31841 0.109768 5.87175C-0.0365893 5.89951 -0.0365893 6.09983 0.109768 6.1276C3.02267 6.6816 5.3184 8.97694 5.8721 11.8904C5.89995 12.0365 6.10005 12.0365 6.1279 11.8904C6.6816 8.97761 8.97733 6.6816 11.8902 6.1276C12.0366 6.09983 12.0366 5.90018 11.8902 5.87175Z"
        fill="#181C27"
      />
    </svg>
  );
};
