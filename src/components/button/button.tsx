import { FC } from "react";

export const Button: FC<{ disabled?: boolean; className?: string }> = ({
  children,
  className,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      className={`h-12 ${
        disabled
          ? "bg-gray-300 border border-gray-400 text-gray-600"
          : "bg-blue-500 text-white"
      } shadow-lg rounded-full px-8  text-lg flex items-center justify-center ${className}`}
    >
      <span className="font-semibold">{children}</span>
    </button>
  );
};
