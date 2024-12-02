import { useCart } from "@/app/hooks/useCart";
import cart from "../public/cart.png";
import Image from "next/image";
import colors from "@/app/utils/colors";
export default function AddToCartCom({ product }) {
  const { addToCart } = useCart();
  return (
    <div
      onClick={() => addToCart(product)}
      className={`relative ${colors.keyColorBox} ${colors.keyColorBoxHover} cursor-pointer rounded-md overflow-hidden lg:h-[60px] lg:w-[90%] mx-5 md:w-[20px] md:h-[20px] sm:w-[15px] sm:h-[15px] h-[60px] w-[90%] float-left flex justify-center items-center`}
    >
      <div className="h-[50px] w-[50px] relative">
        <Image src={cart} alt={"cart"} fill className="object-cover" />
      </div>
      <div className="text-white lg:text-[20px]">Add to cart</div>
    </div>
  );
}
