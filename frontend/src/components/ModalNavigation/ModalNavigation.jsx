import React, { useState } from "react";
import FeedbackModal from "../FeedbackModal/FeedbackModal";
import Navigation from "../Navigation/Navigation";
import OverlayingPopup from "../OverlayingPopup/OverlayingPopup";
import Portal from "../Portal/Portal";
import Button2 from "../uikit/Button2/Button2";
import s from "./ModalNavigation.module.scss";
export default function ModalNavigation({ isOpened, onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Portal>
      <OverlayingPopup isOpened={isOpened} onClose={onClose}>
        <div className={s.container}>
          <Navigation className={s.nav} />
          <Button2 className={s.btn} type="button" onClick={handleOpen}>
            Обратная связь
          </Button2>
          {isOpen && <FeedbackModal isOpened={isOpen} onClose={handleOpen} />}
        </div>
      </OverlayingPopup>
    </Portal>
  );
}
