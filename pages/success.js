import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper   bg-white min-h-[60vh]">
      <div className="success   w-[1000px] m-auto mt-40 bg-zinc-300 p-12 rounded-2xl flex justify-center items-center flex-col">
        <p className="icon  text-green-600 text-4xl ">
          <BsBagCheckFill />
        </p>
        <h2 className="capitalize mt-4 font-black text-4xl text-slate-600">Thank you for your order!</h2>
        <p className="email-msg  text-base font-semibold text-center ">Check your email inbox for the receipt.</p>
        <p className="description  text-base font-semibold items-center m-2.5 mt-7 ">
          If you have any questions, please email
          <a href="mailto:oolaoluwatobi@hotmail.com" className="email  ml-1.5 text-red-500 font-semibold ">
            ọlá@email.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn w-full max-w-[450px] px-10 py-3 my-5 mx-auto rounded-2xl border-none text-xl uppercase bg-red-500 font-bold text-white cursor-pointer hover:scale-110 duration-500">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
