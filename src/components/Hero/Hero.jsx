import { Socials } from "../Socials";
import { Button } from "../Button";
import { Stack } from "./Stack";

const Hero = () => {
  return (
    <>
      <div className="container min-h-[85vh] mx-auto flex flex-col items-start justify-center">
        <h1 className="min-h-40  mx-8 text-5xl md:text-[100px] font-bold pb-20 text-center">
          Soluções Criativas & Desenvolvimento <br />
          FullStack
        </h1>

        <div className=" text-[24px] md:text-4xl font-bold mt-1 flex flex-col items-center justify-center mx-auto">
          <h3 className="flex items-center justify-center">
            Ivan França de Oliveira Junior
          </h3>
          <h3 className="flex items-center justify-center mb-4"> Rio de janeiro, RJ.</h3>
          <Socials />
          <Button>VER PROJETOS</Button>
        </div>
      </div>
      <Stack />
    </>
  );
};

export { Hero };
