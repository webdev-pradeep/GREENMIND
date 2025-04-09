import React, { useState } from "react";
import { CiShoppingCart, CiMenuBurger } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router";

const Header = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  function handleSidebar() {
    setIsSideBarOpen((priv) => !priv);
  }
  return (
    <>
      <div className=" bg-white font-serif flex justify-between items-center h-14 fixed top-0 left-0 right-0 pl-4 pr-5 w-[100%] z-50  md:z-50  md:fixed md:top-0 md:left-0 md:right-0 md:w-[100%] md:h-14 md:bg-white md:flex md:justify-between md:items-center md:pl-16 md:pr-16 md:font-serif">
        <ul className=" md:flex md:gap-5">
          <li className="text-2xl text-black font-stretch-105% cursor-pointer font-bold  md:cursor-pointer md:text-3xl md:font-bold md:text-black ">
            GREENMIND
          </li>
          <li className="  hidden md:cursor-pointer  md:text-3xl/relaxed md:font-stretch-95% md:hover:text-green-500/100 md:transition md:duration-[0.5s] md:ease-in-out md:block ">
            <Link to="/"> Home</Link>
          </li>
          <li className=" hidden md:cursor-pointer  md:text-3xl/relaxed md:font-stretch-95% md:hover:text-green-500/100 md:transition md:duration-[0.5s] md:ease-in-out md:block ">
            <Link to="/product"> Product</Link>
          </li>
          <li className=" hidden md:cursor-pointer  md:text-3xl/relaxed md:font-stretch-95% md:hover:text-green-500/100 md:transition md:duration-[0.5s] md:ease-in-out md:block ">
            <Link to="/contact"> Contacts</Link>
          </li>
        </ul>

        <ul className="flex gap-2 md:flex md:gap-5">
          <li>
            <CiShoppingCart className=" text-3xl text-black font-bold md:text-3xl md:text-black md:cursor-pointer md:hover:text-green-500/100 md:transition duration-[0.5s] ease-in-out " />
          </li>
          <li>
            <FaRegUser className="text-2xl text-black font-bold md:text-2xl md:text-black md:cursor-pointer md:hover:text-green-500/100 md:transition md:duration-[0.5s] md:ease-in-out " />
          </li>

          <li>
            <CiMenuBurger
              onClick={handleSidebar}
              className="text-2xl text-black font-bold md:text-2xl md:text-black md:cursor-pointer md:hover:text-green-500/100 md:transition md:duration-[0.5s] md:ease-in-out "
            />
          </li>
        </ul>
      </div>
      {/* sidebar */}

      <section
        className={`flex justify-end h-screen w-full fixed inset-0 z-50 bg-gray-900/90 transition-all duration-1000  ${
          isSideBarOpen ? "translate-x-[0%]" : "translate-x-[150%]"
        }`}
      >
        <div className=" h-screen bg-green-800 w-[400px] p-8 text-white ">
          <div className="flex justify-end text-2xl font-bold">
            <RxCross2 onClick={handleSidebar} />
          </div>
          <ul>
            <li className="  md:cursor-pointer  md:text-3xl/relaxed md:font-stretch-95% md:hover:text-green-500/100 md:transition md:duration-[0.5s] md:ease-in-out md:block ">
              <Link onClick={handleSidebar} to="/">
                {" "}
                Home
              </Link>
            </li>
            <li className=" md:cursor-pointer  md:text-3xl/relaxed md:font-stretch-95% md:hover:text-green-500/100 md:transition md:duration-[0.5s] md:ease-in-out md:block ">
              <Link onClick={handleSidebar} to="/product">
                {" "}
                Product
              </Link>
            </li>
            <li className=" md:cursor-pointer  md:text-3xl/relaxed md:font-stretch-95% md:hover:text-green-500/100 md:transition md:duration-[0.5s] md:ease-in-out md:block ">
              <Link onClick={handleSidebar} to="/contact">
                {" "}
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Header;
