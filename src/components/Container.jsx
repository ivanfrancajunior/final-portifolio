const Container = ({ children, mode }) => {
  return (
    <div
      className={`container flex flex-col min-h-screen text-white ${
        mode === "day" ? "bg-[##E9E9E9]" : "bg-[#1a1a1a]"
      } items-center mx-auto`}
    >
      {children}
    </div>
  );
};

export { Container };
