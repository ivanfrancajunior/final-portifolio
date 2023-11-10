import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { SkillsContainer } from "./components/SkillsContainer";
import { WorkToolsContainer } from "./components/WorkToolsContainer";
import {  About } from "./components/About";
import {  ProjectsContainer } from "./components/ProjectsContainer";

function App() {
  return (
    <>
      <Navbar />
      <main className=" container flex flex-col items-center justify-start min-h-[calc(100vh-100px)] h-auto px-8 mx-auto max-w-[1180px]">
       <Hero/>
       <About/>
       <SkillsContainer/>
       <WorkToolsContainer/>
       <ProjectsContainer/>
      </main>
      <Footer />
    </>
  );
}

export default App;
