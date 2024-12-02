import colors from "@/app/utils/colors";
import products from "@/app/utils/products";
import Footer from "./Footer";
import Link from "next/link";
import Star from "./Star";
import Image from "next/image";
import AddToCartCom from "./AddToCartCom";

export default function Product({ params }) {
  const { id } = params;
  let productObj = {};
  for (let i of products) {
    if (i.id == id) {
      productObj = { ...i };
    }
  }
  let currentPrice = productObj.price;
  if (productObj.discount != 0) {
    currentPrice = Math.round(
      productObj.price - (productObj.discount * productObj.price) / 100
    );
  }
  return (
    <div
      className={`h-full ${colors.bgBody} w-full flex justify-center items-center`}
    >
      <div
        className={`lg:h-[80%] lg:w-[80%] h-[90%] w-[90%] border-[1px] border-[#aaaaaa] rounded-lg`}
      >
        <div className={`lg:h-full lg:w-[50%] h-[40%] w-full float-left  flex justify-center items-center`}>
          <div className={`lg:h-[80%] lg:w-[80%] h-[90%] w-[90%] rounded-lg relative overflow-hidden`}>
            <Image
              src={productObj.image}
              alt={productObj.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div
          className={`lg:h-full lg:w-[50%] h-[60%] w-full lg:pr-10 float-left flex justify-center items-center`}
        >
          <div className="lg:w-full">
            <div className="lg:w-full text-center lg:text-[30px] font-bold">
              {productObj.name}
            </div>
            <div className="lg:w-full text-center lg:text-[20px] font-bold lg:mb-5 mb-3">
              {productObj.category}
            </div>
            <div
              className={`lg:w-full text-center lg:mb-[5%] lg:text-[18px] text-[15px] mb-[3%] ${colors.keyColorText}`}
            >
              {currentPrice} tk{" "}
              {productObj.discount != 0 ? (
                <span className="lg:ml-3 line-through text-[#888888]">
                  {productObj.price} tk
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="lg:w-full lg:text-[15px] text-[10px] px-[5%] mb-3 lg:mb-5 font-bold text-justify">
              {productObj.des}
            </div>
            <div className="flex justify-center items-center px-[15%]">
              <AddToCartCom product={productObj}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
