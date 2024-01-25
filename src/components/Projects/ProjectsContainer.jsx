import { useState } from "react";
import { ProjectsItem } from "./ProjectsItem";
import { Button } from "../Button";


const ProjectsContainer = ({ data }) => {
    
    const [projects, setProjects] = useState(data)
    
    return (
    <div className="mt-10 flex flex-col items-center justify-between gap-5">
      <h2 className="flex items-center justify-between text-3xl mb-8 p-4 ">PROJECTS</h2>
      {projects && projects.map((project,i) => <ProjectsItem key={i} />)}
      <Button>
        VER TODOS OS PROJETOS
      </Button>
    </div>
  );
};

export { ProjectsContainer };
