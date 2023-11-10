import React from "react";
import { TbBrandJavascript,TbBrandGit, TbBrandTypescript } from "react-icons/tb";

export const WorkTools = () => {
  return (
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold">Tecnologias: </h1>
    <div className="flex mx-auto flex-wrap items-start justify-center min-w-[70%] gap-3 p-4 min-h-[520px] h-auto">
      <div className="flex flex-col w-[120xp] h-[120px] bg-[#242528] rounded-md  shadow-sm shadow-black gap-1 items-center justify-center p-2">
        <div className="flex items-center  justify-center min-w-[120px]  h-full">
          <TbBrandJavascript size={40}/>
        </div>
        <div className="flex items-center  font-bold justify-center min-w-[120px]  h-full text-orange-500">
          JavaScripto 
        </div>
      </div>

      <div className="flex flex-col w-[120xp] h-[120px] bg-[#242528] rounded-md  shadow-sm shadow-black gap-1 items-center justify-center p-2">
        <div className="flex items-center  justify-center min-w-[120px]  h-full">
          <TbBrandTypescript size={40}/>
        </div>
        <div className="flex items-center  font-bold justify-center min-w-[120px]  h-full text-orange-500">
          Typescripto 
        </div>
      </div>

      <div className="flex flex-col w-[120xp] h-[120px] bg-[#242528] rounded-md  shadow-sm shadow-black gap-1 items-center justify-center p-2">
        <div className="flex items-center  justify-center min-w-[120px]  h-full">
          <TbBrandGit size={40}/>
        </div>
        <div className="flex items-center  font-bold justify-center min-w-[120px]  h-full text-orange-500">
          Gito 
        </div>
      </div>
      <div className="flex flex-col w-[120xp] h-[120px] bg-[#242528] rounded-md  shadow-sm shadow-black gap-1 items-center justify-center p-2">
        <div className="flex items-center  justify-center min-w-[120px]  h-full">
          <TbBrandGit size={40}/>
        </div>
        <div className="flex items-center  font-bold justify-center min-w-[120px]  h-full text-orange-500">
          Gito 
        </div>
      </div>
      
      
    </div>
    </div>
  );
};
