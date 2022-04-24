import React from "react";
import TableComponent from "../TableComponent/TableComponent";
import s from "./HowMuchSection.module.scss";

const testData = {
  headers: ["Услуга", "Цена, ₽", "Цена, ₽", "Цена, ₽", "Цена, ₽"],
  items: [
    {
      id: 1,
      items: ["Фото на паспорт", 400, 400, 400, 400],
    },
    {
      id: 2,

      items: ["Фото на документы", 500, 500, 500, 500],
    },
    {
      id: 3,
      items: ["Фото на загрант паспорт", 600, 600, 600, 600],
    },
    {
      id: 4,
      items: ["Фото на визу", 2800, 2800, 2800, 2800],
    },
    {
      id: 5,
      items: ["Фото с подставкой костюма", 2800, 2800, 2800, 2800],
    },
    {
      id: 6,
      items: ["Фото на паспорт со сканированием", , 2800, 2800, 2800, 2800],
    },
    {
      id: 7,
      items: ["Фото на паспорт с электронного файла", 2800, 2800, 2800, 2800],
    },
  ],
};

export default function HowMuchSection({ data }) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.header}>Сколько это будет стоить</h2>
        {data ? <TableComponent data={data} /> : ""}
      </div>
    </section>
  );
}
