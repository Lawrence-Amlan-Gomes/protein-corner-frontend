"use client";
import colors from "@/app/utils/colors";
import Footer from "./Footer";
import Link from "next/link";
import Image from "next/image";
import cross from "../public/cross.png";
import { useCart } from "@/app/hooks/useCart";
import { useEffect, useState } from "react";
import SideCartItem from "./SideCartItem";

export default function Payment() {
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
  },[cartProducts]);
  return (
    <div className={`h-full w-full`}>
      <div className={`w-full h-full ${colors.bgBody} ${colors.textBody1}`}>
        <div
          className={`lg:w-[60%] w-full overflow-y-auto float-left lg:my-[65px] xl:my-[55px] md:my-[45px] sm:my-[25px] sm:pt-0 pt-[40px] my-[15px] text-center xl:text-[50px] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[23px] font-bold tracking-wider ${colors.textLightBody1} scrollbar-thin scrollbar-thumb-[#008e14] scrollbar-track-[#e8e8e8]`}
        >
          Payment
        </div>
        <div className={`lg:w-[40%] w-0 sm:opacity-100 opacity-0 h-full float-left`}>
          <div
            className={`h-full w-full z-20 border-[#888888] border-l-[2px]`}
          >
            <div
              className={`w-full h-[10%] lg:text-[25px] text-[20px] float-left flex justify-center items-center`}
            >
              Cart
            </div>
            {cartProducts.length == 0 ? (
              <div className="w-full h-[80%] lg:text-[20px] float-left flex justify-center items-center">
                Cart is empty
              </div>
            ) : (
              <div
              className={`w-full p-[2%] h-[80%] scrollbar-thin scrollbar-thumb-[#008e14] scrollbar-track-[#e8e8e8] overflow-y-auto overflow-x-hidden`}
            >
              {cartProducts.map((p) => (
                <SideCartItem key={p.id} product={p} />
              ))}
            </div>
            )}
            
            <div
              className={`w-full h-[10%] flex justify-center items-center`}
            >{`Total ${total} tk`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
