import { useState } from "react";
import { useCart } from "../CartContext";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import menu from "../images/icon-menu.svg";
import close from "../images/icon-close.svg";
import Cart from "./Cart";

const Header = () => {
  const [activeNav, setActiveNav] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { cartItems } = useCart();
  const firstCartItem = cartItems[0];
  return (
    <header className="relative flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
      <div className="flex gap-8">
        <ul className="flex justify-start items-center gap-3">
          <li className="md:hidden">
            <img
              src={menu}
              alt=""
              className="cursor-pointer"
              onClick={() => setActiveNav(true)}
            />
          </li>
          <li>
            <img src={logo} alt="" />
          </li>
        </ul>

        <nav className={activeNav ? "nav open" : "nav"}>
          <button>
            <img
              src={close}
              alt=""
              className="w-6 md:hidden"
              onClick={() => setActiveNav(false)}
            />
          </button>
          {/* <ul className={`${activeNav ? "flex" : "hidden"}`}> */}
          <ul className="flex lg:flex-row">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-5">
          <li>
            <button onClick={() => setOpenCart(!openCart)} className="relative">
              <AiOutlineShoppingCart className="text-2xl text-slate-600 hover:text-orange-500" />
              {cartItems.length > 0 ? (
                <span className="absolute -top-1 -right-2 bg-orange-500 w-4 h-4 p-2  text-white rounded-[50%] text-[10px] flex justify-center items-center">
                  {firstCartItem.amount}
                </span>
              ) : (
                <span className="hidden">0</span>
              )}
            </button>
          </li>
          <li>{openCart && <Cart />}</li>
          <li>
            <img src={avatar} alt="" className="w-12 h-12" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
