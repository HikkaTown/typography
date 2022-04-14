import React from "react";
import Navigation from "../Navigation/Navigation";
import OverlayingPopup from "../OverlayingPopup/OverlayingPopup";
import Portal from "../Portal/Portal";
import Button2 from "../uikit/Button2/Button2";
import s from "./ModalNavigation.module.scss";
export default function ModalNavigation({ isOpened, onClose }) {
  return (
    <Portal>
      <OverlayingPopup isOpened={isOpened} onClose={onClose}>
        <div className={s.container}>
          <Navigation className={s.nav} />
          <Button2 className={s.btn}>Обратная связь</Button2>
        </div>
      </OverlayingPopup>
    </Portal>
  );
}
