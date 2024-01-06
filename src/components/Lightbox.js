import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import close from "../images/icon-close.svg";

const Lightbox = ({
  products,
  slideIndex,
  nextSlide,
  prevSlide,
  setShowLightbox,
}) => {
  return (
    <div
      id="lightbox"
      className="bg-black bg-opacity-80 fixed top-0 right-0 left-0 bottom-0 z-50 "
    >
      <button onClick={() => setShowLightbox(false)}>
        <img src={close} alt="" className="w-8 absolute top-10 right-10" />
      </button>
      <div className="flex items-center justify-center h-screen">
        {products?.map((item, index) => (
          <div
            key={index}
            className={`${
              slideIndex === index ? "relative" : "hidden"
            } md:w-1/2 lg:w-[40%]`}
          >
            <img
              src={item.mainImage}
              alt=""
              className="lg:h-1/2 md:rounded-xl"
            />

            <ul>
              <li>
                <button
                  onClick={prevSlide}
                  className="bg-white rounded-full p-5 shadow absolute left-4 top-1/2 -translate-y-1/2"
                >
                  <FaChevronLeft />
                </button>
              </li>
              <li>
                <button
                  onClick={nextSlide}
                  className="bg-white rounded-full p-5 shadow absolute right-4 top-1/2 -translate-y-1/2"
                >
                  <FaChevronRight />
                </button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lightbox;
