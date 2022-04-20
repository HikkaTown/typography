import React from "react";
import s from "./StepsBlock.module.scss";
import StepBtn from "../../../uikit/StepBtn/StepBtn";
import cs from "classnames";
import { Element } from "react-scroll";
export default function StepsBlock({ className, count, id }) {
  return (
    <div className={cs(s.container, className)}>
      <Element id={id} />
      <StepBtn isActive={1 <= count}>1</StepBtn>
      <Arrows />
      <StepBtn isActive={2 <= count}>2</StepBtn>
      <Arrows />
      <StepBtn isActive={3 <= count}>3</StepBtn>
      <Arrows />
      <StepBtn isActive={4 <= count}>4</StepBtn>
    </div>
  );
}

const Arrows = () => {
  return (
    <svg
      width="40"
      height="32"
      viewBox="0 0 40 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 24L20 16L12 8"
        stroke="#37465D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 24L28 16L20 8"
        stroke="#CED7E7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
