import React from "react";

import classes from "./Button.module.css";

const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = ({
  onClick,
  children,
  className,
  disabled,
  style,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ ...style }}
      className={`${
        disabled
          ? "cursor-not-allowed bg-zinc-300 hover:shadow-none"
          : className
          ? className
          : classes["custom-button"]
      } w-fit flex items-center text-white rounded-md px-5 py-1 hover:shadow outline-none`}
    >
      {children}
    </button>
  );
};

export default Button;
