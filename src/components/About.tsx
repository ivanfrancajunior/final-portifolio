import myImage from "../assets/1664913134356.jfif";
import { Container } from "./Container";
import { Label } from "./Label";

export const About = () => {
  return (
    <Container>
      <Label label="Sobre mim:" />
      
        <div className="h-44 w-44 mb-5 ml-8">
          <img
            src={myImage}
            alt="esse-que-tu-lês"
            className="rounded-full "
          />
          
        </div>
        <div className="text-2xl mb-5 ">
          <h2 className="mb-2">
            Sou um desenvolvedor com foco em sistemas web do Rio de Janeiro e busco
            oportunidades para aplicar minha paixão em desenvolver sistemas.
          </h2>
          <h2>
            Vamos ter uma conversa produtiva sobre como posso contribuir para o seu
            projeto e agregar valor com minhas habilidades!
          </h2>
        </div>
     
    </Container>
  );
};
