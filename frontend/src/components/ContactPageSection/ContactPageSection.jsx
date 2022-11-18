import React, { useState, useEffect } from "react";
import ContactTabsBlock from "@/components/ContactTabsBlock/ContactTabsBlock";
import PathBlock from "@/components/PathBlock/PathBlock";
import s from "./ContactPageSection.module.scss";
import { scroller } from "react-scroll";

export default function ContactPageSection({
  data,
  header,
  mapUrl,
  setActiveMapUrl,
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
    <section className={s.section}>
      <div className={s.container} id="container">
        <h1 className={s.header}>{header}</h1>
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
        <div className={s.map}>
          <iframe className={s.iframe} src={mapUrl} />
        </div>
      </div>
    </section>
  );
}
