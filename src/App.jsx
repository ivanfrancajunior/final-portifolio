import { useState } from "react";
import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { ProjectsContainer } from "./components/Projects/ProjectsContainer";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer";
function App() {
  const [mode, setMode] = useState("nigth");
  const handleChange = () => {
    if (mode === "day") {
      setMode("nigth");
    }

    if (mode === "nigth") {
      setMode("day");
    }
  };
  const data = ["eu", "eu", "eu"];
  return (
    <>
      <Navbar mode={mode} handleChange={handleChange} />
      <Container mode={mode}>
        <Hero />
        <ProjectsContainer data={data} />
        <About />
        <Contact />
      </Container>
      <Footer />
    </>
  );
}

export default App;
