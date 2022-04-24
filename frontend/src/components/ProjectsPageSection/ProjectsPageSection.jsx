import React, { useState, useEffect } from "react";
import {
  getAllProjectsCard,
  getCurrentProjectsCard,
} from "../../lib/apiFunctions";
import ProjectsContainer from "../ProjectsContainer/ProjectsContainer";
import ProjectTabs from "../ProjectTabs/ProjectTabs";
import s from "./ProjectsPageSection.module.scss";
export default function ProjectsPageSection({ header, tabs, cards }) {
  const [activeTab, setIsActiveTab] = useState(null);
  const [currentProjects, setCurrentProjects] = useState(cards || []);
  const selectActiveTab = (id) => {
    setIsActiveTab(id);
  };

  useEffect(() => {
    if (activeTab === null) {
      async function getAllCards() {
        const result = await getAllProjectsCard();
        setCurrentProjects(result);
      }
      getAllCards();
    } else {
      async function getCurrentCards() {
        const result = await getCurrentProjectsCard(activeTab);
        setCurrentProjects(result);
      }
      getCurrentCards();
    }
  }, [activeTab]);

  return (
    <section className={s.section}>
      <div className={s.container}>
        <h1 className={s.header}>{header}</h1>
        <ProjectTabs
          tabs={tabs}
          handleSelect={selectActiveTab}
          activeTab={activeTab}
        />
        <ProjectsContainer cards={currentProjects} />
      </div>
    </section>
  );
}
