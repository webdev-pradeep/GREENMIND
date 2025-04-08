import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiTreehouse } from "react-icons/gi";
import { SlCallOut } from "react-icons/sl";
import { PiShippingContainerFill } from "react-icons/pi";

function HomePage() {
  return (
    <>
      <div className="w-[100%] bg-yellow-100/70 pt-20  md:bg-yellow-100/70 md:w-[100%] md:pt-5 md:p-15 md:mt-15  ">
        <div className=" w-[100%] bg-[#C1DCDC] grid md:w-[100%] md:h-[100%] md:bg-[#C1DCDC] md:flex md:rounded-2xl md:overflow-hidden ">
          <div className="  w-[100%] grid grid-cols-1  p-5 md:w-[70%] md:h-[100%] md:p-20">
            <h1 className="text-3xl font-bold font-serif md:text-4xl md:font-bold md:font-serif md:ml-10">
              Buy your...
            </h1>
            <h1 className="text-3xl font-bold font-serif md:text-4xl md:font-bold md:font-serif md:ml-10">
              dream plants..
            </h1>
            <ul className="flex divide-x-2 gap-2  md:[100%] md:w-[50%] mt-10 md:flex md:justify-center md:items-center md:divide-x-1 md:gap-4 ">
              <ul>
                <li className="text-center font-mono md:text-lg md:text-center md:cursor-pointer">
                  50+
                </li>
                <li className="font-bold text-md font-serif md:text-2xl md:text-center md:font-serif md:font-black  ">
                  Plant Species
                </li>
              </ul>
              <ul>
                <li className=" font-mono text-center md:text-lg  md:text-center md:cursor-pointer ">
                  100+
                </li>
                <li className="font-bold font-serif text-lg md:text-2xl md:font-serif md:font-black ">
                  Customers
                </li>
              </ul>
            </ul>

            <ul className=" flex  md:ml-10 mt-5 md:flex  md:items-center md:w-[100%] ">
              <input
                className=" flex justify-center items-center border-2 outline-0 pl-2 rounded-tl-md rounded-bl-md p-1 border-r-0  md:w-[33%] md:bg-white md:text-lg md:font-serif md:pl-3 md:rounded-md md:rounded-br-none md:rounded-tr-none md:border-2 md:outline-none md:border-r-0 
                 "
                placeholder="What are you looking for?"
                name="search bar"
              />
              <BsSearch className="border-2 border-l-0 flex justify-center text-4xl p-2 rounded-tr-md rounded-br-md  md:text-3xl md:h-[100%] md:bg-white md:p-1 md:border-2 md:border-black md:rounded-md md:border-l-0 md:rounded-bl-none md:rounded-tl-none " />
            </ul>
          </div>

          <div className="md:w-[30%] md:h-[100%] relative">
            <img
              src="src/assets/image 1.png  "
              alt="image1"
              className=" w-[100%] object-center   "
            />
            <div className="md:h-96 md:w-96 md:rounded-full md:bg-black opacity-30 md:absolute md:-bottom-20 md:-right-10 "></div>
          </div>
        </div>

        <div className="w-[100%] p-5 grid grid-cols-1 gap-4 md:w-[100%]  md:flex md:justify-center md:gap-4  ">
          <ul className="  bg-white rounded-2xl md:w-[100%] md:h-[300px] md:bg-white md:rounded-xl ">
            <li className="p-5 grid gap-2  md:p-5 md:grid md:grid-cols-1 md:gap-2">
              <h1 className="text-2xl font-bold  font-serif md:text-3xl md:font-bold md:font-serif">
                Best Selling
              </h1>
              <h1 className=" text-2xl font-bold font-serif md:text-3xl md:font-bold md:font-serif">
                Plants..
              </h1>
              <p className=" font-serif text-gray-400 font-medium">
                Easiest way to healthy life by buying your favorite plants
              </p>
              <button className=" flex justify-center items-center p-2 gap-2 text-xl  bg-[#C1DCDC] w-[60%] active:bg-red-200 transition-all duration-200 ease-in-out  md:bg-[#C1DCDC] md:hover:bg-red-400 md:flex md:items-center md:justify-center md:w-[55%] md:gap-2 md:text-xl md:font-medium md:p-2 rounded-2xl md:mt-6 md:active:bg-red-400/50 md:transition md:duration-[0.5s] md:ease-in-out ">
                See more
                <FaArrowRightLong className="text-black flex mt-[5px]  md:text-black md:font-bold md:mt-[5px]" />
              </button>
            </li>
          </ul>

          <ul className="w-[100%] bg-white rounded-2xl p-1  md:w-[100%] md:bg-white md:rounded-xl ">
            <li>
              <img
                src="src/assets/image 2.png"
                alt="image2"
                className="pointer-cursor object-contain md:cursor-pointer"
              />
            </li>
            <p className=" pl-7 pt-3 text-xl font-serif md:text-2xl md:font-serif  ">
              Natural Plants
            </p>
            <p className="pl-7 pb-5 text-xl  md:text-xl ">₱ 1,400.00</p>
          </ul>

          <ul className="w-[100%] bg-white rounded-2xl p-1  md:w-[100%] md:bg-white md:rounded-xl ">
            <li>
              <img
                src="src/assets/image 3.png"
                alt="image3"
                className=" pointer-cursor object-contain md:cursor-pointer"
              />
            </li>
            <p className=" text-xl font-serif pl-7 pt-3  md:text-2xl  ">
              Artificial Plants
            </p>
            <p className="text-xl pl-7 pb-5">₱ 900.00</p>
          </ul>

          <ul className="w-[100%] bg-white rounded-2xl p-1  md:w-[100%] md:bg-white md:rounded-xl ">
            <li>
              <img
                src="src/assets/image 4.png"
                alt="image4"
                className=" pointer-cursor object-contain md:cursor-pointer"
              />
            </li>
            <p className=" text-xl font-serif pl-7 pt-3 md:text-2xl  ">
              Artificial Plants
            </p>
            <p className="text-xl pl-7 pb-5">₱ 3,500.00</p>
          </ul>
        </div>

        <h1 className=" text-3xl w-[100%] text-center font-serif font-bold md:text-4xl md:text-black md:font-bold md:font-serif md:text-center md:mt-9">
          About us
        </h1>
        <p className=" text-lg text-[14px] text-center  md:text-xl md:text-black md:font-serif md:text-center">
          Order now and appreciate the beauty of nature
        </p>

        <ul className=" grid grid-cols-1 gap-5 p-5 md:flex md:justify-center md:items-center md:gap-5 md:mt-12 ">
          <ul className=" h-[100%] w-[100%] p-3 md:h-[250px] bg-white rounded-2xl  md:p-5 md:w-[400px] hover:shadow-2xl transition-all duration-500  hover:transform hover:translate-2">
            <li className=" ml-28 w-[50px]  md:h-18  md:w-18 rounded-full bg-[#C1DCDC] flex items-center justify-center hover:bg-red-200 transition-all duration-500 active:bg-red-100 md:ml-[150px]">
              <GiTreehouse className=" p-2 text-5xl md:text-5xl md:cursor-pointer " />
            </li>
            <li className=" mt-3 text-2xl font-black font-serif text-center md:mt-6 ">
              Large Assortment
            </li>
            <li className=" mt-2 pb-5 text-ms text-center">
              we offer many different types of products with fewer variations in
              each category.
            </li>
          </ul>

          <ul className="h-[100%] p-4 md:h-[250px] bg-white rounded-2xl  md:p-5 md:w-[400px] hover:shadow-2xl transition-all duration-500  hover:translate-1">
            <li className=" ml-25 w-[60px] p-3 md:h-18  md:w-18 rounded-full bg-[#C1DCDC] flex items-center justify-center hover:bg-red-200 transition-all duration-500 active:bg-red-100 md:ml-[150px] ">
              <SlCallOut className=" text-4xl md:text-4xl md:cursor-pointer" />
            </li>
            <li className=" text-2xl font-black font-serif text-center mt-2 md:mt-5 ">
              Fast & Free Shipping
            </li>
            <li className="text-ms text-center">
              4-day or less delivery time, free shipping and an expedited
              delivery option.
            </li>
          </ul>

          <ul className="  md:h-[250px] p-5 bg-white rounded-2xl  md:p-5 md:w-[400px] hover:shadow-2xl transition-all duration-500  hover:translate-1">
            <li className="w-16 p-3 ml-25  md:h-18  md:w-18 rounded-full bg-[#C1DCDC] flex items-center justify-center hover:bg-red-200 transition-all duration-500 active:bg-red-100 md:ml-[150px]">
              <PiShippingContainerFill className="text-4xl md:text-4xl md:cursor-pointer" />
            </li>
            <li className="  text-2xl font-black font-serif text-center mt-3 md:mt-5">
              24/7 Support
            </li>
            <li className="text-ms text-center pb-5">
              answers to any business related inquiry 24/7 and in real-time.
            </li>
          </ul>
        </ul>

        <h1 className=" text-4xl text-black font-bold font-serif text-center mt-9">
          Categories
        </h1>
        <p className="md:text-xl text-[12px] text-black mt-2 md:font-serif text-center">
          Find what you are looking for
        </p>

        <div className=" grid grid-cols-1 gap-5 w-[100%] p-5  md:h-[480px] md:w-auto bg-[#C1DCDC] md:flex  md:justify-center md:items-center mt-8 rounded-2xl md:relative shadow-2xl">
          <div className="w-auto md:relative right-50">
            <img
              src="src/assets/image 5.png"
              alt="image5"
              className="md:w-[250px] object-contain cursor-pointer transition-all duration-500 ease-in-out hover:md:shadow-2xl hover:shadow-black md:rounded-xl hover:translate-1"
            />
            <a href="#" className="text-xl font-bold flex justify-center mt-5">
              Natural Plants
            </a>
          </div>

          <div className="w-auto md:absolute top-0">
            <img
              src="src/assets/image 6.png"
              alt="image6"
              className="md:w-[250px] object-contain cursor-pointer md:transition-all md:duration-500 md:ease-in-out hover:md:shadow-2xl hover:shadow-black md:rounded-xl hover:md:translate-1"
            />
            <a href="#" className="text-xl font-bold flex justify-center mt-5">
              Plant Accessories
            </a>
            <p className="text-[10px] text-center text-black font-serif">
              Horem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="w-auto md:relative left-50">
            <img
              src="src/assets/image 7.png"
              alt="image7"
              className="md:w-[250px] object-contain cursor-pointer transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-black rounded-xl hover:translate-1 "
            />
            <a href="#" className="text-xl font-bold flex justify-center mt-4 ">
              Artificial Plants
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
