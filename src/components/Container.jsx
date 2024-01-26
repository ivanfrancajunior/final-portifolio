const Container = ({ children, mode }) => {
  return (
    <div
      className={`pt-20 flex flex-col min-h-screen text-black ${
        mode === "day" ? "bg-[##E9E9E9] text-black" : "bg-[#1b1b1d] text-white"
      } items-center mx-auto`}
    >
      {children}
    </div>
  );
};

export { Container };
