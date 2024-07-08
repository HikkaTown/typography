import React, { useState, useEffect } from "react";
import cn from 'classnames';
import ContactTabsBlock from "@/components/ContactTabsBlock/ContactTabsBlock";
import PathBlock from "@/components/PathBlock/PathBlock";
import s from "./ContactPageSection.module.scss";
import { scroller } from "react-scroll";

export default function ContactPageSection({
  data,
  header,
  mapUrl,
  setActiveMapUrl,
  needHeader,
  whiteBg
}) {
  const [isOpened, setIsOpened] = useState(null);

  useEffect(() => {
    if (isOpened) {
      scroller.scrollTo("pathBlock", {
        duration: 760,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [isOpened]);

  return (
    <section className={cn(s.section, whiteBg && s.section_white)}>
      <div className={s.container} id="container">
        {needHeader ? <h1 className={s.header}>{header}</h1> : null}
        <div className={s.map}>
          <iframe className={s.iframe} src={mapUrl}/>
        </div>
        <ContactTabsBlock
          data={data}
          setIsOpen={setIsOpened}
          isOpen={isOpened}
          setActiveMapUrl={setActiveMapUrl}
        />
        {isOpened && (
          <PathBlock
            data={data.find((item) => {
              return item.id === isOpened;
            })}
          />
        )}
      </div>
    </section>
  );
}
