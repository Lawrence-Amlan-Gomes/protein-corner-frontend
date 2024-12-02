import Image from "next/image";
import colors from "@/app/utils/colors";
import { useCart } from "@/app/hooks/useCart";

export default function SideCartItem({ product }) {
  const { deleteFromCart, addToCart } = useCart();
  let currentPrice = product.price * product.quantity;
  if (product.discount != 0) {
    currentPrice = Math.round(
      product.price - (product.discount * currentPrice) / 100
    );
  }
  let currentPrice2 = product.price;
  if (product.discount != 0) {
    currentPrice2 = Math.round(
      product.price - (product.discount * currentPrice2) / 100
    );
  }
  return (
    <div
      className={`relative m-[2%] border-[1px] overflow-hidden border-[#888888] rounded-md w-[96%] h-[100px]`}
    >
      <div
        className={`h-[100px] w-[40%] pl-2 float-left flex justify-start items-center`}
      >
        <div className={`h-[80px] w-[80px] rounded-lg relative overflow-hidden`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className={`h-full w-[60%] float-left pt-[10px] text-[12px] lg:text-[14px] overflow-hidden`}>
        <div className="lg:pl-[10px] break-words overflow-hidden font-extrabold lg:pr-[10px] w-full">
          {`${product.name} (${product.quantity})`}
        </div>
        <div
          className={`lg:pl-[10px] ${colors.keyColorText2}`}
        >
          {currentPrice2} tk
        </div>
      </div>
      <div
        onClick={() => deleteFromCart(product)}
        className={`cursor-pointer float-left text-[30px] bottom-[10px] h-[25px] w-[25px] border-[1px] hover:border-red-600 border-[#aaaaaa] rounded-sm right-[40px] flex justify-center absolute items-center`}
      >
        -
      </div>
      <div
        onClick={() => addToCart(product)}
        className={`cursor-pointer float-left text-[20px] bottom-[10px] h-[25px] w-[25px] border-[1px] hover:border-green-600 border-[#aaaaaa] rounded-sm right-[10px] flex justify-center absolute items-center`}
      >
        +
      </div>
    </div>
  );
}
