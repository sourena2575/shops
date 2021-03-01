import { FC } from "react";

export const Text: FC<{ className?: string; children?: any }> = ({
  className,
  children,
}) => {
  return <p className={` text-gray-400 font-bold ${className}`}>{children}</p>;
};
