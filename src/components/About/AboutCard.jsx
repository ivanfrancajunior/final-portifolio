import { Button } from "../Button";

const AboutCard = () => {
  return (
    <>
    <h2 className="text-5xl my-10 ">SOBRE MIM</h2>
    <div className="min-h-[470px] w-full flex flex-col md:flex-row items-center md:items-center justify-between gap-10 p-4 container md:px-56">
      <div className="border-2 border-[#7747FF] h-[300px] min-w-[300px] rounded-full flex items-center justify-center">
        <img src="" alt="my-imge" className="w-full" />
      </div>
      <div className="flex flex-col items-start justify-center gap-5">
        <p className="text-lg min-w-[300px] text-center md:text-start">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quas, tempore
          tempora architecto eveniet officia obcaecati eligendi repellat quis
          voluptatem et a quasi asperiores aliquid facere? Modi qui quod officiis.
        </p>
        <div className="mt-10 w-full ">
          <div className="flex items-center justify-center gap-10">
            <Button>Conecte-se</Button>
            
            <h3 className="font-bold cursor-pointer border-2 border-[#7747FF] hover:text-[#7747FF] py-2 px-4 rounded-lg transition duration-200">
              CURRÍCULO
            </h3>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export { AboutCard };
