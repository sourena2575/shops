import { FC } from "react";

export const Range: FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={`w-2/3 rounded-full h-16  flex border border-gray-400 p-1 items-center justify-between ${className}`}
    >
      <div className="border border-gray-400 rounded-full h-full w-14 text-gray-400">
        {/* <p className="text-7xl text-gray-400 text-center ">-</p> */}
      </div>
      <p className="text-center text-4xl">500/000</p>
      <div className="border border-gray-400 rounded-full h-full w-14 text-gray-400"></div>
    </div>
  );
};
