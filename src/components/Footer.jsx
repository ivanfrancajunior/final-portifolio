import LinkIcon from "./LinkIcon";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center justify-center w-full">
      <div className="p-4 text-center">
        <h4>
          © {year}. Todos os Direitos Reservados.{" "}
          <span className="text-[#eb9b33]">Ivan Junior</span>{" "}
        </h4>
        <p className="text-sm">
          BUILDING SOFTWARE WITH FROM ❤ RIO DE JANEIRO TO THE WORLD
        </p>
      </div>
      <div className="flex w-full items-center justify-center">
        <LinkIcon text={"HOME"} />
        <LinkIcon text={"PROJETOS"} />
        <LinkIcon text={"SOBRE"} />
        <LinkIcon text={"CONTATO"} />
      </div>
    </footer>
  );
};

export { Footer };
