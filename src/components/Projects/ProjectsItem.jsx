import { Button } from "../Button";

const ProjectsItem = ({project}) => {
  
  return (
    <div className="min-h-[470px] w-[360px] bg-orange-400 flex flex-col items-center justify-start border">
      <div className="flex items-center justify-center bg-pink-950 w-full min-h-48 mb-3">
        <img src="" alt="" />
      </div>
      <h3 className="bg-green-500 w-full mb-3">PROJECT TITLE</h3>
      <h4 className="bg-green-500 w-full ">PROJECT DESC</h4>
      <ul className=" bg-green-500 flex flex-col items-start justify-center w-full pl-8 mt-2">
        <li className="list-disc">{project || 'PROJETC FEATURE'}</li>
        <li className="list-disc">PROJETC FEATURE</li>
        <li className="list-disc">PROJETC FEATURE</li>
      </ul>
      <div className="flex items-center h-40 my-4">
        tec stack
      </div>
      <div className="flex items-center justify-center ">
        <Button>
            Previa
        </Button>
        <h3 className="p-3 mr-6 font-bold cursor-pointer">
            REPOSITÓRIO
        </h3>
      </div>
    </div>
  );
};

export { ProjectsItem };
