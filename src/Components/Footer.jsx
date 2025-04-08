import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const FooterPage = () => {
  return (
    <>
      <div className=" w-[100%] mt-5 bg-[#C1DCDC] md:w-[100%] md:bg-[#C1DCDC] md:flex md:justify-between md:p-10">
        <div className=" p-4 text-center  md:grid md:gap-5 md:pl-20">
          <td className="  text-center grid gap-2 md:grid ">
            <th className="text-3xl font-bold md:text-2xl md:text-black md:cursor-pointer md:hover:text-black/50 md:active:text-black md:transition-all md:duration-[0.5s] md:ease-in-out ">
              GREENMIND
            </th>
            <tr className=" text-[14px] text-gray-400 cursor-pointer font-bold md:text-2xl md:font-normal md:text-gray-400/70 md:font-sans md:cursor-pointer md:hover:text-gray-600 md:transition-all md:duration-[0.6s] md:ease-in-out md:active:bg-green-400">
              We help you find
            </tr>
            <tr className="text-[14px] text-gray-400 cursor-pointer font-bold md:text-2xl md:font-normal md:text-gray-400/70 md:font-sans md:cursor-pointer md:hover:text-gray-600 md:transition-all md:duration-[0.6s] md:ease-in-out md:active:bg-green-400">
              your dream plant
            </tr>

            <ul className="flex justify-center items-center gap-3  md:flex md:justify-center md:items-center md:gap-4 md:mt-6">
              <a href="#">
                <FaFacebookF className=" text-5xl p-2 border-2 border-cyan-400  rounded-full  transition-all duration-[0.3s] ease-in-out text-cyan-500 hover:bg-cyan-400 hover:text-white active:bg-amber-400  md:text-3xl md:border-2 md:border-cyan-400 md:p-1 md:rounded-full  md:transition-all md:duration-[0.3s] md:ease-in-out md:text-cyan-500 md:hover:bg-cyan-400 md:hover:text-white md:active:bg-amber-400    " />
              </a>
              <a href="https://www.instagram.com/pradeep_army_suraksha_0009/">
                <FaInstagram className=" text-5xl p-2 border-2 border-cyan-400  rounded-full  transition-all duration-[0.3s] ease-in-out text-cyan-500 hover:bg-cyan-400 hover:text-white active:bg-amber-400  md:text-3xl md:border-2 md:border-cyan-400 md:p-1 md:rounded-full  md:transition-all md:duration-[0.3s] md:ease-in-out md:text-cyan-500 md:hover:bg-cyan-400 md:hover:text-white md:active:bg-amber-400    " />
              </a>

              <a href="https://www.linkedin.com/in/pradeep-gond-597090358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <FaLinkedinIn className=" text-5xl p-2 border-2 border-cyan-400  rounded-full  transition-all duration-[0.3s] ease-in-out text-cyan-500 hover:bg-cyan-400 hover:text-white active:bg-amber-400  md:text-3xl md:border-2 md:border-cyan-400 md:p-1 md:rounded-full  md:transition-all md:duration-[0.3s] md:ease-in-out md:text-cyan-500 md:hover:bg-cyan-400 md:hover:text-white md:active:bg-amber-400    " />
              </a>
            </ul>
            <p className="text-[15px] text-gray-500 font-serif from-neutral-300 md:text-gray-500 md:font-bold mt-4">
              2023 all Right Reserved Term of use GREENMIND
            </p>
          </td>
        </div>

        <div className=" p-5 md:pr-20">
          <table className="flex justify-center items-center gap-5 text-center  md:flex md:gap-10  md:items-center md:text-center">
            <td className="grid gap-4 md:grid md:gap-4">
              <th className=" text-[15px] font-bold text-black cursor-pointer md:text-2xl md:text-black md:cursor-pointer md:hover:text-black/50 md:active:text-black md:transition-all md:duration-[0.5s] md:ease-in-out ">
                Information
              </th>
              <tr className="text-[14px] text-gray-700   md:text-2xl md:font-normal md:text-gray-400/70 md:font-sans md:cursor-pointer md:hover:text-gray-600 md:transition-all md:duration-[0.6s] md:ease-in-out md:active:bg-green-400">
                About
              </tr>
              <tr className="text-[14px] text-gray-700   md:text-2xl md:font-normal md:text-gray-400/70 md:font-sans md:cursor-pointer md:hover:text-gray-600 md:transition-all md:duration-[0.6s] md:ease-in-out md:active:bg-green-400">
                Product
              </tr>
              <tr className="text-[14px] text-gray-700   md:text-2xl md:font-normal md:text-gray-400/70 md:font-sans md:cursor-pointer md:hover:text-gray-600 md:transition-all md:duration-[0.6s] md:ease-in-out md:active:bg-green-400">
                Blog
              </tr>
            </td>

            <td className="grid gap-4 md:grid md:gap-4">
              <th className=" text-[15px] font-bold text-black cursor-pointer md:text-2xl md:text-black md:cursor-pointer md:hover:text-black/50 md:active:text-black md:transition-all md:duration-[0.5s] md:ease-in-out">
                Company
              </th>
              <tr className="text-[14px] text-gray-700   md:text-2xl md:font-normal md:text-gray-400/70 md:font-sans md:cursor-pointer md:hover:text-gray-600 md:transition-all md:duration-[0.6s] md:ease-in-out md:active:bg-green-400">
                Community
              </tr>
              <tr className="text-[14px] text-gray-700   md:text-2xl md:font-normal md:text-gray-400/70 md:font-sans md:cursor-pointer md:hover:text-gray-600 md:transition-all md:duration-[0.6s] md:ease-in-out md:active:bg-green-400">
                Career
              </tr>
              <tr className="text-[14px] text-gray-700   md:text-2xl md:font-normal md:text-gray-400/70 md:font-sans md:cursor-pointer md:hover:text-gray-600 md:transition-all md:duration-[0.6s] md:ease-in-out md:active:bg-green-400">
                Our story
              </tr>
            </td>

            <td className="grid gap-4 md:grid md:gap-4">
              <th className=" text-[15px]  font-bold text-black cursor-pointer md:text-2xl md:text-black md:cursor-pointer md:hover:text-black/50 md:active:text-black md:transition-all md:duration-[0.5s] md:ease-in-out">
                Contact
              </th>
              <tr className="text-[14px] text-gray-700   md:text-2xl md:font-normal md:text-gray-400/70 md:font-sans md:cursor-pointer md:hover:text-gray-600 md:transition-all md:duration-[0.6s] md:ease-in-out md:active:bg-green-400">
                Getting
              </tr>
              <tr className="text-[14px] text-gray-700   md:text-2xl md:font-normal md:text-gray-400/70 md:font-sans md:cursor-pointer md:hover:text-gray-600 md:transition-all md:duration-[0.6s] md:ease-in-out md:active:bg-green-400">
                Pricing
              </tr>
              <tr className="text-[14px] text-gray-700   md:text-2xl md:font-normal md:text-gray-400/70 md:font-sans md:cursor-pointer md:hover:text-gray-600 md:transition-all md:duration-[0.6s] md:ease-in-out md:active:bg-green-400">
                Resources
              </tr>
            </td>
          </table>
        </div>
      </div>
    </>
  );
};

export default FooterPage;
