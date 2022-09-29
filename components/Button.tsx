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
      className={`px-8 py-2 border hover:bg-gray-200/20 transition-all ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
