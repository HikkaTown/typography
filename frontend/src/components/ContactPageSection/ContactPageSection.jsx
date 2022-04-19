import React from "react";
import { useState } from "react";
import ContactTabsBlock from "../ContactTabsBlock/ContactTabsBlock";
import PathBlock from "../PathBlock/PathBlock";
import s from "./ContactPageSection.module.scss";
export default function ContactPageSection({ data }) {
  const [isOpened, setIsOpened] = useState(null);
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h1 className={s.header}>Контакты</h1>
        <ContactTabsBlock
          data={data}
          setIsOpen={setIsOpened}
          isOpen={isOpened}
        />
        {isOpened && (
          <PathBlock
            data={data.find((item) => {
              return item.id === isOpened;
            })}
          />
        )}
        <div className={s.map}>
          <iframe
            className={s.iframe}
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac566384d8ab67538fb89fce94c435f3f7b7bb49a722371e23588e71fab749ae9&amp;source=constructor"
          />
        </div>
      </div>
    </section>
  );
}
// Примерная структура с базы
// const offices = [
//   {
//     id: "1",
//     name: "Офис 1",
//     address:
//       "м. Цветной бульвар, м. Трубная Малый Сухаревский переулок 9 стр. 1, 2-й этаж",
//     email: "email@mail.ru",
//     phone: "+7 (495) 517-59-14",
//     pathHeader: "Как добраться до офиса 1",
//     mapUrl: "dsds",
//     path: {
//       onFoot: {
//         description:
//           "Двигаться по внутреней стороне садового, доехать до улицы Трубная, по ней проехать 300 метров до перекрёстка и повернуть на право на Малый Сухаревский переулок, проехать ещё 50 метров и вы у цели. Есть платная парковка 150 ₽ в час.",
//         videoPreview: {
//           url: "dsdsd",
//         },
//         images: [
//           {
//             url: "31231",
//           },
//           {
//             url: "31231",
//           },
//           {
//             url: "31231",
//           },
//         ],
//       },
//       byCar: {
//         description:
//           "Двигаться по внутреней стороне садового, доехать до улицы Трубная, по ней проехать 300 метров до перекрёстка и повернуть на право на Малый Сухаревский переулок, проехать ещё 50 метров и вы у цели. Есть платная парковка 150 ₽ в час.",
//         videoPreview: {
//           url: "dsdsd",
//         },
//         images: [
//           {
//             url: "31231",
//           },
//           {
//             url: "31231",
//           },
//           {
//             url: "31231",
//           },
//         ],
//       },
//     },
//   },
// ];
