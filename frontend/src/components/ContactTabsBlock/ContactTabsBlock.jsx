import React from "react";
import AddressCard from "@/uikit/AddressCard/AddressCard";
import s from "./ContactTabsBlock.module.scss";

export default function ContactTabsBlock({
  data
}) {
  return (
    <div className={s.container}>
      {data.map((item) => {
        return (
          <AddressCard
            className={s.card}
            key={item.id}
            data={item}
          />
        );
      })}
    </div>
  );
}
