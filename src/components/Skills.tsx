import { RiLayoutMasonryFill, RiSmartphoneLine, RiTeamLine } from "react-icons/ri";

export const Skills = () => {
  return (
    <div className="my-5 flex flex-col md:flex-row items-center justify-center w-full gap-5  px-8  h-auto p-8 min-h-[60vh] ">
      <div className="min-h-[206px] p-8 min-w-[350px] bg-[#242528] flex flex-col gap-4 rounded-md">
        <div className="h-12 w-12  p-2 flex items-center justify-center ">
          <RiSmartphoneLine size={36} color={'#f97316'} />
        </div>
        <h1 className="text-2xl font-bold">Responsive design</h1>
        <h3 className="text-xl">
          Com minha experiência em padrões de design responsivos, tenho uma visão
          clara sobre como implementá-los de maneira efetiva em qualquer projeto.
        </h3>
      </div>
      <div className="min-h-[206px] p-8 min-w-[350px] bg-[#242528] flex flex-col gap-4 rounded-md">
        <div className="h-12 w-12  p-2 ">
          <RiLayoutMasonryFill size={36}color={'#f97316'} />
        </div>
        <h1 className="text-2xl font-bold">Sistema de design</h1>
        <h3 className="text-xl">
          Tendo o gerenciamento de sistemas de design, o que permite agilidade no
          processo de design, ajustando os tempos na criação das interfaces dentro do
          projeto.
        </h3>
      </div>
      <div className="min-h-[206px] p-8 min-w-[350px] bg-[#242528] flex flex-col gap-4 rounded-md">
        <div className="h-12 w-12  p-2 ">
          <RiTeamLine size={36} color={'#f97316'} />
        </div>
        <h1 className="text-2xl font-bold">Cooworking</h1>
        <h3 className="text-xl">
          Trato de ser un activo valioso en el equipo que esté trabajando, aportando
          mis conocimientos y material que optimice el flujo de trabajo en el
          desarrollo del proyecto.
        </h3>
      </div>
    </div>
  );
};
