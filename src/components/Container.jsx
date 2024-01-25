const Container = ({ children, mode }) => {
  return (
    <div
      className={`pt-20 container flex flex-col min-h-screen text-black ${
        mode === "day" ? "bg-[##E9E9E9] text-black" : "bg-[#1a1a1a] text-white"
      } items-center mx-auto pb-[700px]`}
    >
      {children}
    </div>
  );
};

export { Container };
