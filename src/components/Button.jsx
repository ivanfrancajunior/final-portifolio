import PropTypes from "prop-types";
const Button = ({ children }) => {
  return (
    <div className="mx-8 text-xl  ">
      <button
        className={`flex items-center justify-center border-2  w-full min-w-[150px]  py-2 px-4  rounded-s-full rounded-e-full`}
      >
        {children}
      </button>
    </div>
  );
};

Button.PropTypes = {
  children: PropTypes.func.isRequired,
};
export { Button };

