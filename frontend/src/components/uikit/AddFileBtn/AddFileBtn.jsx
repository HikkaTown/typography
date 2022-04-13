import React, { useRef, useState } from "react";
import cs from "classnames";
import s from "./AddFileBtn.module.scss";

export default function AddFileBtn({ className }) {
  const ref = useRef(null);
  const [isAdded, setIsAdded] = useState(false);
  const [fileName, setFileName] = useState("");
  const handleLoad = (e) => {
    if (e.target.files.length !== 0) {
      setFileName(e.target.files[0].name);
      setIsAdded(true);
    } else {
      setFileName("");
      ref.current.value = "";
      setIsAdded(false);
    }
  };

  const clearInput = () => {
    setFileName("");
    ref.current.value = "";
    setIsAdded(false);
  };

  return (
    <div className={cs(s.container, className)}>
      <input
        type="file"
        name="file"
        id="file"
        className={s.input}
        ref={ref}
        onChange={handleLoad}
      />
      <label htmlFor="file" className={cs(s.btn, isAdded ? s.btn_added : "")}>
        {isAdded ? "Прикреплено" : "Прикрепить файл"}
      </label>
      {fileName ? (
        <button className={s.delete} onClick={clearInput}>
          <DeleteIcon />
          <span className={s.file_name}>{fileName}</span>
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
      style={{ marginRight: "12px" }}
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
