import React from "react";

export const ProjectComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-start gap-3 p-4 rounded-md bg-[#242528]">
      {children}
    </div>
  );
};
