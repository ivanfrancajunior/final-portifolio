import LogoImage from "../assets/logoimage.png";
import { Switcher } from "./Switcher";

const Navbar = ({ mode, handleChange }) => {
  return (
    <nav className=" bg-[#E9E9E9]  dark:bg-[#111217] text-white font-bold  h-14 md:h-20 w-full min-w-[343px]  flex items-center justify-between  md:py-4 py-2  px-4 md:px-60 mx-auto">
      <div className="hidden md:flex flex-row items-center justify-between gap-4 cursor-pointer max-w-[296px]">
        <p>Home</p>
        <p>Projetos</p>
        <p>Sobre</p>
        <p>Contato</p>
      </div>

      <div className="mx-5 md:flex items-center justify-center  w-8 cursor-pointer">
        <img src={LogoImage} alt="logo" className="rounded-full " />
      </div>
      <div className="mx-5 md:flex cursor-pointer" onClick={handleChange}>
        <Switcher mode={mode} />
      </div>
    </nav>
  );
};

export { Navbar };
