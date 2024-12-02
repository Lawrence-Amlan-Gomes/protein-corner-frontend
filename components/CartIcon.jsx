"use client";
import Image from "next/image";
import cart from "../public/cart.png";
import { useCart } from "@/app/hooks/useCart";
import colors from "@/app/utils/colors";

export default function CartIcon() {
  const { isCart, setIsCart, cartProducts, setCartProducts } = useCart();
  let l = 0;
  for ( let i of cartProducts){
    l += i.quantity
  }
  return (
    <div
      className={`lg:h-[40px] lg:w-[40px] md:w-[20px] md:h-[20px] sm:w-[15px] relative sm:h-[15px] h-[30px] w-[30px] float-left`}
    >
      <div className="absolute z-10 lg:h-[20px] lg:w-[20px] h-[15px] w-[15px] lg:text-[14px] text-[11px] top-[-25%] right-[-25%] bg-[#bbbbbb] rounded-full flex justify-center items-center text-black">
        {l}
      </div>
      <div
        onClick={() => setIsCart((prev) => !prev)}
        className={`relative rounded-md overflow-hidden h-full w-full ${colors.keyColorBox2}`}
      >
        <Image src={cart} alt={"cart"} fill className="object-cover" />
      </div>
    </div>
  );
}
