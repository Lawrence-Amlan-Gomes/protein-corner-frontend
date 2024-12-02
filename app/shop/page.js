"use client";
import Shop from "@/components/Shop";
import ShopNav from "@/components/ShopNav";
import SideCart from "@/components/SideCart";
import colors from "../utils/colors";
import Footer from "@/components/Footer";

export default function ShopPage() {
  return (
    <div className={`overflow-y-auto overflow-x-hidden h-full w-full scrollbar-thin ${colors.scrollbar
    } scrollbar-track-[#e8e8e8]`}>
      <SideCart/>
      <ShopNav/>
      <Shop />
      <Footer/>
    </div>
  );
}
