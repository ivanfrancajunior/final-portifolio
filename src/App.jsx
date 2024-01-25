import { useState } from "react";
import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar";

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
      <Container mode={mode} h></Container>
    </>
  );
}

export default App;
