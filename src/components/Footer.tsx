
import { SocialsComponent } from "./SocialsComponent";

export const Footer = () => {

  return (
    <footer className=" items-start justify-center flex-col flex h-40 bg-[#151515]">
      <div className="flex flex-col  items-center justify-center gap-4  h-20 w-full mb-5">
        
        <div className="flex gap-10 items-center justify-center p-4 list-none font-bold  h-full w-full mx-auto">
          <li>
            <a href="#about" className="hover:text-orange-500 ">Sobre</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-orange-500 ">Habilidades</a>
          </li>
          <li>
            <a href="#stack" className="hover:text-orange-500 ">Stack</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-orange-500 ">Projetos</a>
          </li>
        </div>

        <div className="flex items-center justify-center w-1/2 h-full ">
          <SocialsComponent />
        </div>
      </div>
    </footer>
  );
};
