import React, { useState } from "react";
import cs from "classnames";
import Link from 'next/link';
import s from "./AddressCard.module.scss";
import Button4 from "../Button4/Button4";
import { LazyImage } from '@/components/LazyImage/LazyImage';
import { PATH_IMAGE } from '@/lib/const';
import Portal from '@/components/Portal/Portal';
import OverlayingPopup from '@/components/OverlayingPopup/OverlayingPopup';
import PathBlock from '@/components/PathBlock/PathBlock';
import CloseBtn from '@/uikit/CloseBtn/CloseBtn';

export default function AddressCard({
                                      data,
                                      className,
                                    }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <div
      itemScope
      itemType="http://schema.org/LocalBusiness"
      className={cs(s.card, className)}
    >
      {data.cardImage ? <LazyImage src={PATH_IMAGE + data.cardImage} alt="#" className={s.card_image}/> : null}
      <div className={s.content}>
        <h3 itemProp="name" className={s.card_name}>
          {data.name}
        </h3>
        <div className={s.row}>
          <ul className={s.list}>
            {data.address ? (
              <li className={s.list_item}>
                {data.addressIcon ? <img className={s.icon} src={`${PATH_IMAGE}${data?.addressIcon}`} alt=""/> : null}
                <span className={s.list_text}>{data.address}</span>
              </li>
            ) : null}
            {data.workTime ? (
              <li className={s.list_item}>
                {data.workIcon ? <img className={s.icon} src={`${PATH_IMAGE}${data?.workIcon}`} alt=""/> : null}
                <span className={s.list_text}>{data.workTime}</span>
              </li>
            ) : null}
          </ul>
        </div>
        <div className={s.column}>
          <a href={`tel:${data.phone}`} className={s.callback_link}>
            <img className={s.icon} src={`${PATH_IMAGE}${data?.phoneIcon}`} alt=""/>
            <span className={s.callback_text} itemProp="telephone">
              {data.phone}
            </span>
          </a>
          <a href={`mailto:${data.email}`} className={s.callback_link}>
            {/*<MailIcon/>*/}
            <img className={s.icon} src={`${PATH_IMAGE}${data?.mailIcon}`} alt=""/>
            <span className={s.callback_text} itemProp="email">
              {data.email}
            </span>
          </a>
        </div>
        <div className={s.btns}>
          <Button4
            className={s.btn}
            onClick={handleOpen}
          >
            Как добраться
          </Button4>
          <Link href={`/contacts/${data.url}`}>
            <a className={s.about_btn}>Подробнее</a>
          </Link>
        </div>
      </div>
      {isOpen ? (
        <Portal>
          <OverlayingPopup
            isOpened={isOpen}
            onClose={handleClose}
            overlayClass={s.overlay}
            child={s.child}
          >
            <div className={s.container}>
              <CloseBtn className={s.closeBtn} onClick={handleClose} />
              <PathBlock
                offBorder
                data={data}
              />
            </div>
          </OverlayingPopup>
        </Portal>
      ) : null}
    </div>
  );
}