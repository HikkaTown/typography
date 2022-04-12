import React, { useState } from "react";
import cs from "classnames";
import s from "./OfficeDropdown.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowIcon } from "../DropdownTech/DropdownTech";

const testData = [
  {
    id: "1",
    addressName:
      "Офис #1, м. Цветной бульвар,Малый Сухаревский пер., д. 9с1, оф. 24",
  },
  {
    id: "2",
    addressName:
      "Офис #2, м. Цветной бульвар,Малый Сухаревский пер., д. 9с1, оф. 24",
  },
  {
    id: "3",
    addressName:
      "Офис #3, м. Цветной бульвар,Малый Сухаревский пер., д. 9с1, оф. 24",
  },
  {
    id: "4",
    addressName:
      "Офис #4, м. Цветной бульвар,Малый Сухаревский пер., д. 9с1, оф. 24",
  },
];

export default function OfficeDropdown({ className, data }) {
  const [currentAddress, setCurrentAddress] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleCurrent = (index) => {
    setCurrentAddress(index);
  };

  return (
    <div
      onClick={() => setIsActive((prev) => !prev)}
      className={cs(s.container, isActive ? s.container_active : "", className)}
    >
      <div className={s.header}>
        <p className={s.header_text}>{testData[currentAddress].addressName}</p>
        <ArrowIcon className={s.arrow} />
      </div>
      <AnimatePresence>
        {isActive && (
          <DropdownMenu
            handleCurrent={handleCurrent}
            data={testData}
            currentAddress={currentAddress}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

const DropdownMenu = ({ data, handleCurrent, currentAddress }) => {
  const variantAnimate = {
    initial: {
      height: 0,
      overflow: "hidden",
    },
    visible: {
      height: "auto",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <motion.ul
      className={s.menu}
      variants={variantAnimate}
      initial="initial"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3, type: "tween" }}
    >
      {data &&
        data.map((item, index) => {
          if (currentAddress === index) {
            return;
          }
          return (
            <li
              key={index}
              className={s.menu_item}
              onClick={() => {
                handleCurrent(index);
              }}
            >
              {item.addressName}
            </li>
          );
        })}
    </motion.ul>
  );
};
