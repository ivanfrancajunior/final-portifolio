import About from "../_ui/About";
import CTA from "../_ui/CTA";
import Footer from "../_ui/Footer";
import Header from "../_ui/Header";
import Hero from "../_ui/Hero";
import ProjectsList from "../_ui/ProjectsList";

const Playground = () => {
  return (
    <div className='flex flex-col h-screen w-full '>
      <Header />
      <Hero />
      <About />
      <ProjectsList />
      <CTA />
      <Footer />
    </div>
  );
};

export default Playground;
