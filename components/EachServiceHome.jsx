"use client";
import { useCart } from "@/app/hooks/useCart";
import Image from "next/image";

function EachServiceHome({ name, image, colorBg, colorText }) {
  const { theme } = useCart();
  return (
    <div
      className={`lg:h-[300px] h-[250px] sm:h-[350px] sm:w-[48%] lg:w-[23%] w-[96%] ${
        theme ? colorBg[0] : colorBg[1]
      } float-left sm:m-[1%] m-[2%] rounded-2xl overflow-hidden relative`}
    >
      <div
        className={`hover:cursor-pointer w-full lg:h-[40%] h-[30%] sm:h-[30%] pt-[5%] ${
          theme ? colorText[0] : colorText[1]
        } flex items-center text-center justify-center px-[10%] xl:text-[28px] lg:text-[25px] md:text-[30px] sm:text-[20px] text-[15px] font-bold tracking-wider break-words`}
      >
        {name}
      </div>
      <div className="w-full lg:h-[60%] sm:h-[70%] h-[70%] flex justify-center items-center">
        <div className={`h-[80%] w-[80%] rounded-lg relative overflow-hidden`}>
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
export default EachServiceHome;
