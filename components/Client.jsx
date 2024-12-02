import { useCart } from "@/app/hooks/useCart.js";
import colors from "@/app/utils/colors";
import Footer from "./Footer";

export default function Client() {
  const { theme } = useCart();
  return (
    <div
      className={`h-full  overflow-y-auto ${colors.bgBody} ${colors.textBody1} scrollbar-thin scrollbar-thumb-[#008e14] scrollbar-track-[#e8e8e8]`}
    >
      <div className={`w-full h-full `}>
        <div
          className={`w-full lg:my-[65px] xl:my-[55px] md:my-[45px] sm:my-[25px] sm:pt-0 pt-[40px] my-[15px] text-center xl:text-[50px] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[23px] font-bold tracking-wider ${
            theme ? colors.textLightBody1 : colors.textDarkBody1
          }`}
        >
          Client
        </div>
      </div>
      <Footer marginTop={true} />
    </div>
  );
}
