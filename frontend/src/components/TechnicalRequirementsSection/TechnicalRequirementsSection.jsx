import React, { useState } from "react";
import DescriptionTech from "../uikit/DescriptionTech/DescriptionTech";
import DropdownTech from "../uikit/DropdownTech/DropdownTech";
import Tab from "../uikit/Tab/Tab";
import s from "./TechnicalRequirementsSection.module.scss";

export default function TechnicalRequirementsSection({ data }) {
  const [isActive, setIsActive] = useState(1);
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.header}>Технические требования</h2>
        <div className={s.tech_mobile}>
          {data &&
            data.map((item) => {
              return (
                <DropdownTech
                  data={item}
                  key={item.id}
                  isActive={isActive}
                  setIsActve={setIsActive}
                  className={s.dropdown}
                />
              );
            })}
        </div>
        <div className={s.tech_desktop}>
          <div className={s.tabs}>
            {data &&
              data.map((item) => {
                return (
                  <Tab
                    className={s.tab}
                    key={item.id}
                    isActive={isActive === item.id ? true : false}
                    onClick={() => {
                      setIsActive(item.id);
                    }}
                  >
                    {item.name}
                  </Tab>
                );
              })}
          </div>
          <DescriptionTech className={s.tech} data={data[isActive - 1]} />
        </div>
      </div>
    </section>
  );
}

const testTabs = [
  {
    id: 1,
    name: "Российский паспорт",
    photo: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg",
    params: [
      "Размер: 35 х 45 мм",
      "Фон: белый",
      "Размер лица: 70–80%",
      "Бумага: фотобумага матовая",
      "Количество фотографий: 6 шт",
      "Электронный файл: не ниже 300dpi, размер не более 300 кб, формат JPEG",
    ],
  },
  {
    id: 2,
    name: "Загран паспорт",
    photo:
      "https://vypechka-online.ru/wp-content/uploads/2019/09/EQgJ4p77Aeo.jpg",
    params: [
      "Размер: 35 х 45 мм",
      "Электронный файл: не ниже 300dpi, размер не более 300 кб, формат JPEG",
      "Фон: белый",
      "Размер лица: 70–80%",
      "Бумага: фотобумага матовая",
      "Количество фотографий: 6 шт",
      "Электронный файл: не ниже 300dpi, размер не более 300 кб, формат JPEG",
    ],
  },
  {
    id: 3,
    name: "Фото на визу",
    photo:
      "https://www.ixbt.com/img/n1/news/2021/10/2/22459ff25f8eff76bddf34124cc2c85b16f4cd4a_large.jpg",
    params: [
      "Размер: 35 х 45 мм",
      "Фон: белый",
      "Фон: белый",
      "Размер лица: 70–80%",
      "Бумага: фотобумага матовая",
      "Количество фотографий: 6 шт",
      "Электронный файл: не ниже 300dpi, размер не более 300 кб, формат JPEG",
    ],
  },
  {
    id: 4,
    name: "Фото на визу",
    photo:
      "https://thypix.com/wp-content/uploads/2021/11/huggy-wuggy-pic-1-m.jpg",
    params: [
      "Размер: 35 х 45 мм",
      "Фон: белый",
      "Размер лица: 70–80%",
      "Бумага: фотобумага матовая",
      "Количество фотографий: 6 шт",
      "Количество фотографий: 6 шт",
      "Электронный файл: не ниже 300dpi, размер не более 300 кб, формат JPEG",
    ],
  },
  {
    id: 5,
    name: "Водительские международные права",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQGkx_9jSYDff6SAGbW670JIvNGwq40XDIQ&usqp=CAU",
    params: [
      "Размер: 35 х 45 мм",
      "Фон: белый",
      "Размер лица: 70–80%",
      "Бумага: фотобумага матовая",
      "Бумага: фотобумага матовая",
      "Бумага: фотобумага матовая",
      "Количество фотографий: 6 шт",
      "Электронный файл: не ниже 300dpi, размер не более 300 кб, формат JPEG",
    ],
  },
  {
    id: 6,
    name: "Загран паспорт",
    photo: "https://klike.net/uploads/posts/2019-03/1551512876_4.jpg",
    params: [
      "Размер: 35 х 45 мм",
      "Фон: белый",
      "Фон: белый",
      "Фон: белый",
      "Размер лица: 70–80%",
      "Бумага: фотобумага матовая",
      "Количество фотографий: 6 шт",
      "Электронный файл: не ниже 300dpi, размер не более 300 кб, формат JPEG",
    ],
  },
  {
    id: 7,
    name: "Фото на визу",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlpnx7sR693zHP7UeuKWFKVyWzOfu6eK6hHw&usqp=CAU",
    params: [
      "Размер: 35 х 45 мм",
      "Фон: белый",
      "Размер лица: 70–80%",
      "Размер лица: 70–80%",
      "Размер лица: 70–80%",
      "Бумага: фотобумага матовая",
      "Количество фотографий: 6 шт",
      "Электронный файл: не ниже 300dpi, размер не более 300 кб, формат JPEG",
    ],
  },
  {
    id: 8,
    name: "Фото на визу",
    photo:
      "https://www.clever-media.ru/upload/resize_cache/iblock/e18/800_600_090cf9bfc02c81ba0a02cc940d6445018/e182549ed40479cfd34e626ccf34bbe7.jpg",
    params: [
      "Размер: 35 х 45 мм",
      "Фон: белый",
      "Размер лица: 70–80%",
      "Бумага: фотобумага матовая",
      "Количество фотографий: 6 шт",
      "Электронный файл: не ниже 300dpi, размер не более 300 кб, формат JPEG",
    ],
  },
  {
    id: 9,
    name: "Водительские международные права",
    photo:
      "https://kaifolog.ru/uploads/posts/2014-12/thumbs/1419387276_001_1.jpg",
    params: [
      "Размер: 35 х 45 мм",
      "Фон: белый",
      "Размер лица: 70–80%",
      "Бумага: фотобумага матовая",
      "Количество фотографий: 6 шт",
      "Электронный файл: не ниже 300dpi, размер не более 300 кб, формат JPEG",
    ],
  },
  {
    id: 10,
    name: "Водительские международные права",
    photo: "https://avatarko.ru/img/kartinka/1/Crazy_Frog.jpg",
    params: [
      "Размер: 35 х 45 мм",
      "Фон: белый",
      "Размер лица: 70–80%",
      "Бумага: фотобумага матовая",
      "Количество фотографий: 6 шт",
      "Электронный файл: не ниже 300dpi, размер не более 300 кб, формат JPEG",
    ],
  },
];
