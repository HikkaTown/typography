import React from "react";
import s from "./AddFiles.module.scss";
import AddFileBtn from "../../../uikit/AddFileBtn/AddFileBtn";

export default function AddFiles({
  register,
  reset,
  setFileData,
  classFileName,
}) {
  return (
    <div className={s.container}>
      <AddFileBtn
        register={register}
        reset={reset}
        setFileData={setFileData}
        classFileName={classFileName}
      />
    </div>
  );
}
