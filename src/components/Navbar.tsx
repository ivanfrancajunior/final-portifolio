import { useState, useEffect } from "react";
import myLogo from "../assets/icon.png";

import { SocialsComponent } from "./SocialsComponent";

export const Navbar = () => {
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
    ? "fixed top-0 w-full bg-[#151515] shadow-md shadow-orange-900 transition duration-200 "
    : "absolute transition duration-200";
  return (
    <nav className={`flex flex-col h-32 bg-black w-full ${navbarClasses}`}>
      <div className="px-8 flex flex-1 items-center h-1/2 bg-black w-full">
        <div className="flex items-center justify-between w-full">
          <a href="/">
            <img src={myLogo} alt="" className="animate-pulse" />
          </a>
          <SocialsComponent/>
        </div>
      </div>

      <div
        className="flex flex-2 items-center justify-around gap-4 h-1/2 bg-orange-500 w-full px-8 font-bold text-lg
       list-none"
      >
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#skills">Habilidades</a>
        </li>
        <li>
          <a href="#stack">Stack</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
      </div>
    </nav>
  );
};
