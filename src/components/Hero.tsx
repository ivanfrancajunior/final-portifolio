import React from "react";
import {
  RiTwitterXFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiDownloadFill,
} from "react-icons/ri";

export const Hero = () => {
  return (
    <div className="my-5  px-8 flex flex-col items-center justify-between w-full  gap-2.5 h-[80vh] min-h-[60vh] ">
      <div className="flex items-center justify-center bg-blue-200 h-[100%] w-full ">
        <h1 className="text-6xl font-semibold text-center">
          Olá, eu sou <span className="text-orange-400">Ivan Junior</span> <br />{" "}
          <span className="text-5xl">Desenvolvedor Web</span>
        </h1>
      </div>
      <div className="flex items-center justify-center bg-blue-200 h-full w-full md:w-[80%]">
        <h2 className="text-center text-3xl p-4">
          Este é meu portfólio, aqui você pode ver conhecer um pouco de mim e meus
          projetos. Fique a vontade para explorar e descubra como posso elevar sua
          presença online!
        </h2>
      </div>
      <div className="flex items-center justify-center px-2 gap-5 bg-blue-200 h-1/4 mb-5 w-full md:w-1/2">
        <div className="h-16 w-1/4  flex items-center justify-center">
          <button className=" h-16 rounded-md px-4 bg-pink-700">
            <span className="flex items-center justify-center gap-1 ">
              curriculo
              <RiDownloadFill size={24} />
            </span>
          </button>
        </div>
        <div className="h-16 min-w-1/2 py-2  rounded-md px-4 md:p-4 bg-orange-400 flex items-center justify-center gap-4 ">
          <div>
            <RiLinkedinBoxFill size={32} />
          </div>
          <div>
            <RiGithubFill size={32} />
          </div>
          <div>
            {" "}
            <RiTwitterXFill size={32} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
