import React from "react";
import AddressCard from "../uikit/AddressCard/AddressCard";
import s from "./ContactTabsBlock.module.scss";
export default function ContactTabsBlock() {
  return (
    <div className={s.container}>
      <AddressCard className={s.card} />
      <AddressCard className={s.card} />
      <AddressCard className={s.card} />
      <AddressCard className={s.card} />
      <AddressCard className={s.card} />
      <AddressCard className={s.card} />
    </div>
  );
}
