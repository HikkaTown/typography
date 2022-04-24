import React, { useEffect, useRef, useState } from "react";
import cs from "classnames";
import s from "./AddFileBtn.module.scss";

export default function AddFileBtn({
  className,
  register,
  reset,
  setFileData,
  classFileName,
  id = "file",
}) {
  const [isAdded, setIsAdded] = useState(false);
  const [fileName, setFileName] = useState("");
  const handleLoad = (e) => {
    if (e.target.files.length !== 0) {
      setFileName(e.target.files[0].name);
      setIsAdded(true);
      const fileReader = new FileReader();
      fileReader.onload = function () {
        if (setFileData) {
          setFileData((prev) => fileReader.result);
        }
      };
      fileReader.readAsDataURL(e.target.files[0]);
    } else {
      setFileName("");
      setIsAdded(false);
    }
  };

  const clearInput = () => {
    setFileName("");
    setFileData(null);
    reset({ file: "" });
    setIsAdded(false);
  };

  return (
    <div className={cs(s.container, className)}>
      <input
        type="file"
        name="file"
        id={id}
        accept="image/jpeg,image/png,image/gif,application/pdf"
        className={s.input}
        {...register("file")}
        onChange={handleLoad}
      />
      <label htmlFor={id} className={cs(s.btn, isAdded ? s.btn_added : "")}>
        {isAdded ? "Прикреплено" : "Прикрепить файл"}
      </label>
      {fileName ? (
        <button className={s.delete} onClick={clearInput}>
          <DeleteIcon />
          <span className={cs(s.file_name, classFileName)}>{fileName}</span>
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

const DeleteIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        marginRight: "12px",
        maxWidth: "24px",
        width: "100vw",
        height: "24px",
      }}
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="#FB4141"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 9L9 15"
        stroke="#FB4141"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9L15 15"
        stroke="#FB4141"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
