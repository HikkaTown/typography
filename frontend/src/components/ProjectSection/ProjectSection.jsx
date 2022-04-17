import React from "react";
import s from "./ProjectSection.module.scss";
import Button4 from "../uikit/Button4/Button4";
import ProjectCard from "../uikit/ProjectCard/ProjectCard";
import { useRouter } from "next/router";
export default function ProjectSection() {
  const router = useRouter();
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.header}>Наши работы</h2>
        <div className={s.cards}>
          <ProjectCard className={s.card} />
          <ProjectCard className={s.card} />
          <ProjectCard className={s.card} />
        </div>
        <Button4
          className={s.btn}
          onClick={() => {
            router.push("/projects");
          }}
        >
          Показать ещё
        </Button4>
      </div>
    </section>
  );
}
