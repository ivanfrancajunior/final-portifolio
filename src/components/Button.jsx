const Button = ({ children }) => {
  return (
    <div>
      <button
        className={`class="inline-block border border-[#7747FF] py-1 px-4 rounded-lg min-w-[150px] bg-[#7747FF] hover:bg-white hover:text-[#7747FF] focus:text-[#7747FF] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200"`}
      >
        {children}
      </button>
    </div>
  );
};


export { Button };
