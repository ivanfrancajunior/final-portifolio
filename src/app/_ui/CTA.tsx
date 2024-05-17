"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const CTA = () => {
  const p1 = React.useRef<HTMLParagraphElement>(null);
  const container = React.useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      if (!container.current) return;
      const boxes: HTMLElement[] = gsap.utils.toArray(
        container.current.children
      );
      boxes.forEach((box) => {
        gsap.to(box, {
          x: -250 * (boxes.indexOf(box) + 1),

          borderRadius: "100%",
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 65%",
            scrub: true,
          },
          ease: "none",
        });
      });
    },
    { scope: container }
  );

  return (
    <section className='flex flex-col items-center justify-center w-full pt-20'>
      <div className='h-[100px] text-[13px] justify-center font-semibold flex items-center w-1/2 text-center '>
        Got a question, proposal or project or want to work
        together on something?
        <br /> Feel free to reach out.
      </div>

      <div className='flex items-center justify-center text-5xl font-bold py-[1rem] border-t-2 border-b-2 w-full'>
        <div
          className='overflow-hidden whitespace-nowrap flex'
          ref={container}
        >
          <a
            className='cursor-pointer hover:text-[#007d9c] py-[2rem]'
            href='mailto:email@me.com'
            target='_blank'
          >
            <p ref={p1} className='mx-[40px]'>
              • LET&apos;S TALK • LET&apos;S COLLABORATE •
              SAY HELLO •
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
