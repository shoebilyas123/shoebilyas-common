import Link from "next/link";
import React from "react";
import useLoading from "../../Hooks/useLoading";
import { BsLockFill, BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import Loader from "../Loader";

import Overlay from "./../Overlay";
import Button from "../Button";

interface IProps {
  isAdmin?: boolean;
}

const Navbar: React.FC<IProps> = ({ isAdmin }) => {
  const { loading, initiateLoading } = useLoading();
  const { systemTheme, setTheme, theme } = useTheme();

  const renderThemeChange = () => {
    const currentTheme = theme === systemTheme ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <Button
          className="p-2 border rounded-md bg-zinc-800 text-white border-zinc-800 hover:border-orange-500 hover:bg-zinc-900 active:bg-zinc-700"
          onClick={() => setTheme("light")}
        >
          <BsFillSunFill />
        </Button>
      );
    } else {
      return (
        <Button
          className="p-2 border rounded-md bg-slate-200 hover:bg-slate-400 active:bg-slate-400"
          onClick={() => setTheme("dark")}
        >
          <BsFillMoonStarsFill />
        </Button>
      );
    }
  };

  return (
    <nav className="bg-black bg-opacity-5 w-full flex items-center justify-center shadow-md dark:text-white dark:bg-zinc-800 dark:bg-gradient-r dark:from-zinc-900 dark:to-black  dark:bg-opacity-10">
      {loading && (
        <Overlay>
          <Loader />
        </Overlay>
      )}
      <div className="md:w-3/5 px-2 py-4 flex items-center justify-between">
        <div className="flex flex-col">
          <Link href={"/"}>
            <a
              onClick={initiateLoading}
              className={`${isAdmin ? "relative" : ""}`}
            >
              <span
                className="blog-logo"
                style={{
                  color:
                    theme === "dark"
                      ? "var(--theme-purple)"
                      : "var(--font-purple)",
                }}
              >
                S H O E B &nbsp; I L Y A S
              </span>
              <span className="w-full flex justify-end items-right">
                <i style={{ fontFamily: "Roboto" }}>writes</i>
              </span>
              {isAdmin && (
                <BsLockFill className="rounded-full absolute -right-5 top-1 text-zinc-500" />
              )}
            </a>
          </Link>
        </div>
        {!isAdmin && (
          <div className="sm:hidden md:block">
            <ul className="flex space-x-2 justify-center items-center">
              {/* <Link href="/"> */}
              <li className="hover:opacity-50">
                <a>A R T I C L E S</a>
              </li>
              <li>{renderThemeChange()}</li>
              {/* </Link> */}
            </ul>
          </div>
        )}
        <div className="md:hidden sm:block absolute right-2">
          {renderThemeChange()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
