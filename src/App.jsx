import { useState } from "react";
import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero/Hero";

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

  return (
    <>
      <Navbar mode={mode} handleChange={handleChange} />
      <Container mode={mode}>
        <Hero/>
      </Container>
    </>
  );
}

export default App;
