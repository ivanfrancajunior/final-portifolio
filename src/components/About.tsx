import myImage from "../assets/react.svg";

export const About = () => {
  return (
    <div className="bg-red-800 w-full max-w-[1180px] h-[60vh] py-4 px-8">
      <div className="h-24 w-24 my-5">
        <img src={myImage} alt="esse-que-tu-lês" className="rounded-full bg-green-400 p-8" />
      </div>
      <h2 className="text-[2rem] mb-5">Sobre mim:</h2>
      <p className="text-xl mb-5">
      Sou um desenvolvedor com foco em sistemas web do Rio de Janeiro e busco oportunidades para aplicar minha paixão em desenvolver sistemas. 
      <br /> 
      Vamos ter uma conversa produtiva sobre como posso contribuir para o seu projeto e agregar valor com minhas habilidades!
      </p>
    </div>
  );
};
