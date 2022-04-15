import React, { useState } from "react";
import PathImagesBlock from "../PathImagesBlock/PathImagesBlock";
import TabProductBtn from "../uikit/TabProductBtn/TabProductBtn";
import s from "./PathBlock.module.scss";
export default function PathBlock({}) {
  const [isActive, setIsActive] = useState(0);

  const handleSelectPath = (idx) => {
    setIsActive(idx);
  };

  return (
    <div className={s.container}>
      <h2 className={s.header}>Как добраться до офиса № 1</h2>
      <div className={s.tabs}>
        <TabProductBtn
          isActive={isActive === 0}
          className={s.tab}
          onClick={() => {
            handleSelectPath(0);
          }}
        >
          Пешком
        </TabProductBtn>
        <TabProductBtn
          isActive={isActive === 1}
          className={s.tab}
          onClick={() => {
            handleSelectPath(1);
          }}
        >
          На машине
        </TabProductBtn>
      </div>
      <p className={s.description}>
        Двигаться по внутреней стороне садового, доехать до улицы Трубная,
        по ней проехать 300 метров до перекрёстка и повернуть на право на Малый
        Сухаревский переулок, проехать ещё 50 метров и вы у цели. Есть платная
        парковка 150 ₽ в час.
      </p>
      <PathImagesBlock />
    </div>
  );
}
