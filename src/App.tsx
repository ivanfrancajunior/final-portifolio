import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { WorkTools } from "./components/WorkTools";
import {  About } from "./components/About";
import {  Projects } from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <section className=" container flex flex-col items-center justify-start min-h-[calc(100vh-100px)] h-auto px-8 mx-auto max-w-[1180px] ">
       <Hero/>
       <About/>
       <Skills/>
       <WorkTools/>
       <Projects/>

      </section>
      <Footer />
    </>
  );
}

export default App;
