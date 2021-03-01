import { FC } from "react";

export const Card: FC<{ children?: any }> = ({ children }) => {
  return (
    <div className="w-full rounded-2xl shadow-lg h-600px bg-white">
      {children}
    </div>
  );
};
