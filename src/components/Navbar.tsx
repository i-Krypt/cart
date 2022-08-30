import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <div className="sticky top-0 bg-slate-400 mb-4 p-4 flex justify-between lg:px-8">
      <div className="flex items-center space-x-4">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Store">Store</Link>
      </div>
      {cartQuantity > 0 && (
        <div
          className="py-2 px-2 rounded-full bg-sky-500 relative"
          onClick={openCart}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </span>
          <div
            className="rounded-full bg-red-700 flex justify-center items-center absolute w-4 h-4 bottom-0 right-0"
            style={{ transform: "translate(25%,25%)" }}
          >
            {cartQuantity}
          </div>
        </div>
      )}
    </div>
  );
};
