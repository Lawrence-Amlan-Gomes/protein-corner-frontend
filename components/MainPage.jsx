import colors from "@/app/utils/colors";
import Hero from "./Hero";
import Footer from "./Footer";
import { useCart } from "@/app/hooks/useCart";
import SideCart from "./SideCart";
import Shop from "./Shop";
import { useCategory } from "@/app/hooks/useCategory";
import ShopNav from "./ShopNav";
export default function MainPage() {
  const { isCart, setIsCart, cartProducts, setCartProducts } = useCart()
  console.log("mainpage");
  return (
    <div className={`h-full w-full overflow-hidden`}>
      <SideCart />
      <div
        className={`h-full w-full z-0 overflow-y-auto overflow-x-hidden ${colors.textBody1} scrollbar-thin ${colors.scrollbar} scrollbar-track-[#e8e8e8]
      `}
      >
        <Hero />
        {/* <ServiceHome/>
      <SolutionHome/> */}
        <ShopNav/>
        <Shop />
        {/* <SupportHome/> */}
        <Footer/>
      </div>
    </div>
  );
}
