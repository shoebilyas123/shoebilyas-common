import Link from "next/link";
import React from "react";
import useLoading from "../../Hooks/useLoading";
import { BsLockFill } from "react-icons/bs";
import Loader from "../Loader";

import Overlay from "./../Overlay";

interface IProps {
  isAdmin?: boolean;
}

const Navbar: React.FC<IProps> = ({ isAdmin }) => {
  const { loading, initiateLoading } = useLoading();
  return (
    <nav className="bg-black bg-opacity-5 w-full flex items-center justify-center shadow-md">
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
              <span className="blog-logo">S H O E B &nbsp; I L Y A S</span>
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
            <ul className="flex ">
              {/* <Link href="/"> */}
              <li className="hover:opacity-50">
                <a>A R T I C L E S</a>
              </li>
              {/* </Link> */}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
