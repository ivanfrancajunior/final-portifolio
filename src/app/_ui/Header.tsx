import React from "react";
import ButtonComponent from "./ButtonComponent";

const Header = () => {
  return (
    <header className='flex items-center justify-around py-4 md:gap-[5rem] px-3'>
      <div className='flex flex-col md:flex-row gap-[1.25rem] md:gap-[2.5rem] items-start md:items-center   justify-start md:justify-around w-full md:w-1/2 '>
        <span className='uppercase text-[14px] font-semibold  text-center'>
          Ivan França <br /> de oliveira Junior
        </span>
        <p className='uppercase text-[14px] font-semibold'>
          Frontend <br /> Developer{" "}
        </p>
      </div>

      <div className='flex flex-col md:flex-row  gap-[1.25rem] md:gap-[2.5rem] items-end md:items-center justify-between md:justify-around w-full md:w-1/2 '>
        <p className='uppercase text-[14px] font-semibold'>
          Available <br />
          for work
        </p>
        <div>
          <ButtonComponent value={"Contact"} href={"#"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
