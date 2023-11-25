import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  const newProjects= projects.map((project)=>{ return <ProjectItem about={project.about} key={project.id} name={project.name} title={project.title} technologies={project.technologies}/>}
  )
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{newProjects}</div>
    </div>
  );
}

export default ProjectList;
