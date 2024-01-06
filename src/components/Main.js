import { useState } from "react";
import { useCart } from "../CartContext";

import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Main = ({
  products,
  slideIndex,
  setSlideIndex,
  nextSlide,
  prevSlide,
  setShowLightbox,
}) => {
  const [amount, setAmount] = useState(1);
  const [activeThumbnail, setActiveThumbnail] = useState(0);

  const mainItem = {
    company: "Sneaker Company",
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 125.0, // Assuming the original price is $125.00
    discount: 50, // Assuming a 50% discount
    quantity: 1, // Initial quantity
  };

  const selectThumbnail = (index) => {
    setActiveThumbnail(index);
    setSlideIndex(index);
  };

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const item = {
      mainItem,
      amount,
    };
    addToCart(item);
    // Optionally, you can reset the amount or show a success message
    setAmount(1);
  };

  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:mt-10 lg:py-10 lg:place-items-center">
      {/* content on the left */}
      <article>
        <div>
          {products?.map((item, index) => (
            <div
              key={index}
              className={slideIndex === index ? "relative" : "hidden"}
            >
              <img
                src={item.mainImage}
                alt=""
                className="w-full md:rounded-xl"
                onClick={() => setShowLightbox(true)}
              />

              <ul className="md:hidden">
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

        <ul className="hidden md:flex items-center justify-start gap-5 flex-wrap mt-5">
          {products?.map((item, index) => (
            <li
              key={item.id}
              onClick={() => selectThumbnail(index)}
              className={`${
                index === activeThumbnail &&
                "border-2 border-orange-400 opacity-80"
              } rounded-2xl border-2 overflow-hidden cursor-pointer`}
            >
              <img src={item.thumbnail} alt="" className="w-20" />
            </li>
          ))}
        </ul>
      </article>

      {/* content on the right */}
      <article className="px-8 pb-10">
        <h2 className="bg-slate-100 py-1 px-2 text-orange-400 uppercase tracking-wide text-sm font-bold inline-block shadow mb-10">
          {mainItem.company}
        </h2>
        <h1 className="text-slate-900 mb-10 font-bold text-2xl lg:text-3xl">
          {mainItem.name}
        </h1>
        <p className="text-slate-600 mb-10 leading-relaxed">
          {mainItem.description}
        </p>
        <div className="flex flex-wrap justify-between md:flex-col items-center md:items-start">
          <ul className="flex items-center gap-5">
            <li className="text-slate-900 font-bold text-2xl">
              ${amount === 1 ? "125.00" : (125.0 * amount).toFixed(2)}
            </li>
            <li className="bg-orange-100 py-1 px-2 text-orange-400 tracking-wide text-sm rounded font-bold inline-block shadow">
              {mainItem.discount}%
            </li>
          </ul>
          <p className="text-slate-600 text-sm">
            <s>$250.00</s>
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 mt-10">
          <ul className="flex items-center justify-between bg-slate-100 rounded-lg cursor-pointer shadow w-full md:w-auto">
            <li>
              <div
                onClick={() => setAmount((prev) => Math.max(prev - 1, 0))}
                className={`${
                  amount === 0 ? "opacity-20" : "opacity-1"
                } px-7 py-5`}
                style={{ userSelect: "none" }}
              >
                <img src={minus} alt="" />
              </div>
            </li>
            <li className="px-4">{amount}</li>
            <li
              onClick={() => setAmount((prev) => prev + 1)}
              className="px-7 py-5"
              style={{ userSelect: "none" }}
            >
              <img src={plus} alt="" />{" "}
            </li>
          </ul>

          <button
            onClick={handleAddToCart}
            className="flex justify-center items-center gap-4 bg-orange-500 text-white px-14 py-3 rounded-xl leading-7 w-full md:w-auto flex-1 hover:bg-orange-600 duration-200 transition-all"
          >
            <AiOutlineShoppingCart className="text-xl" /> Add to cart
          </button>
        </div>
      </article>
    </section>
  );
};

export default Main;
