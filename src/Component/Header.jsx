import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="flex justify-between items-center min-h-2 px-10 py-2 ">
        <div className="text-2xl uppercase tracking-wide font-bold ">
          Room-buddy
        </div>
        <input
          className="bg-gray-100 w-[30rem] outline-none rounded-md px-2 py-1 "
          type="text"
          placeholder="search your person....."
        />
        <ul className="flex space-x-4 items-center">
          <Link to={"/"}>
            <button className="font-bold cursor-pointer">Login</button>
          </Link>
          <Link to={"/signup"}>
            {" "}
            <button className="border px-3 py-2 bg-purple-400 text-white font-bold rounded-md">
              Signup
            </button>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Header;
