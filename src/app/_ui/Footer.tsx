import React from "react";
import ButtonComponent from "./ButtonComponent";

const Footer = () => {
  const date = new Date();
  return (
    <footer className='flex flex-col  gap-[1.25rem] py-14 w-full  '>
      <div className=' text-center text-xl hover:text-[#007d9c]'>
        <a href='mailto:email@me.com' target='_blank'>
          email@me.com
        </a>
      </div>
      <div className='uppercase flex items-center justify-between px-5'>
        <div> RJ, Brazil © {date.getFullYear()}</div>
        <div className='gap-2 flex'>
          <ButtonComponent value='twitter' />
          <ButtonComponent value='instagram' />
          <ButtonComponent value='github' />
          <ButtonComponent value='linkedin' />
        </div>
        <div> made with 💗 </div>
      </div>
    </footer>
  );
};

export default Footer;
