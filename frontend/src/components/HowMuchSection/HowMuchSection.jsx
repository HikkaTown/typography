import React from "react";
import TableComponent from "@/components/TableComponent/TableComponent";
import s from "./HowMuchSection.module.scss";

export default function HowMuchSection({ data, title }) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        {!title ? (
          <span className={s.header}>Сколько это будет стоить</span>
        ) : (
          <span className={s.header}>{title}</span>
        )}
        {data ? <TableComponent data={data} /> : ""}
      </div>
    </section>
  );
}
