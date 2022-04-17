import React from "react";
import s from "./TableComponent.module.scss";
export default function TableComponent({ data }) {
  return (
    <div className={s.container}>
      <table className={s.table}>
        <thead className={s.head_line}>
          <tr>
            {data.headers.map((item, index) => (
              <TableHeadItem key={index} item={item} />
            ))}
          </tr>
        </thead>
        <tbody>
          {data.items.map((item, index) => {
            return <TableRow key={index} data={item.items} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

const TableHeadItem = ({ item }) => {
  return (
    <td className={s.head} title={item}>
      {item}
    </td>
  );
};

const TableRow = ({ data }) => {
  return (
    <tr className={s.row_line}>
      {data.map((item, index) => {
        return (
          <td className={s.row_item} key={index}>
            {item}
          </td>
        );
      })}
    </tr>
  );
};
