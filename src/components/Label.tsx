
export const Label = ({ label, id }: { label: string; id?:string }) => {
  return <h1 className="text-4xl font-bold my-10 mt-16" id={id}>{label}</h1>;
};
