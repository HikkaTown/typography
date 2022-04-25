import React, { useState } from "react";
import DescriptionTech from "@/uikit/DescriptionTech/DescriptionTech";
import DropdownTech from "@/uikit/DropdownTech/DropdownTech";
import Tab from "@/uikit/Tab/Tab";
import s from "./TechnicalRequirementsSection.module.scss";

export default function TechnicalRequirementsSection({ data }) {
  const [isActive, setIsActive] = useState(1);
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.header}>Технические требования</h2>
        <div className={s.tech_mobile}>
          {data &&
            data.map((item) => {
              return (
                <DropdownTech
                  data={item}
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
              data.map((item) => {
                return (
                  <Tab
                    className={s.tab}
                    key={item.id}
                    isActive={isActive === item.id ? true : false}
                    onClick={() => {
                      setIsActive(item.id);
                    }}
                  >
                    {item.name}
                  </Tab>
                );
              })}
          </div>
          <DescriptionTech className={s.tech} data={data[isActive - 1]} />
        </div>
      </div>
    </section>
  );
}
