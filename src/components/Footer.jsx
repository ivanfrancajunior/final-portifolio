import LinkIcon from "./LinkIcon";

const Footer = ({ mode }) => {
  const year = new Date().getFullYear();
  return (
    <footer
      className={`bg-[#111217] text-white flex flex-col items-center justify-center w-full `}
    >
      <div
        className={`p-4 text-center text-white`}
      >
        <h4 className="text-sm">
          © {year}. Todos os Direitos Reservados.{" "}
          <span className="text-[#eb9b33] font-bold ">Ivan Junior</span>.  
          BUILDING SOFTWARE WITH FROM ❤ RIO DE JANEIRO TO THE WORLD.
        
        </h4>
      </div>
      <div className="md:hidden flex w-full items-center justify-center gap-2 mt-4">
        <LinkIcon text={"HOME"} mode={mode}/>
        <LinkIcon text={"PROJETOS"} mode={mode}/>
        <LinkIcon text={"SOBRE"} mode={mode}/>
        <LinkIcon text={"CONTATO"} mode={mode}/>
      </div>
    </footer>
  );
};

export { Footer };
