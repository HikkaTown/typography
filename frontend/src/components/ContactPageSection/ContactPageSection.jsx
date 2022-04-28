import React, { useState, useEffect } from "react";
import ContactTabsBlock from "@/components/ContactTabsBlock/ContactTabsBlock";
import PathBlock from "@/components/PathBlock/PathBlock";
import s from "./ContactPageSection.module.scss";
import { scroller } from "react-scroll";

export default function ContactPageSection({ data, header, mapUrl }) {
  const [isOpened, setIsOpened] = useState(null);

  useEffect(() => {
    if (isOpened) {
      scroller.scrollTo("pathBlock", {
        duration: 760,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [isOpened]);

  return (
    <section className={s.section}>
      <div className={s.container} id="container">
        <h1 className={s.header}>{header}</h1>
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
          <iframe className={s.iframe} src={mapUrl} />
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
