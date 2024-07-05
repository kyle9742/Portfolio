import React from "react";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  return (
    <div className="project container-fluid" id="project">
      <div className="title text-center mt-5">Projects</div>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        <ProjectCard title="My Cart" term="개발기간 : 2024.06 ~ 2024.07" image="one" lr="left"/>
        <ProjectCard title="My Cart" term="개발기간 : 2024.06 ~ 2024.07" image="two" lr="right"/>
        <ProjectCard title="My Cart" term="개발기간 : 2024.06 ~ 2024.07" image="three" lr="left" />
      </div>
    </div>
  );
};

export default Project;
