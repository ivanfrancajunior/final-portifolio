import {
  RiTwitterXFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailLine,
} from "react-icons/ri";
import { Container } from "./Container";

export const Hero = () => {
  return (
    <Container>
      <div className="flex items-center justify-center my-10 h-[100%] w-full ">
        <h1 className="text-5xl font-semibold text-center">
          Olá, eu sou <span className="text-orange-500">Ivan Junior</span> <br />{" "}
          <span className="text-4xl text-zinc-200 animate-pulse">
            Desenvolvedor Web
          </span>
        </h1>
      </div>

      <div className="flex items-center mt-5 mb-20">
        <h2 className="text-center  text-2xl  text-zinc-200">
          Este é meu portfólio, aqui você pode ver conhecer um pouco de mim e meus
          projetos. Fique a vontade para explorar e descubra como posso elevar sua
          presença online!
        </h2>
      </div>

      <div className="flex flex-col items-center mx-auto ">
        <div className="flex items-center justify-center px-2 mx-auto min-w-[380px] gap-5  h-1/4 mb-5 w-full md:w-1/2">
          <div className="h-8  min-w-1/2 py-6  rounded-md px-4 md:p-4   flex items-center justify-center gap-4 ">
            <div className="hover:translate-y-[2px] transition duration-400 ease-in cursor-pointer ">
              <a href="mailto:contato.ivanfrancajr@gmail.com" target="_blank">
                <RiMailLine size={40} color={"white"} />
              </a>
            </div>
            <div className="hover:translate-y-[2px] transition duration-400 ease-in cursor-pointer ">
              <a href="https://www.linkedin.com/in/ivanjrdev/" target="_blank">
                <RiLinkedinBoxFill size={40} color={"white"} />
              </a>
            </div>

            <div className="hover:translate-y-[2px] transition duration-400 ease-in cursor-pointer">
              <a href="https://github.com/ivanfrancajunior" target="_blank">
                <RiGithubFill size={40} color={"white"} />
              </a>
            </div>

            <div className="hover:translate-y-[2px] transition duration-400 ease-in cursor-pointer">
              <a href="https://twitter.com/jota94" target="_blank">
                <RiTwitterXFill size={40} color={"white"} />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="bg-orange-500 px-8 py-4  rounded-l-full rounded-r-full font-bold mt-2">
          <a href="mailto:contato.ivanfrancajr@gmail.com" target="_blank">Entrar em contato</a>
        </div>
      </div>
    </Container>
  );
};
