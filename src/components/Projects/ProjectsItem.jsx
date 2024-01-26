import { Button } from "../Button";
import ImageSample from "../../assets/imageSample.png";
const ProjectsItem = ({ project }) => {
  return (
    <div className="min-h-[470px] w-[360px] md:w-full  flex flex-col md:flex-row  items-center  justify-center md:items-start  md:gap-10 p-4 pb-5">
      <div className="flex items-center justify-center min-w-[320px] lg:max-w-[600px] min-h-48 h-full mb-3 md:mt-4">
        <img src={ImageSample} alt="project-image" />
      </div>

      <div className="md:mt-4" >

        <h3 className=" w-full text-center mb-3 text-5xl">PROJECT TITLE</h3>
        <h4 className=" w-full  text-xl font-semibold">PROJECT DESC</h4>
        <ul className="  flex flex-col items-start justify-center w-full  mt-2 px-2">
          <li>{project || "PROJETC FEATURE"}</li>
          <li>PROJETC FEATURE</li>
          <li>PROJETC FEATURE</li>
        </ul>
        <div className="flex items-center justify-center gap-8 w-full h-16 my-4">
          <span className="w-12 h-12 rounded-full bg-purple-400 flex items-center justify-center">
            <img src="" alt="tec" />
          </span>
          <span className="w-12 h-12 rounded-full bg-purple-400 flex items-center justify-center">
            <img src="" alt="tec" />
          </span>
          <span className="w-12 h-12 rounded-full bg-purple-400 flex items-center justify-center">
            <img src="" alt="tec" />
          </span>
          <span className="w-12 h-12 rounded-full bg-purple-400 flex items-center justify-center">
            <img src="" alt="tec" />
          </span>
        </div>
        <div className="flex items-center justify-between px-2 w-full ">
          
          <Button>Previa</Button>
          
          <h3 className="font-bold cursor-pointer border-2 border-[#7747FF] hover:text-[#7747FF] py-2 px-6 rounded-lg  transition duration-200">
            Repositório
          </h3>
        </div>
      </div>
    </div>
  );
};

export { ProjectsItem };
