"use client";
import React from "react";
import ProjectItem from "./ProjectItem";

type Project = { id: number; name: string; role: string };

const ProjectsList = () => {
  const [projects, setProjects] = React.useState<Project[]>([
    { id: 1, name: "case study - project 1  - 2024", role: "Frontend / Design" },
    { id: 2, name: "case study - project 2  - 2024", role: "Backend" },
    { id: 3, name: "case study - project 3  - 2024", role: "Fullstack" },
    { id: 4, name: "case study - project 4  - 2024", role: "Frontend" },
    { id: 5, name: "case study - project 5  - 2024", role: "Backend" },
  ]);


  return (
    <div className='grid grid-cols-1  grid-rows-auto border-t-2 '>
      <div className='flex w-full items-center justify-start px-10 py-5 border-b-2 '>
        <div className='text-sm font-semibold flex w-full items-center justify-between '>
          <p className='uppercase'>
            featured projects ({projects.length})
          </p>
          <p className='uppercase'>Role</p>
        </div>
      </div>
      <div>
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            role={project.role}
            projectName={project.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
