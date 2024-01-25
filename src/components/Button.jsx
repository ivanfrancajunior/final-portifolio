const Button = ({ children }) => {
  return (
    <div className="mx-8 text-xl mt-6 pb-4">
      <button
        className={`border-2  w-full min-w-[150px] max-w-[300px] p-3  rounded-s-full rounded-e-full`}
      >
        {children}
      </button>
    </div>
  );
};

export { Button };
