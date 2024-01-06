import thumbnail from "../images/image-product-1-thumbnail.jpg";
import icondelete from "../images/icon-delete.svg";

const Cart = () => {
  const text = "Autumn Limited Edition Sneakers";
  return (
    <article
      className="bg-white rounded-2xl shadow-2xl p-8 absolute right-8 left-8 top-32 lg:w-96 lg:left-auto lg:top-20"
      style={{ zIndex: 1000 }}
    >
      <h2 className="border-b border-slate-400">Cart</h2>
      <div className="flex items-center justify-between gap-2 py-5">
        <img src={thumbnail} alt="" className="w-14 rounded-lg" />
        <ul>
          <li className="text-slate-600 text-sm">{`${text.substring(
            0,
            23
          )}...`}</li>
          <li className="text-slate-600 text-sm">
            $125.00 x 3{" "}
            <span className="text-slate-900 font-bold">$375.00</span>
          </li>
        </ul>
        <button>
          <img src={icondelete} alt="" />
        </button>
      </div>
      <button className="bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full hover:bg-orange-600">
        Checkout
      </button>
    </article>
  );
};

export default Cart;
