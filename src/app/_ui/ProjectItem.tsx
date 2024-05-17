"use client";
import { useGSAP } from "@gsap/react";
import { FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";
import React, { useRef, useState } from "react";
type Props = {
  role?: string;
  projectName?: string;
};

const ProjectItem = ({ role, projectName }: Props) => {
  const [isHover, setIsHover] = useState(false);
  const projectRef = useRef<HTMLParagraphElement>(null);
  let tl = gsap.timeline({ x: 0 });
  useGSAP(() => {
    if (!projectRef.current) return;
    if (isHover) {
      tl.to(projectRef.current, {
        x: 15,
        duration: 0.2,
      });
    }
    if (!isHover) {
      tl.to(projectRef.current, {
        x: 0,
        duration: 0.1,
      });
    }
  }, [isHover, projectRef]);

  return (
    <>
      <a
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        href='#'
        target='_blank'
        rel='noopener noreferrer'
        className=' border-b-2 w-full px-10 py-[1.25rem]  flex flex-col justify-between items-start  hover:bg-[#007d9c]  hover:border-[#007d9c] transition-all duration-200'
      >
        <div className='flex w-full items-center justify-end'>
          <div className='text-sm font-semibold'>
            {role ? (
              role
            ) : (
              <p className='uppercase'>Developer</p>
            )}
          </div>
        </div>

        <div
          className=' flex gap-2 items-center justify-around'
          ref={projectRef}
        >
          <p className='text-3xl font-bold py-5 px-5 flex flex-nowrap'>
            {projectName
              ? projectName
              : " RADIO NULL REWIND"}{" "}
            <span className='ml-5'>
              <FiArrowUpRight size={30} />
            </span>
          </p>
        </div>
      </a>
    </>
  );
};

export default ProjectItem;
