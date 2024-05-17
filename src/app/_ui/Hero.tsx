import React from "react";

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center md:py-[15rem] py-[10rem] h-screen  bg-black '>
      <div className='relative '>
        <div className="absolute inset-0 bg-[url('/images/hero-bg-5.webp')] bg-cover bg-center"></div>
        <div className='relative z-10 text-center bg-black'>
          <p className="text-[#f38ba8] bg-clip-text bg-[url('/images/hero-bg-5.webp')] bg-cover bg-center text-3xl md:text-4xl font-semibold mb-5 text-start uppercase">
            Hi there, ivan jr
          </p>

          <p className="text-transparent bg-clip-text bg-[url('/images/hero-bg-5.webp')] bg-cover bg-center uppercase text-6xl md:text-9xl font-extrabold leading-tight shadow-2xl">
            <span>
              FULLSTACK <br />
            </span>
            <span>DEVELOPER</span>
          </p>
        </div>
      </div>
      <div className='py-[5rem]'>scroll down</div>
    </section>
  );
};

export default Hero;
//bg-[url(/images/hero-bg.webp)]
