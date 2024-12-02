import colors from "@/app/utils/colors";
import Footer from "./Footer";
import products from "@/app/utils/products";
import EachProduct from "./EachProduct";
import CategoryItem from "./CategoryItem";
import { useEffect, useState } from "react";
import SideCart from "./SideCart";

export default function Shop() {
  const [maxArr, setMaxArr] = useState([]);
  return (
    <div
      className={`w-full overflow-hidden ${colors.textBody1} lg:p-[1%] p-[2%] bg-[#ebebeb] w-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#008e14] scrollbar-track-[#e8e8e8]`}
    >
      <div className={`w-full overflow-hidden`}>
        <div className={`w-full h-full`}>
          {products.map((i) => (
            <EachProduct key={i.id} product={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
