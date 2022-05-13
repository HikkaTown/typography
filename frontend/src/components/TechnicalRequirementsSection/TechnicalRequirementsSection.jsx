import React, { useState } from "react";
import DescriptionTech from "@/uikit/DescriptionTech/DescriptionTech";
import DropdownTech from "@/uikit/DropdownTech/DropdownTech";
import Tab from "@/uikit/Tab/Tab";
import s from "./TechnicalRequirementsSection.module.scss";

export default function TechnicalRequirementsSection({ data }) {
  const [isActive, setIsActive] = useState(0);
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.header}>Технические требования</h2>
        <div className={s.tech_mobile}>
          {data &&
            data.map((item, index) => {
              return (
                <DropdownTech
                  data={item}
                  index={index}
                  key={item.id}
                  isActive={isActive}
                  setIsActve={setIsActive}
                  className={s.dropdown}
                />
              );
            })}
        </div>
        <div className={s.tech_desktop}>
          <div className={s.tabs}>
            {data &&
              data.map((item, index) => {
                return (
                  <Tab
                    className={s.tab}
                    key={item.id}
                    isActive={isActive === index ? true : false}
                    onClick={() => {
                      setIsActive(index);
                    }}
                  >
                    {item.name}
                  </Tab>
                );
              })}
          </div>
          <DescriptionTech className={s.tech} data={{ ...data[isActive] }} />
        </div>
      </div>
    </section>
  );
}
