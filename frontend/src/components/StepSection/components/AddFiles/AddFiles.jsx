import React from "react";
import s from "./AddFiles.module.scss";
import AddFileBtn from "../../../uikit/AddFileBtn/AddFileBtn";

export default function AddFiles() {
  return (
    <div className={s.container}>
      <AddFileBtn />
    </div>
  );
}
