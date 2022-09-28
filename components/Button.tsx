import React, { MouseEventHandler } from "react";

type ButtonProps = {
  children: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};
const Button = ({ children, className, onClick, disabled }: ButtonProps) => {
  return (
    <button
      className={`px-8 py-2 border hover:bg-gray-200/20 ease-in duration-300 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      Button
    </button>
  );
};

export default Button;
