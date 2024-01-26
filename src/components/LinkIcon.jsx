import React from "react";

const LinkIcon = ({ text, source, mode }) => {
  return (
    <div className="px-4 py-2 flex flex-col items-center justify-between bg-orange-700 gap-2.5">
      <img src={source} alt={"text"} className="h-12 min-w-16 bg-orange-400" />
      <h2
        className={`${
          mode === "day" ? " text-black" : " text-white"
        } font-bold cursor-pointer`}
      >
        {text}
      </h2>
    </div>
  );
};

export default LinkIcon;
