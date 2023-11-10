import { RiLayoutMasonryFill, RiSmartphoneLine, RiTeamLine } from "react-icons/ri";
import { Label } from "./Label";
import { Container } from "./Container";
import { SkillSingleComponent } from "./SkillSingleComponent";

export const SkillsContainer = () => {
  return (
    <Container>
      <Label label="Habilidades" />
      <div className="flex flex-col md:flex-row gap-5 flex-wrap ">
        <SkillSingleComponent>
          <div className="h-12 w-12  p-2 flex items-center justify-center ">
            <RiSmartphoneLine size={36} color={"#f97316"} />
          </div>

          <h1 className="text-2xl font-bold">Responsive design</h1>
          <h3 className="text-xl">
            Com minha experiência em padrões de design responsivos, tenho uma visão
            clara sobre como implementá-los de maneira efetiva em qualquer projeto.
          </h3>
        </SkillSingleComponent>

        <SkillSingleComponent>
          <div className="h-12 w-12  p-2 ">
            <RiLayoutMasonryFill size={36} color={"#f97316"} />
          </div>
          <h1 className="text-2xl font-bold">Sistema de design</h1>
          <h3 className="text-xl">
            Tendo o gerenciamento de sistemas de design, o que permite agilidade no
            processo de design, ajustando os tempos na criação das interfaces dentro
            do projeto.
          </h3>
        </SkillSingleComponent>
        <SkillSingleComponent>
          <div className="h-12 w-12  p-2 ">
            <RiTeamLine size={36} color={"#f97316"} />
          </div>
          <h1 className="text-2xl font-bold">Cooworking</h1>
          <h3 className="text-xl">
            Trato de ser un activo valioso en el equipo que esté trabajando,
            aportando mis conocimientos y material que optimice el flujo de trabajo
            en el desarrollo del proyecto.
          </h3>
        </SkillSingleComponent>
      </div>
    </Container>
  );
};
