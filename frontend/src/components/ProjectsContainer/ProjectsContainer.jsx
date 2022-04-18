import React from "react";
import Button4 from "../uikit/Button4/Button4";
import ProjectCard from "../uikit/ProjectCard/ProjectCard";
import s from "./ProjectsContainer.module.scss";
export default function ProjectsContainer() {
  return (
    <>
      <div className={s.container}>
        <ProjectCard className={s.card} />
        <ProjectCard className={s.card} />
        <ProjectCard className={s.card} />
        <ProjectCard className={s.card} />
        <ProjectCard className={s.card} />
        <ProjectCard className={s.card} />
        <ProjectCard className={s.card} />
        <ProjectCard className={s.card} />
      </div>
      <Button4 className={s.btn}>Показать ещё</Button4>
    </>
  );
}
