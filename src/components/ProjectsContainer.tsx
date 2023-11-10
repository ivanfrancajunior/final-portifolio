import { Container } from "./Container";
import { Label } from "./Label";
import myImage from "../assets/default-image-96.png";
import { ProjectComponent } from "./ProjectComponent";
import { VscLiveShare, VscGithub } from "react-icons/vsc";

export const ProjectsContainer = () => {
  return (
    <Container>
      <Label label="Projetos:" />
      <div className="flex flex-col md:flex-row items-center justify-start gap-3">
        <ProjectComponent>
          <div className="flex items-center justify-center h-[206px] w-[320px] ">
            {" "}
            <img
              src={myImage}
              alt=""
              className="object-cover w-full h-full rounded-md"
            />
          </div>

          <div className="flex flex-col items-start justify-center gap-2 font-bold h-40 w-full p-4">
            {" "}
            <h2 className="text-xl">Nome do projeto</h2>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              incidunt dignissimos animi facere necessitatibus esse voluptatu
            </h2>
          </div>
          <div className="flex items-center justify-around px-5 w-full">
            <span>
              <a href="http://google.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition duration-200 ">
                <VscLiveShare size={30} />
              </a>
            </span>
            <span>
              <a href="http://" target="_blank" rel="noopener noreferrer"className="hover:text-orange-500 transition duration-200">
                <VscGithub size={30} />
              </a>
            </span>
          </div>
        </ProjectComponent>
        <ProjectComponent>
          <div className="flex items-center justify-center h-[206px] min-w-[320px] bg-white ">
            {" "}
            <img
              src={myImage}
              alt=""
              className="object-cover w-full h-full rounded-md "
            />
          </div>

          <div className="flex flex-col items-start justify-center gap-2 font-bold h-40 w-full p-4">
            {" "}
            <h2 className="text-xl">Nome do projeto</h2>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              incidunt dignissimos animi facere necessitatibus esse voluptatu
            </h2>
          </div>
          <div className="flex items-center justify-center gap-20 h-10 w-[70%]">
            <span>
              <a href="http://google.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition duration-200 ">
                <VscLiveShare size={30} />
              </a>
            </span>
            <span>
              <a href="http://" target="_blank" rel="noopener noreferrer"className="hover:text-orange-500 transition duration-200">
                <VscGithub size={30} />
              </a>
            </span>
          </div>
        </ProjectComponent>
      </div>
    </Container>
  );
};
