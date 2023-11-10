import React from "react";

export const SkillSingleComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-[206px] p-8 w-[350px]  bg-[#242528] flex flex-col  gap-4 rounded-md my-2">
      {children}
    </div>
  );
};
