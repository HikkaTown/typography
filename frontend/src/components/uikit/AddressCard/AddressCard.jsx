import React, { useState } from "react";
import cs from "classnames";
import s from "./AddressCard.module.scss";
import Button4 from "../Button4/Button4";
export default function AddressCard({ data, className, isOpen, setIsOpen }) {
  return (
    <div
      className={cs(s.card, isOpen === data.id ? s.card_open : "", className)}
      onClick={() => {
        if (isOpen === data.id) {
          setIsOpen(null);
        } else {
          setIsOpen(data.id);
        }
      }}
    >
      <h3 className={s.address_name}>{data.name}</h3>
      <p className={s.address}>{data.address}</p>
      <p className={s.worktime}>{data.workTime}</p>
      <div className={s.row}>
        <a href={`tel:${data.phone}`} className={s.callback_link}>
          <PhoneIcon />
          <span className={s.callback_text}>{data.phone}</span>
        </a>
        <a href={`mailto:${data.email}`} className={s.callback_link}>
          <MailIcon />
          <span className={s.callback_text}>{data.email}</span>
        </a>
      </div>
      <Button4 className={s.btn}>
        {isOpen === data.id ? "Свернуть" : "Как добраться"}
      </Button4>
    </div>
  );
}

const PhoneIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.7563 5.39531L18.2602 2.90156C18.0841 2.72471 17.8748 2.58439 17.6443 2.48867C17.4139 2.39294 17.1668 2.34369 16.9172 2.34375C16.4086 2.34375 15.9305 2.54297 15.5719 2.90156L12.8859 5.5875C12.7091 5.76358 12.5688 5.97286 12.473 6.20333C12.3773 6.4338 12.3281 6.68091 12.3281 6.93047C12.3281 7.43906 12.5273 7.91719 12.8859 8.27578L14.85 10.2398C14.3903 11.2532 13.7511 12.175 12.9633 12.9609C12.1775 13.7506 11.2557 14.3922 10.2422 14.8547L8.27813 12.8906C8.10205 12.7138 7.89277 12.5735 7.6623 12.4777C7.43183 12.382 7.18472 12.3328 6.93516 12.3328C6.42656 12.3328 5.94844 12.532 5.58985 12.8906L2.90156 15.5742C2.7245 15.7506 2.58406 15.9603 2.48832 16.1912C2.39259 16.4221 2.34346 16.6696 2.34375 16.9195C2.34375 17.4281 2.54297 17.9062 2.90156 18.2648L5.39297 20.7562C5.96485 21.3305 6.75469 21.6562 7.56563 21.6562C7.73672 21.6562 7.90078 21.6422 8.0625 21.6141C11.2219 21.0938 14.3555 19.4133 16.8844 16.8867C19.4109 14.3625 21.0891 11.2312 21.6164 8.0625C21.7758 7.09453 21.4547 6.09844 20.7563 5.39531V5.39531Z"
        fill="#056AC7"
      />
    </svg>
  );
};

const MailIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5999 8.84759V17.4C21.5999 18.1956 21.2838 18.9587 20.7212 19.5213C20.1586 20.0839 19.3956 20.4 18.5999 20.4H5.3999C4.60425 20.4 3.84119 20.0839 3.27858 19.5213C2.71597 18.9587 2.3999 18.1956 2.3999 17.4V8.84759L11.6951 14.3172C11.7874 14.3716 11.8927 14.4004 11.9999 14.4004C12.1071 14.4004 12.2124 14.3716 12.3047 14.3172L21.5999 8.84759ZM18.5999 4.79999C19.3381 4.79987 20.0504 5.07192 20.6005 5.56408C21.1507 6.05624 21.5001 6.73396 21.5819 7.46759L11.9999 13.104L2.4179 7.46759C2.49969 6.73396 2.84909 6.05624 3.39926 5.56408C3.94942 5.07192 4.66173 4.79987 5.3999 4.79999H18.5999Z"
        fill="#056AC7"
      />
    </svg>
  );
};
