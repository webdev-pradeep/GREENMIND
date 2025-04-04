import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

function HomePage() {
  return (
    <>
      <div className="md:bg-yellow-100/70 md:w-[100%] md:pt-5 md:p-15 md:mt-15  ">
        <div className="md:w-[100%] md:h-[100%] md:bg-[#C1DCDC] md:flex md:rounded-2xl md:overflow-hidden ">
          <div className=" md:w-[70%] md:h-[100%] md:p-20">
            <h1 className="md:text-4xl md:font-bold md:font-serif md:ml-10">
              Buy your...
            </h1>
            <h1 className="md:text-4xl md:font-bold md:font-serif md:ml-10">
              dream plants..
            </h1>
            <ul className="md:w-[50%] md:mt-10 md:flex justify-center md:items-center md:divide-x-1 md:gap-4 ">
              <ul>
                <li className="md:text-lg md:text-center md:cursor-pointer">
                  50+
                </li>
                <li className="md:text-2xl md:text-center md:font-serif md:font-black  ">
                  Plant Species
                </li>
              </ul>
              <ul>
                <li className="md:text-lg md:text-center md:cursor-pointer ">
                  100+
                </li>
                <li className="md:text-2xl md:font-serif md:font-black ">
                  Customers
                </li>
              </ul>
            </ul>

            <ul className="md:ml-10 mt-5 md:flex  md:items-center md:w-[100%] ">
              <input
                className=" md:w-[33%] md:bg-white md:text-lg md:font-serif md:pl-3 md:rounded-md md:rounded-br-none md:rounded-tr-none md:border-2 md:outline-none md:border-r-0 
                 "
                placeholder="What are you looking for?"
                name="search bar"
              />
              <BsSearch className="md:text-3xl md:h-[100%] md:bg-white md:p-1 md:border-2 md:border-black md:rounded-md md:border-l-0 md:rounded-bl-none md:rounded-tl-none " />
            </ul>
          </div>

          <div className="md:w-[30%] md:h-[100%] relative">
            <img
              src="src/assets/image 1.png  "
              alt="image1"
              className="md:w-[100%]  "
            />
            <div className="md:h-96 md:w-96 md:rounded-full md:bg-black opacity-30 md:absolute md:-bottom-20 md:-right-10 "></div>
          </div>
        </div>

        <div className="md:w-[100%] md:flex md:justify-center md:gap-2 md:mt-5 ">
          <ul className="md:w-[100%] md:h-[300px] md:bg-white md:rounded-xl ">
            <li className="md:p-5 md:grid md:grid-cols-1 md:gap-2">
              <h1 className="md:text-3xl md:font-bold md:font-serif">
                Best Selling
              </h1>
              <h1 className="md:text-3xl md:font-bold md:font-serif">
                Plants..
              </h1>
              <p className=" text-gray-400 font-medium">
                Easiest way to healthy life by buying your favorite plants
              </p>
              <button className=" md:bg-[#C1DCDC] md:hover:bg-red-400 md:flex md:items-center md:justify-center md:w-[55%] md:gap-2 md:text-xl md:font-medium md:p-2 rounded-2xl md:mt-6 md:active:bg-red-400/50 md:transition md:duration-[0.5s] md:ease-in-out ">
                See more
                <FaArrowRightLong className="md:text-black md:font-bold md:mt-[5px]" />
              </button>
            </li>
          </ul>

          <ul className="md:w-[100%] md:bg-white md:rounded-xl ">
            <li>
              <img
                src="src/assets/image 2.png"
                alt="image2"
                className="md:cursor-pointer"
              />
            </li>
            <p className="md:text-2xl md:font-serif md:pl-7 md:pt-3 ">
              Natural Plants
            </p>
            <p className="md:text-xl md:pl-7 md:pb-5">₱ 1,400.00</p>
          </ul>

          <ul className="md:w-[100%] md:bg-white md:rounded-xl ">
            <li>
              <img
                src="src/assets/image 3.png"
                alt="image3"
                className="md:cursor-pointer"
              />
            </li>
            <p className="md:text-2xl md:font-serif md:pl-7 md:pt-3 ">
              Artificial Plants
            </p>
            <p className="md:text-xl md:pl-7 md:pb-5">₱ 900.00</p>
          </ul>

          <ul className="md:w-[100%] md:bg-white md:rounded-xl ">
            <li>
              <img
                src="src/assets/image 4.png"
                alt="image4"
                className="md:cursor-pointer"
              />
            </li>
            <p className="md:text-2xl md:font-serif md:pl-7 md:pt-3 ">
              Artificial Plants
            </p>
            <p className="md:text-xl md:pl-7 md:pb-5">₱ 3,500.00</p>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HomePage;
