import {
  SiJavascript,
  SiGit,
  SiTypescript,
  SiGithub,
  SiPhp,
  SiNodedotjs,
  SiNextdotjs,
  SiReact,
  SiHtml5,
} from "react-icons/si";
import { Label } from "./Label";
import { Container } from "./Container";
import { WorkToolsComponent } from "./WorkToolsComponent";

export const WorkToolsContainer = () => {
  return (
    <Container>
      <Label label="Tecnologias:" id={'stack'}/>

      <div className="flex  flex-wrap items-start justify-center md:start  gap-3  h-auto">
        <WorkToolsComponent>
          <div className="flex items-center justify-center w-24 h-16 pt-1  ">
            <SiHtml5 size={40}   />
          </div>
          <div className="flex items-center text-sm  font-bold justify-center  w-full h-16 pt-1 ">
            HTML + CSS
          </div>
        </WorkToolsComponent>
        <WorkToolsComponent>
          <div className="flex items-center justify-center w-24 h-16 pt-1 ">
            <SiJavascript size={40}  />
          </div>
          <div className="flex items-center  font-bold justify-center  w-full h-16 pt-1 ">
            JavaScript
          </div>
        </WorkToolsComponent>

        <WorkToolsComponent>
          <div className="flex items-center justify-center w-24 h-16 pt-1 ">
            <SiTypescript size={40}  />
          </div>
          <div className="flex items-center  font-bold justify-center  w-full h-16 pt-1 ">
            Typescript
          </div>
        </WorkToolsComponent>
        <WorkToolsComponent>
          <div className="flex items-center justify-center w-24 h-16 pt-1 ">
            <SiPhp size={40}  />
          </div>
          <div className="flex items-center  font-bold justify-center  w-full h-16 pt-1 ">
            PHP
          </div>
        </WorkToolsComponent>
        <WorkToolsComponent>
          <div className="flex items-center justify-center w-24 h-16 pt-1 ">
            <SiNodedotjs size={40}  />
          </div>
          <div className="flex items-center  font-bold justify-center  w-full h-16 pt-1 ">
            Nodejs
          </div>
        </WorkToolsComponent>
        <WorkToolsComponent>
          <div className="flex items-center justify-center w-24 h-16 pt-1 ">
            <SiNextdotjs size={40}  />
          </div>
          <div className="flex items-center  font-bold justify-center  w-full h-16 pt-1 ">
            Nextjs
          </div>
        </WorkToolsComponent>
        <WorkToolsComponent>
          <div className="flex items-center justify-center w-24 h-16 pt-1 ">
            <SiReact size={40}  />
          </div>
          <div className="flex items-center  font-bold justify-center  w-full h-16 pt-1 ">
            Reactjs
          </div>
        </WorkToolsComponent>

        <WorkToolsComponent>
          <div className="flex items-center justify-center w-24 h-16 pt-1 ">
            <SiGit size={40}  />
          </div>
          <div className="flex items-center  font-bold justify-center  w-full h-16 pt-1 ">
            Git
          </div>
        </WorkToolsComponent>
        <WorkToolsComponent>
          <div className="flex items-center justify-center w-24 h-16 pt-1 ">
            <SiGithub size={40}  />
          </div>
          <div className="flex items-center  font-bold justify-center  w-full h-16 pt-1 ">
            Github
          </div>
        </WorkToolsComponent>
      </div>
    </Container>
  );
};
