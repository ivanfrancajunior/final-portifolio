import { AboutCard } from "./AboutCard";

const About = () => {
  return (
    <>
      <AboutCard />
      <div className="container flex flex-col md:flex-row w-full items-center md:items-start justify-center md:justify-around md:px-56">
        
        <section className="bg-pink-500 md:w-1/2 w-full p-10">
          <div className="flex flex-col items-start w-full gap-5 ">
            <h2>FORMACAO</h2>
            <h4>formacao subtitle</h4>
          </div>
          <div className="flex flex-col items-start  w-full">
            <h2>EXPERIÊNCIAS:</h2>
            <h4>formacao subtitle</h4>
          </div>
        </section>
        <section className="bg-pink-500 md:w-1/2 w-full p-10">
          <div className="flex flex-col items-start md:px-10 w-full">
            <h2>CURSOS:</h2>
            <h4>formacao subtitle</h4>
          </div>
        </section>
      </div>
    </>
  );
};

export { About };
