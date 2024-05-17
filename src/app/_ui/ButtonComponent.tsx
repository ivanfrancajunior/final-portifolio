import React from "react";
import Link from "next/link";
type Props = {
  value?: string;
  href?: string;
};

const ButtonComponent = ({ value, href }: Props) => {
  return (
    <button
      className=' text-lg uppercase py-[2px] px-2 rounded-[45px] border-2 transition-all duration-300 hover:border-[#007d9c] hover:bg-[#007d9c] hover:font-semibold'
      nav-anim
    >
      <span className=' inline-flex items-center relative overflow-hidden z-10'>
        <Link href={href ? href : "/playground"}>
          <span className='flex translate-y-0 transition duration-300 mr-[2px] hover:translate-y-[-100%] font-semibold'>
            <span> {value ? value : "text 1"} </span>
            <span className='absolute top-[100%] flex font-semibold'>
              {value ? value : "text 2"}
            </span>
          </span>
        </Link>
      </span>
    </button>
  );
};

export default ButtonComponent;
