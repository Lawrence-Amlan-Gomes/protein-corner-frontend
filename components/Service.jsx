import { useCart } from "@/app/hooks/useCart.js";
import colors from "@/app/utils/colors";
import services from "@/app/utils/services";
import Footer from "./Footer";

export default function Service() {
  const { theme } = useCart();
  return (
    <div
      className={`h-full w-full pt-[40px] overflow-x-hidden overflow-y-auto ${
        theme
          ? `${colors.bgLightBody} ${colors.textLightBody1} scrollbar-thin scrollbar-thumb-[#fb471e] scrollbar-track-[#c5c8d0]`
          : `${colors.bgDarkBody} ${colors.textDarkBody1} scrollbar-thin scrollbar-thumb-[#fb471e] scrollbar-track-[#0c0e10]`
      }`}
    >
      <div
        className={`w-full lg:my-[40px] xl:my-[45px] md:my-[35px] sm:my-[27px] my-[15px] text-center xl:text-[50px] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[23px] font-bold tracking-wider ${
          theme ? colors.textLightBody1 : colors.textDarkBody1
        }`}
      >
        Services
      </div>
      <Footer />
    </div>
  );
}
