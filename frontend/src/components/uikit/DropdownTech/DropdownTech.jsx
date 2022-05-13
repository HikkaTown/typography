import React, { useState } from "react";
import cs from "classnames";
import { AnimatePresence } from "framer-motion";
import s from "./DropdownTech.module.scss";
import DescriptionTech from "../DescriptionTech/DescriptionTech";

export default function DropdownTech({
  data,
  className,
  isActive,
  setIsActve,
  index,
}) {
  return (
    <div className={cs(s.container, className)}>
      <div
        className={cs(s.header, isActive === index ? s.header_active : "")}
        onClick={() => {
          setIsActve(index);
        }}
      >
        <p className={s.header_name}>{data.name}</p>
        <ArrowIcon className={s.arrow} />
      </div>
      <AnimatePresence>
        {isActive === index && <DescriptionTech data={data} />}
      </AnimatePresence>
    </div>
  );
}

export const ArrowIcon = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
