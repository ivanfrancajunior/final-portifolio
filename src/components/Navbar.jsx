import LogoImage from "../assets/logoimage.png";
import { Switcher } from "./Switcher";
import { useState, useEffect } from "react";

const Navbar = ({ mode, handleChange }) => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrolling(currentPosition < scrollTop);
      setScrollTop(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);
  }, [scrollTop]);

  const navbarClasses = scrolling
    ? "fixed top-0 w-full bg-[#151515] transition duration-200 "
    : "absolute transition duration-200";
  return (
    <nav
      className={`bg-[#E9E9E9] text-white dark:bg-[#111217]  font-bold  h-14 md:h-20 w-full min-w-[343px]  flex items-center justify-between md:justify-center  md:py-4 py-2  px-4 md:px-60 mx-auto ${navbarClasses}`}
    >
      <div className="hidden md:flex flex-row items-center justify-between gap-4 cursor-pointer max-w-[296px]">
        <p>Home</p>
        <p>Projetos</p>
        <p>Sobre</p>
        <p>Contato</p>
      </div>

      <div className="md:hidden sm:flex items-center  mx-5 justify-center  w-8 cursor-pointer">
        <img src={LogoImage} alt="logo" className="rounded-full " />
      </div>
      <div className="md:hidden mx-5 sm:flex cursor-pointer" onClick={handleChange}>
        <Switcher mode={mode} />
      </div>
    </nav>
  );
};

export { Navbar };
