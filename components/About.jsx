import { useCart } from "@/app/hooks/useCart.js";
import colors from "@/app/utils/colors";
import Footer from "./Footer";

export default function About() {
  const { theme } = useCart();
  
  return (
    <div
      className={`h-full  overflow-y-auto ${colors.bgBody} ${colors.textBody1} scrollbar-thin scrollbar-thumb-[#008e14] scrollbar-track-[#e8e8e8]`}
    >
      <div className={`w-full h-full overflow-hidden px-10`}>
        <div
          className={`w-full lg:my-[65px] xl:my-[55px] md:my-[45px] sm:my-[25px] sm:pt-0 pt-[40px] my-[15px] text-center xl:text-[50px] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[23px] font-bold tracking-wider ${
            theme ? colors.textLightBody1 : colors.textDarkBody1
          }`}
        >
          About
        </div>
        {/* <div
          className={`w-full overflow-x-hidden sm:pt-0 pt-[40px] my-[15px] text-justify xl:text-[25px] lg:text-[20px] md:text-[15px] sm:text-[12px] text-[10px] font-bold tracking-wider ${
            theme ? colors.textLightBody1 : colors.textDarkBody1
          }`}
        >
          At Utes, we are dedicated to transforming businesses through innovative IT solutions. With a team of experienced professionals, we specialize in software development, cloud services, and cybersecurity. Our mission is to empower organizations to harness the power of technology, enhancing efficiency and driving growth. We pride ourselves on our customer-centric approach, tailoring solutions to meet the unique needs of each client. Committed to excellence and continuous improvement, we stay at the forefront of industry trends to deliver cutting-edge services. Partner with us to navigate the digital landscape and achieve your business goals with confidence.

        </div> */}
      </div>
      <Footer marginTop={true} />
    </div>
  );
}
