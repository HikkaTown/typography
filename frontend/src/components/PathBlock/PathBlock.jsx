import React, { useState } from "react";
import PathImagesBlock from "@/components/PathImagesBlock/PathImagesBlock";
import TabProductBtn from "@/uikit/TabProductBtn/TabProductBtn";
import s from "./PathBlock.module.scss";
import { Element } from "react-scroll";
import cn from 'classnames';
export default function PathBlock({ data, offBorder, hideHeader }) {
  const [isActive, setIsActive] = useState(1);
  const { path } = data;
  const handleSelectPath = (idx) => {
    setIsActive(idx);
  };

  return (
    <div className={cn(s.container, offBorder && s.withoutBorder)} id="pathBlock">
      <Element id="pathBlock" className={s.scroll_element} />
      {hideHeader ? null : (<h2 className={s.header}>{data.pathHeader}</h2>)}
      <div className={s.tabs}>
        <TabProductBtn
          isActive={isActive === 1}
          className={s.tab}
          onClick={() => {
            handleSelectPath(1);
          }}
        >
          Пешком
        </TabProductBtn>
        <TabProductBtn
          isActive={isActive === 2}
          className={s.tab}
          onClick={() => {
            handleSelectPath(2);
          }}
        >
          На машине
        </TabProductBtn>
      </div>
      <p className={s.description}>
        {isActive === 1 && data.path.onFoot.description}
        {isActive === 2 && data.path.byCar.description}
      </p>
      <PathImagesBlock
        images={
          isActive === 1 ? data.path.onFoot.images : data.path.byCar.images
        }
        video={
          isActive === 1
            ? data.path.onFoot.videoBlock
            : data.path.byCar.videoBlock
        }
      />
    </div>
  );
}
