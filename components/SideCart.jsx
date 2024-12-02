"use client";
import colors from "@/app/utils/colors";
import Link from "next/link";
import Image from "next/image";
import cross from "../public/cross.png";
import { useCart } from "@/app/hooks/useCart";
import { useEffect, useState } from "react";
import SideCartItem from "./SideCartItem";
export default function SideCart() {
  const { isCart, setIsCart, cartProducts, setCartProducts } = useCart();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let t = 0;
    for (let i of cartProducts) {
      let currentPrice = i.price * i.quantity;
      if (i.discount != 0) {
        currentPrice = Math.round(
          i.price * i.quantity - (i.discount * currentPrice) / 100
        );
      }
      t += currentPrice;
    }
    setTotal(t);
  }, [cartProducts]);
  return (
    <>
      {isCart ? (
        <div className="w-full h-full absolute z-40 top-[9.9%]">
          <div
            onClick={() => setIsCart(false)}
            className={`sm:h-full sm:w-[70%] w-0 bg-black opacity-40 float-left`}
          ></div>
          <div
            className={`h-full sm:w-[30%] w-full  bg-[#eeeeee] border-[#888888] border-l-[2px] float-left`}
          >
            <div
              className={`w-[50%] h-[10%] float-left flex justify-center items-center text-[20px]`}
            >
              Cart
            </div>
            <div className="w-[50%] h-[10%] float-left flex justify-center items-center">
              <div
                onClick={() => setIsCart(false)}
                className={`h-[30px] w-[30px] border-[1px] hover:border-red-600 border-[#aaaaaa] rounded-sm right-[10px] flex justify-center items-center`}
              >
                <div className={`h-[20px] w-[20px] relative overflow-hidden`}>
                  <Image
                    src={cross}
                    alt="cross"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {cartProducts.length == 0 ? (
              <div className="w-full h-[70%] float-left flex justify-center items-center">
                Cart is empty
              </div>
            ) : (
              <div
                className={`w-full p-[2%] h-[70%] scrollbar-thin ${colors.scrollbar} scrollbar-track-[#e8e8e8] overflow-y-auto overflow-x-hidden`}
              >
                {cartProducts.map((p) => (
                  <SideCartItem key={p.id} product={p} />
                ))}
              </div>
            )}
            <Link href="/payment">
              <div
                className={`w-full h-[10%] p-[4%] flex justify-center items-center`}
              >
                <div
                  className={`${colors.keyColorBox} ${colors.keyColorBoxHover} flex justify-center items-center text-white lg:text-[20px] h-full w-full rounded-md `}
                >{`Check Out ${total} tk`}</div>
              </div>
            </Link>
            {/* <div className={`w-full  h-[12%] flex justify-center items-center`}>
             
              <Link href="/payment">
                <button
                  className={`float-left border ml-2 ${colors.textBody2} ${colors.border} ${colors.textHoverNav} sm:py-2 sm:px-4 px-2 py-1 rounded-md sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] text-[12px]`}
                >
                  Check Out
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
