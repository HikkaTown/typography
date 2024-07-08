import React, { useState } from "react";
import cs from "classnames";
import s from "./AddressCard.module.scss";
import Button4 from "../Button4/Button4";
import { LazyImage } from '@/components/LazyImage/LazyImage';
import Link from 'next/link';
export default function AddressCard({
  index,
  data,
  className,
  isOpen,
  setIsOpen,
  setActiveMapUrl,
}) {
  return (
    <div
      itemScope
      itemType="http://schema.org/LocalBusiness"
      className={cs(s.card, className)}
    >
      <LazyImage src="https://get.wallhere.com/photo/2700x1800-px-building-castle-forest-Hohenzollern-landscape-1077207.jpg" alt="#" className={s.card_image} />
      <div className={s.content}>
        <h3 itemProp="name" className={s.card_name}>
          {data.name}
        </h3>
        <div className={s.row}>
          <ul className={s.list}>
            <li className={s.list_item}><span className={s.list_text}>text</span></li>
            <li className={s.list_item}><span className={s.list_text}>text</span></li>
            <li className={s.list_item}><span className={s.list_text}>text</span></li>
          </ul>
        </div>
        <div className={s.column}>
          <a href={`tel:${data.phone}`} className={s.callback_link}>
            {/*<PhoneIcon/>*/}
            <span className={s.callback_text} itemProp="telephone">
              {data.phone}
            </span>
          </a>
          <a href={`mailto:${data.email}`} className={s.callback_link}>
            {/*<MailIcon/>*/}
            <span className={s.callback_text} itemProp="email">
              {data.email}
            </span>
          </a>
        </div>
        <div className={s.btns}>
          <Button4 
            className={s.btn}
            // onClick={() => {
            //   if (isOpen === data.id) {
            //     setIsOpen(null);
            //     setActiveMapUrl(null);
            //   } else {
            //     setIsOpen(data.id);
            //     setActiveMapUrl(index);
            //   }
            // }}
          >
            Как добраться
          </Button4>
          <Link href={'#'}>
            <a className={s.about_btn}>Подробнее</a>
          </Link>
        </div>
      </div>
    </div>
  );
}