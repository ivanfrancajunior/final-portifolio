const Stack = () => {
  return (
    <div className="bg-[#484849] mt-4 w-full min-h-72 h-full pb-8 px-8 flex flex-col items-center justify-end">

      <h2 className="text-3xl text-center mb-4">
        Conhecimento nas principais tecnologias do mercado.
      </h2>
      <div className="flex gap-4 items-center justify-between mt-6">
        <span className="flex items-center justify-center w-16 h-16 bg-green-500 ">
          TS
        </span>
        <span className="flex items-center justify-center w-16 h-16 bg-green-500 ">
          Node
        </span>
        <span className="flex items-center justify-center w-16 h-16 bg-green-500 ">
          React
        </span>
        <span className="flex items-center justify-center w-16 h-16 bg-green-500 ">
          Pyhon
        </span>
        <span className="flex items-center justify-center w-16 h-16 bg-green-500 ">
          Django
        </span>
      </div>
    </div>
  );
};

export { Stack };
