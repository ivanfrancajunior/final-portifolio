import React from "react";

const About = () => {
  return (
    <section className='flex flex-col items-center border-t-2 justify-center gap-[1.25rem] py-[2rem]'>
      <div className='flex items-end h-1/2 text-sm   font-semibold mt-[4rem] uppercase text-center'>
        about
      </div>
      <div className='min-h-1/2 flex items-center font-semibold justify-center text-center py-[2rem] border-t-1 border-b-1 w-3/4'>
        <p className="text-start">
          Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Possimus mollitia aliquam minima
          expedita vero labore eligendi sed! I have worked
          on some resources and tools; mostly for designers
          and developers like myself, you should checkout
          TINTS AND SHADES, NIGERIAN LOGOS and BAVATARS.
        </p>
      </div>
    </section>
  );
};

export default About;
