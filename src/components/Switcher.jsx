import Moon from "../assets/Moon.svg";
import Sum from "../assets/Sun.svg";

const Switcher = ({ mode }) => {
  if (mode == "day") {
    return <div>{mode === "day" ? <img src={Sum} alt="" /> : ""}</div>;
  }
  return (
    <>
      <div>{mode === "nigth" ? <img src={Moon} alt="" /> : ""}</div>
    </>
  );
};

export { Switcher };
