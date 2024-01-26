import Django from "../../assets/Django.svg";
import Python from "../../assets/Python.svg";
import NodeJS from "../../assets/NodeJS.svg";
import NextJS from "../../assets/NextJS.svg";
import Typescript from "../../assets/Typescript.svg";
const Stack = () => {
  return (
    <div className="bg-[#844efe] my-4 w-full min-h-72 h-full pb-8 px-8 flex flex-col items-center justify-end">
      <h2 className="text-3xl text-center mb-4">
        Conhecimento nas principais tecnologias do mercado.
      </h2>
      <div className="flex gap-4 items-center justify-between mt-6">
        <span className="flex items-center justify-center w-[48px] h-[48px] shadow-lg">
          
          <img src={Typescript} alt="Typescript" />
        </span>
        <span className="flex items-center justify-center w-[48px] h-[48px] shadow-lg">
          <img src={NodeJS} alt="NodeJS" />
        </span>
        <span className="flex items-center justify-center w-[48px] h-[48px] shadow-lg ">
          <img src={NextJS} alt="NextJS" />
        </span>
        <span className="flex items-center justify-center w-[48px] h-[48px] shadow-lg ">
          <img src={Python} alt="Python" />
        </span>
        <span className="flex items-center justify-center w-[48px] h-[48px] shadow-lg ">
          <img src={Django} alt="Django" />
        </span>
      </div>
    </div>
  );
};

export { Stack };
