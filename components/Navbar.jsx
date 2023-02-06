import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="w-full  flex justify-center">
      <div className="flex max-w-7xl w-full items-center justify-between ">
        <div className="flex  justify-between w-full px-10 my-4 relative  ">
          <p className="text-indigo-800 text-xl font-bold font-mono">
            <Link href="/">viBes gadgets</Link>
          </p>

          <button
            type="button"
            className="text-2xl text-gray-500 cursor-pointer relative border-none bg-transparent hover:scale-110"
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShopping />
            <span className="absolute -right-1 top-0.5 text-xs bg-red-500 text-gray-200 w-4 h-4 rounded-full text-center font-semibold">
              {totalQuantities}
            </span>
          </button>

          {showCart && <Cart />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
