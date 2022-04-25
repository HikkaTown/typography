import React, { useState } from "react";
import Button4 from "@/uikit/Button4/Button4";
import ProjectCard from "@/uikit/ProjectCard/ProjectCard";
import s from "./ProjectsContainer.module.scss";
export default function ProjectsContainer({ cards }) {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <>
      <div className={s.container}>
        {cards &&
          cards.slice(0, visibleCount).map((item, index) => {
            return <ProjectCard className={s.card} key={index} data={item} />;
          })}
      </div>
      {cards > visibleCount ? (
        <Button4 className={s.btn} onClick={handleShowMore}>
          Показать ещё
        </Button4>
      ) : (
        ""
      )}
    </>
  );
}
