import colors from "@/app/utils/colors";
import Image from "next/image";
import Link from "next/link";
import cart from "../public/cart.png";
import eye from "../public/eye.png";
import AddToCartCom from "./AddToCartCom";
import { useCategory } from "@/app/hooks/useCategory";

function EachProduct({ product }) {
  const { category } = useCategory();
  let currentPrice = product.price;
  if (product.discount != 0) {
    currentPrice = Math.round(
      product.price - (product.discount * product.price) / 100
    );
  }
  return (
    <>
      {product.category == category || category == "All" ? (
        <div
          className={`hover:shadow-lg border-[1px] border-[#aaaaaa] lg:h-[500px] h-[450px] w-[96%] lg:w-[23%] bg-[#ffffff] float-left lg:m-[1%] m-[2%] rounded-md overflow-hidden relative`}
        >
          <div className={`w-full lg:h-[250px] h-[250px] float-left`}>
            <div
              className={`absolute z-10 mt-5 ml-5 w-[25%] h-[30px] ${
                product.discount != 0 ? "visible" : "hidden"
              } rounded-md text-white flex justify-center items-center font-bold ${
                colors.keyColorBox2
              }`}
            >
              {product.discount != 0 ? `-${product.discount}%` : <></>}
            </div>
            <div
              className={`lg:h-full h-[90%] lg:w-full w-[70%] lg:ml-0 ml-[15%] lg:mt-0 mt-[5%] relative flex justify-center items-center overflow-hidden`}
            >
              <Link href={`/product/${product.id}`}>
                <div className="h-[200px] w-[200px] relative">
                  <Image
                    sizes="full"
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div
            className={`w-full lg:h-[250px] h-[200px] border-t-[1px] float-left flex justify-center items-start pt-[5%]`}
          >
            <div className="w-full">
              <Link href={`/product/${product.id}`}>
                <div className={`w-full text-center my-[2%] lg:text-[25px] font-extrabold text-[20px]`}>
                  {product.name}
                </div>{" "}
              </Link>
              <div
                className={`w-full text-center mb-[10px] lg:text-[18px] ${colors.keyColorText2}`}
              >
                {currentPrice} tk{" "}
                {product.discount != 0 ? (
                  <span className="ml-3 line-through text-[#888888]">
                    {product.price} tk
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className={`flex absolute bottom-0 mb-5 justify-center items-center w-full`}>
                <AddToCartCom product={product} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
export default EachProduct;
