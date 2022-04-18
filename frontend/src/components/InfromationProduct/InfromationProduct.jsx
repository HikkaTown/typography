import React from "react";
import s from "./InfromationProduct.module.scss";

const testData = [
  "Не более 7-ми минут во всех центрах",
  "Запись информации на вашу флэшку — 50 ₽",
  "Обработка и редактирование фотографии бесплатно",
  "Отправка по электронной почте — 50 ₽",
];

export default function InfromationProduct() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.head_block}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={s.icon}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.0001 0.031189C7.18665 0.031189 0.03125 7.18659 0.03125 16C0.03125 24.8134 7.18665 31.9688 16.0001 31.9688C24.8135 31.9688 31.9689 24.8134 31.9689 16C31.9689 7.18659 24.8135 0.031189 16.0001 0.031189ZM18.9318 16.8392C18.9318 15.2201 17.6193 13.9076 16.0002 13.9076H16.0001C15.2225 13.9076 14.4768 14.2164 13.927 14.7663C13.3772 15.3161 13.0683 16.0618 13.0683 16.8394V23.0809C13.0683 23.8584 13.3772 24.6041 13.927 25.1539C14.4768 25.7037 15.2225 26.0126 16.0001 26.0126H16.0002C17.6193 26.0126 18.9318 24.7001 18.9318 23.081V16.8392ZM16.0001 5.98737C14.382 5.98737 13.0683 7.30105 13.0683 8.91914C13.0683 10.5372 14.382 11.8509 16.0001 11.8509C17.6182 11.8509 18.9318 10.5372 18.9318 8.91914C18.9318 7.30105 17.6182 5.98737 16.0001 5.98737Z"
              fill="#056AC7"
            />
          </svg>
          <h2 className={s.header}>Информация</h2>
        </div>
        <ul className={s.list}>
          {testData.map((item, index) => {
            return (
              <li className={s.list_item} key={index}>
                <span className={s.dot} />
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
