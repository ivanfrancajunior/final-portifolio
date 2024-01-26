import { Button } from "../Button";
import { SiGmail, SiX, SiLinkedin, SiGithub } from "react-icons/si";
const Contact = () => {
  return (
    <div className="mt-10 py-8 px-4 flex flex-col items-center justify-start gap-8">
      <h3 className="text-3xl">ENTRE EM CONTATO</h3>
      <p className="text-center p-2">
        Estou disponível para serviços e novas conexões. Contate-me via e-mail e
        conecte-se comigo através das minhas redes sociais.
      </p>
      <div className="flex gap-4 w-full p-2 items-center justify-center">
        <span className="hover:text-[#7764ff] cursor-pointer transition hover:translate-y-1 duration-200 shadow-lg">
          <SiGithub size={26} />
        </span>
        <span className="hover:text-[#7764ff] cursor-pointer transition hover:translate-y-1 duration-200 shadow-lg">
          {" "}
          <SiLinkedin size={26} />
        </span>
        <span className="hover:text-[#7764ff] cursor-pointer transition hover:translate-y-1 duration-200 shadow-lg">
          <SiX size={26} />
        </span>
        <span className="hover:text-[#7764ff] cursor-pointer transition hover:translate-y-1 duration-200 shadow-lg">
          <SiGmail size={26} />
        </span>
      </div>
      <Button>contato.ivanfrancajr@gmail.com</Button>
    </div>
  );
};

export { Contact };
