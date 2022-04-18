import React from "react";
import s from "./DescriptionTech.module.scss";
import cs from "classnames";
import { motion } from "framer-motion";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";

const animateVariants = {
  initial: {
    padding: 0,
    height: 0,
    overflow: "hidden",
    display: "none",
    opacity: 0,
  },
  visible: {
    height: "auto",
    display: "block",
    opacity: 1,
    padding: "16px",
    marginTop: "16px",
  },
  exit: {
    height: 0,
    opacity: 0,
  },
};

const animateVariantsDescriptionContainer = {
  initial: {
    height: 0,
    overflow: "hidden",
    display: "none",
    opacity: 0,
  },
  visible: {
    height: "auto",
    display: "flex",
    opacity: 1,
  },
  exit: {
    height: 0,
    opacity: 0,
  },
};

export default function DescriptionTech({ className, data }) {
  return (
    <motion.div
      className={cs(s.description, className)}
      variants={animateVariants}
      initial="initial"
      animate={"visible"}
      exit={"exit"}
      transition={{ duration: 0.7, type: "tween" }}
    >
      <motion.div
        className={s.description_container}
        variants={animateVariantsDescriptionContainer}
        initial="initial"
        animate={"visible"}
        exit={"exit"}
        transition={{ duration: 0.7, type: "tween" }}
      >
        <LazyImageWrapper
          src={data.photo}
          alt={data.name}
          className={[s.image]}
          wrapperClass={s.image_wrapper}
        />
        <ul className={s.list}>
          {data.params.map((item, index) => {
            return (
              <li className={s.list_item} key={index}>
                <ListIcon />
                <span className={s.list_text}>{item}</span>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </motion.div>
  );
}
const ListIcon = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={s.list_icon}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.8902 5.87175C8.97733 5.31774 6.6816 3.02239 6.1279 0.109578C6.10005 -0.0365259 5.89995 -0.0365259 5.8721 0.109578C5.3184 3.02239 3.02267 5.31841 0.109768 5.87175C-0.0365893 5.89951 -0.0365893 6.09983 0.109768 6.1276C3.02267 6.6816 5.3184 8.97694 5.8721 11.8904C5.89995 12.0365 6.10005 12.0365 6.1279 11.8904C6.6816 8.9776 8.97733 6.6816 11.8902 6.1276C12.0366 6.09983 12.0366 5.90018 11.8902 5.87175Z"
        fill="#181C27"
      />
    </svg>
  );
};
