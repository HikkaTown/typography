import React from "react";
import s from "./ProjectSection.module.scss";
import Button4 from "@/uikit/Button4/Button4";
import ProjectCard from "@/uikit/ProjectCard/ProjectCard";
import { useRouter } from "next/router";
export default function ProjectSection({ data }) {
  const router = useRouter();
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.header}>Наши работы</h2>
        <div className={s.cards}>
          {data &&
            data.slice(0, 3).map((item, index) => {
              return <ProjectCard className={s.card} key={index} data={item} />;
            })}
        </div>
        <Button4
          className={s.btn}
          onClick={() => {
            router.push("/projects");
          }}
        >
          Смотреть всё
        </Button4>
      </div>
    </section>
  );
}
