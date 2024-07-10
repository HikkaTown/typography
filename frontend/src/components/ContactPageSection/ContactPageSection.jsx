import React, { useState, useEffect } from "react";
import cn from 'classnames';
import ContactTabsBlock from "@/components/ContactTabsBlock/ContactTabsBlock";
import s from "./ContactPageSection.module.scss";
import { scroller } from "react-scroll";

export default function ContactPageSection({
  data,
  header,
  mapUrl,
  needHeader,
  whiteBg
}) {
  return (
    <section className={cn(s.section, whiteBg && s.section_white)}>
      <div className={s.container} id="container">
        {needHeader ? <h1 className={s.header}>{header}</h1> : null}
        <div className={s.map}>
          <iframe className={s.iframe} src={mapUrl}/>
        </div>
        <ContactTabsBlock
          data={data}
        />
      </div>
    </section>
  );
}
