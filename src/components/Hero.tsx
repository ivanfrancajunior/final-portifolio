import { Container } from "./Container";

export const Hero = () => {
  return (
    <Container>
      <div className="flex items-center justify-center my-10 h-[100%] w-full ">
        <h1 className="text-5xl font-semibold text-center mt-36">
          Olá, eu sou Ivan Junior <br />
          <span className="text-4xl text-zinc-200">
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
        <div className="bg-orange-500 px-8 py-4  rounded-l-full rounded-r-full font-bold mt-2">
          <a href="mailto:contato.ivanfrancajr@gmail.com" target="_blank">Entrar em contato</a>
        </div>
      </div>
    </Container>
  );
};
