import { useShoppingCart } from "../context/ShoppingCartContext";
import { useState, useEffect, useRef, useContext } from "react"


export const ShoppingCart = () => {
  const menuRef = useRef<HTMLDivElement>(null)
    // const [isOpen,setIsOpen] = useState<boolean>(true)
    const {isOpen,  closeCart } = useShoppingCart()

    // const {closeCart} = useShoppingCart()

//     useEffect(() => {
// document.addEventListener('click', (event: MouseEvent) => {
//         if (menuRef.current && (menuRef.current == event.target || event.composedPath().includes(menuRef.current))) {
//             return;
//         }

//         closeCart();
//     });
//     }, [])


  return (
    <div ref={menuRef} className={`fixed top-0 w-96  h-screen z-40 bg-sky-100 p-8 duration-300 ${isOpen ? 'right-0': '-right-96'}`} >
      <button onClick={() => closeCart()} className="absolute top-6 left-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h1 className="absolute top-6 right-6 font-semibold">Cart</h1>
    </div>
  );
};
