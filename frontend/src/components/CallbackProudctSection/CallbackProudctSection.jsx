import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import FeedbackModal from "@/components/FeedbackModal/FeedbackModal";
import Button2 from "@/uikit/Button2/Button2";
import s from "./CallbackProudctSection.module.scss";
import { Line, Mails, Smile, Star } from "./components/Icons";
export default function CallbackProudctSection({ title, theme }) {
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
        <span className={s.header}>{title}</span>
        <Button2 className={s.btn} type="button" onClick={handleOpen}>
          Оставить заявку
        </Button2>
      </div>
      <AnimatePresence>
        {isOpened && (
          <FeedbackModal
            theme={theme}
            isOpened={isOpened}
            onClose={handleOpen}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

