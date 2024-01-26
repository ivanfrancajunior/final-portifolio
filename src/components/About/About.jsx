import { AboutCard } from "./AboutCard";

const About = () => {
  return (
    <>
      <AboutCard />
      <div className="flex flex-col items-start px-10 w-full mt-6">
        <h2>FORMACAO</h2>
        <h4>formacao subtitle</h4>
      </div>
      <div className="flex flex-col items-start px-10 w-full mt-6">
        <h2>EXPERIÊNCIAS:</h2>
        <h4>formacao subtitle</h4>
      </div>
      <div className="flex flex-col items-start px-10 w-full mt-6">
        <h2>CURSOS:</h2>
        <h4>formacao subtitle</h4>
      </div>
    </>
  );
};

export { About };
