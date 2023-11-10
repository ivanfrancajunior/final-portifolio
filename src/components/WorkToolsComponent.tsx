import React from "react";

export const WorkToolsComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-[90xp] h-[90px] bg-[#242528] rounded-md  shadow-sm shadow-black gap-1 items-center justify-center p-2 hover:text-[#f97316] transition duration-150
    ">
      {children}
    </div>
  );
};
