import React, { useState } from "react";
import cs from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import s from "./DropdownTech.module.scss";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";
import DescriptionTech from "../DescriptionTech/DescriptionTech";

export default function DropdownTech({ data, className }) {
  const [isActive, setIsActve] = useState(false);
  return (
    <div className={s.container}>
      <div
        className={cs(s.header, isActive ? s.header_active : "")}
        onClick={() => {
          setIsActve((prev) => !prev);
        }}
      >
        <p className={s.header_name}>Российский паспорт</p>
        <ArrowIcon className={s.arrow} />
      </div>
      <AnimatePresence>{isActive && <DescriptionTech />}</AnimatePresence>
    </div>
  );
}

const ArrowIcon = ({ className }) => {
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
