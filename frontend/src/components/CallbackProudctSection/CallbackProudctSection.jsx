import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import FeedbackModal from "../FeedbackModal/FeedbackModal";
import { LazyImage } from "../LazyImage/LazyImage";
import Button2 from "../uikit/Button2/Button2";
import s from "./CallbackProudctSection.module.scss";
import { Line, Mails, Smile, Star } from "./components/Icons";
export default function CallbackProudctSection() {
  const [isOpened, setIsOpened] = useState(false);
  const handleOpen = () => {
    setIsOpened((prev) => !prev);
  };
  return (
    <section className={s.section}>
      <div className={s.container}>
        <Smile className={s.smile} />
        <Line className={s.first_line} />
        <Line className={s.second_line} />
        <Mails className={s.first_mails} />
        <Mails className={s.second_mails} />
        <Star className={s.first_star} />
        <Star className={s.second_star} />
        <h2 className={s.header}>
          Все вопросы уточняйте у менеджера, оставьте заявку и мы свяжемся
          с вами в ближайщее время
        </h2>
        <Button2 className={s.btn} type="button" onClick={handleOpen}>
          Оставить заявку
        </Button2>
      </div>
      <AnimatePresence>
        {isOpened && <FeedbackModal isOpened={isOpened} onClose={handleOpen} />}
      </AnimatePresence>
    </section>
  );
}
