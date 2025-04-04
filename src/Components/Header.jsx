import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className=" bg-white font-serif flex justify-between items-center h-14 fixed top-0 left-0 right-0 pl-8 pr-5 w-[100%] z-50  md:z-50  md:fixed md:top-0 md:left-0 md:right-0 md:w-[100%] md:h-14 md:bg-white md:flex md:justify-between md:items-center md:pl-16 md:pr-16 md:font-serif">
        <ul className=" md:flex md:gap-5">
          <li className="text-2xl text-black font-stretch-105% cursor-pointer font-bold  md:cursor-pointer md:text-3xl md:font-bold md:text-black ">
            GREENMIND
          </li>
          <li className="  hidden md:cursor-pointer  md:text-3xl/relaxed md:font-stretch-95% md:hover:text-green-500/100 md:transition md:duration-[0.5s] md:ease-in-out md:block ">
            Home
          </li>
          <li className=" hidden md:cursor-pointer  md:text-3xl/relaxed md:font-stretch-95% md:hover:text-green-500/100 md:transition md:duration-[0.5s] md:ease-in-out md:block ">
            Product
          </li>
          <li className=" hidden md:cursor-pointer  md:text-3xl/relaxed md:font-stretch-95% md:hover:text-green-500/100 md:transition md:duration-[0.5s] md:ease-in-out md:block ">
            Contacts
          </li>
        </ul>

        <ul className="flex gap-2 md:flex md:gap-5">
          <li>
            <CiShoppingCart className=" text-3xl text-black font-bold md:text-3xl md:text-black md:cursor-pointer md:hover:text-green-500/100 md:transition duration-[0.5s] ease-in-out " />
          </li>
          <li>
            <FaRegUser className="text-2xl text-black font-bold md:text-2xl md:text-black md:cursor-pointer md:hover:text-green-500/100 md:transition md:duration-[0.5s] md:ease-in-out " />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
