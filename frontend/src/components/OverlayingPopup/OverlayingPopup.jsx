import React, { useEffect } from "react";
import cs from "classnames";
import Portal from "@/components/Portal/Portal";
import Overlay from "@/components/Overlay/Overlay";
import { motion } from "framer-motion";
import s from "./OverlayingPopup.module.scss";
import useLockBodyScroll from "@hooks/useLockBodyScroll";

const OverlayingPopup = (props) => {
  const {
    children,
    isOpened,
    onClose,
    isBottom,
    isLeft,
    overlayModal,
    overlayClass,
    child,
  } = props;
  useEffect(() => {
    isOpened
      ? (document.getElementById("__next").style.overflow = "hidden")
      : (document.getElementById("__next").style.overflow = "auto");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const animate = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    hidden2: {
      opacity: 0,
    },
  };
  useLockBodyScroll();
  return (
    <Portal>
      <motion.div
        variants={animate}
        initial="hidden"
        animate="visible"
        exit="hidden2"
        transition={{ duration: 0.5 }}
        className={cs(
          overlayClass,
          s.container,
          isOpened && s.opened,
          overlayModal
        )}
        role="dialog"
      >
        <Overlay onClose={onClose} isLeft={isLeft} />
        <div
          className={cs(
            s.childrenWrapper,
            isBottom && s.childrenWrapperBottom,
            isLeft && s.childrenWrapperLeft,
            child
          )}
        >
          {children}
        </div>
      </motion.div>
    </Portal>
  );
};

export default OverlayingPopup;
