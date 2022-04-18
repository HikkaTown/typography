import React from "react";
import ProjectsContainer from "../ProjectsContainer/ProjectsContainer";
import ProjectTabs from "../ProjectTabs/ProjectTabs";
import s from "./ProjectsPageSection.module.scss";
export default function ProjectsPageSection() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h1 className={s.header}>Наши проекты</h1>
        <ProjectTabs />
        <ProjectsContainer />
      </div>
    </section>
  );
}
