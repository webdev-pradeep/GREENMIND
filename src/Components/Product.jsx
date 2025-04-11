import React from "react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    {
      id: 1,
      src: "public/assets/sliderImage1.jpeg",
      alt: "Image 1",
      // title: "Beautiful Landscape",
    },
    {
      id: 2,
      src: "public/assets/sliderImage2.jpg",
      alt: "Image 2",
      title: "City Skyline",
    },
    {
      id: 3,
      src: "public/assets/sliderImage3.jpeg",
      alt: "Image 3",
      title: "Mountain View",
    },
    {
      id: 4,
      src: "public/assets/sliderImage4.jpeg",
      alt: "Image 4",
      title: "Ocean Sunset",
    },
    {
      id: 5,
      src: "public/assets/PhotoRoom.webp",
      alt: "Image 4",
      title: "Ocean Sunset",
    },
  ];

  // Navigate to next slide
  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Navigate to previous slide
  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  // Jump to a specific slide
  const goToSlide = (index) => {
    if (!isTransitioning && currentIndex !== index) {
      setIsTransitioning(true);
      setCurrentIndex(index);
    }
  };

  // Reset transition state after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning]);

  return (
    <>
      <section className="mt-15">
        <div className="md:w-[100%] pt-5">
          <h1 className=" text-xl md:text-6xl text-center font-bold font-serif cursor-no-drop  rounded-lg overflow-hidden ">
            Flower Collections
          </h1>
          <p className=" md:text-xl text-center md:mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
          <p className="md:text-xl text-center md:mt-2">
            tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <ul className="w-[100%] h-[100%] p-2 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-7 md:mt-7 md:p-15 ">
            <li className="bg-gray-500/40 md:w-96 hover:-translate-y-1.5 transition-all duration-400 hover:shadow-2xl hover:shadow-gray-700 cursor-no-drop   rounded-lg  overflow-hidden ">
              <img
                src="public/assets/flowers1.jpg"
                className=" md:w-96 h-[350px] object-cover"
                alt="image1"
              />
              <h1 className="text-3xl text-center font-serif p-4">
                Pastel Collection
              </h1>
            </li>
            <li className="bg-gray-500/40 md:w-96  hover:-translate-y-1.5 transition-all duration-400 hover:shadow-2xl hover:shadow-gray-700  cursor-no-drop  rounded-lg overflow-hidden  ">
              <img
                src="public/assets/flowers2.jpg"
                className="md:w-96 h-[350px]  object-cover"
                alt="flowers2"
              />
              <h1 className="text-3xl text-center  font-serif p-4">
                Summer Collection
              </h1>
            </li>
            <li className="bg-gray-500/40 md:w-96  hover:-translate-y-1.5 transition-all duration-400 hover:shadow-2xl hover:shadow-gray-700  cursor-no-drop  rounded-lg overflow-hidden  ">
              <img
                src="public/assets/flowers3.jpg"
                className="w-[100%] md:w-96 h-[350px] object-cover "
                alt="flowers3"
              />
              <h1 className="text-3xl text-center  font-serif p-4">
                Best Sellers
              </h1>
            </li>
            <li className="bg-gray-500/40 md:w-96  hover:-translate-y-1.5 transition-all duration-400 hover:shadow-2xl hover:shadow-gray-700  cursor-no-drop  rounded-lg overflow-hidden  ">
              <img
                src="public/assets/flowers4.jpg"
                className="md:w-96 h-[350px] object-cover"
                alt="lowers4"
              />
              <h1 className="text-3xl  text-center  font-serif p-4">
                Pastel Collection
              </h1>
            </li>
            <li className="bg-gray-500/40 md:w-96  hover:-translate-y-1.5 transition-all duration-400 hover:shadow-2xl hover:shadow-gray-700  cursor-no-drop  rounded-lg overflow-hidden  ">
              <img
                src="public/assets/flowers5.jpg"
                className="md:w-96 h-[350px] object-cover"
                alt="flowers5"
              />
              <h1 className="text-3xl  text-center font-serif p-4">
                Flower Collections
              </h1>
            </li>
            <li className="bg-gray-500/40 md:w-96  hover:-translate-y-1.5 transition-all duration-400 hover:shadow-2xl hover:shadow-gray-700  cursor-no-drop  rounded-lg overflow-hidden   ">
              <img
                src="public/assets/flowers6.jpg"
                className="w-[100%] md:w-96 h-[350px] object-cover"
                alt="lowers6"
              />
              <h1 className="text-3xl text-center  font-serif p-4 ">
                Modern Collection
              </h1>
            </li>
          </ul>

          {/* slider */}

          <div className="relative w-full max-w-4xl mx-auto">
            {/* Main slider container */}
            <div className="relative overflow-hidden rounded-lg shadow-xl h-96">
              {/* Images container */}
              <div
                className="flex transition-transform duration-300 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image) => (
                  <div
                    key={image.id}
                    className="min-w-full h-full flex-shrink-0"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full  object-contain"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-4 text-white">
                      <h3 className="text-xl font-semibold">{image.title}</h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-200 focus:outline-none"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-200 focus:outline-none"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full focus:outline-none transition-all duration-200 ${
                    index === currentIndex
                      ? "bg-green-600 w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ------images-contact------ */}
          <div>
            <h1 className=" text-2xl underline  md:text-5xl  text-center font-serif mt-10 ">
              FLOWER,S
            </h1>
            <ul className="w-[100%]  grid grid-cols-1 gap-5 p-2 md:flex md:justify-center md:gap-4 md:p-10 ">
              <li>
                <img
                  src="public/assets/guldasta1.png"
                  alt="guldasta1"
                  className="w-[100%] h-[100%] md:h-96 md:w-96 object-contain bg-pink-500/30 rounded-2xl flex justify-center items-center transition-all duration-400 ease-in-out hover:scale-105 "
                />
              </li>
              <li>
                <img
                  src="public/assets/guldasta2.png"
                  alt="guldasta2"
                  className=" w-[100%] h-[100%]  md:h-96 md:w-96 object-contain bg-pink-500/30 rounded-2xl flex justify-center items-center transition-all duration-400 ease-in-out hover:scale-120"
                />
              </li>
              <li>
                <img
                  src="public/assets/guldasta3.png"
                  alt="guldasta3"
                  className=" w-[100%] h-[100%]  md:h-96 md:w-96 object-contain bg-pink-500/30 rounded-2xl flex justify-center items-center transition-all duration-400 ease-in-out hover:scale-105"
                />
              </li>
              <li>
                <img
                  src="public/assets/guldasta4.png"
                  alt="guldasta4"
                  className=" w-[100%] h-[100%]  md:h-96 md:w-96 object-contain bg-pink-500/30 rounded-2xl flex justify-center items-center transition-all duration-400 ease-in-out hover:scale-120"
                />
              </li>
            </ul>

            <ul className=" w-[100%] grid grid-cols-1 gap-5 p-2 md:flex md:justify-center md:gap-4 md:p-10 md:pt-5 ">
              <li>
                <img
                  src="public/assets/guldasta5.png"
                  alt="guldasta1"
                  className=" w-[100%] h-[100%] md:h-96 md:w-96 object-contain bg-pink-500/30 rounded-2xl flex justify-center items-center transition-all duration-400 ease-in-out hover:scale-105 "
                />
              </li>
              <li>
                <img
                  src="public/assets/guldasta6.png"
                  alt="guldasta2"
                  className="  w-[100%] h-[100%] md:h-96 md:w-96 object-contain bg-pink-500/30 rounded-2xl flex justify-center items-center transition-all duration-400 ease-in-out hover:scale-120"
                />
              </li>
              <li>
                <img
                  src="public/assets/guldasta7.png"
                  alt="guldasta3"
                  className=" w-[100%] h-[100%] md:h-96 md:w-96 object-contain bg-pink-500/30 rounded-2xl flex justify-center items-center transition-all duration-400 ease-in-out hover:scale-105"
                />
              </li>
              <li>
                <img
                  src="public/assets/guldasta8.png"
                  alt="guldasta4"
                  className=" w-[100%]  h-[100%] md:h-96 md:w-96 object-contain bg-pink-500/30 rounded-2xl flex justify-center items-center transition-all duration-400 ease-in-out hover:scale-120"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
