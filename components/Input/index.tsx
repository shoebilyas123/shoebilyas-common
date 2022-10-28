import React from "react";
import { useTheme } from "next-themes";

import classes from "./Input.module.css";

interface IProps {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IProps> = ({ value, onChange }) => {
  const { theme } = useTheme();

  return (
    <form onSubmit={(e: any) => e.preventDefault()}>
      <input
        style={{
          outline: "none",
          color: theme === "dark" ? "var(--font-pink)" : "var(--font-purple)",
        }}
        className={`p-2 w-full placeholder:text-zinc-700 dark:bg-opacity-25 dark:bg-black border rounded border-zinc-400 bg-opacity-5 bg-black dark:border-zinc-800 dark:placeholder-zinc-400`}
        value={value}
        onChange={onChange}
        placeholder={`Search for articles...`}
      />
    </form>
  );
};

export default Input;
