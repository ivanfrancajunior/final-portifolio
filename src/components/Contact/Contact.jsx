import { Button } from "../Button";

const Contact = () => {
  return (
    <div className="mt-10 py-8 px-4 flex flex-col items-center justify-start gap-8 border-[#F0F0F0]">
      <h3 className="text-3xl">ENTRE EM CONTATO</h3>
      <p className="text-center border p-2">
        Estou disponível para serviços e novas conexões. Contate-me via e-mail e
        conecte-se comigo através das minhas redes sociais.
      </p>
      <div className="flex gap-2 w-full p-2 border items-center justify-center">
        <span>github</span>
        <span> linkedin</span>
        <span>twitter</span>
      </div>
      <Button>
        contato.ivanfrancajr@gmail.com
      </Button>
    </div>
  );
};

export { Contact };
