"use client";
import Image from "next/image";
import colors from "@/app/utils/colors";
import Link from "next/link";

function Hero() {
  return (
    <div className="h-full w-full overflow-hidden relative">
      {/* Without BackGrounVideo */}
      {/* <div className="h-full w-full overflow-hidden bg-transparent z-10 relative">
        <div
          className={`w-full h-full flex justify-center items-center float-left`}
        >
          <div
            className={`w-[90%] ml-[5%] mr-[5%] lg:w-[80%] lg:ml-[10%] lg:mr-[10%] `}
          >
            <div
              className={`lg:text-[45px] xl:text-[50px] text-[20px] text-center w-full break-words font-extrabold lg:mb-5 xl:mb-5 mb-5 ${colors.textBody1}`}
            >
              Your Trusted Source for Processed Chicken, Meat, and Eggs
            </div>
            <div
              className={`lg:text-[20px] xl:text-[22px] text-[10px] text-center w-full break-words font-extrabold lg:mb-10 mb-7 ${colors.textBody2}`}
            >
              Enjoy the finest selection of ready-to-cook chicken, meats, and
              eggs for quick, healthy meals. Quality you can taste, delivered
              straight to your kitchen.
            </div>
            <div className="w-full flex justify-center items-center ">
              <Link href="/shop">
                <button
                  className={`float-left ${colors.keyColorBox} ${colors.textBody3} sm:py-2 sm:px-4 px-2 py-1 rounded-md sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] text-[12px] mr-5`}
                >
                  Enter Shop
                </button>
              </Link>
              <Link href="/contact">
                <button
                  className={`float-left border ml-5  ${colors.textBody2} ${colors.border} ${colors.textHoverNav} sm:py-2 sm:px-4 px-2 py-1 rounded-md sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] text-[12px]`}
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      {/* With BackGrounVideo */}
      <div className="h-full w-full overflow-hidden z-10 relative">
        <div className={`w-full h-full float-left`}>
          <div
            className={`w-[90%] lg:h-[70%] h-[60%] float-left ml-[5%] mr-[5%] flex justify-center items-center lg:w-[80%] lg:ml-[10%] lg:mr-[10%] `}
          >
            <div className="w-full">
              <div
                className={`lg:text-[45px] xl:text-[50px] text-[20px] text-center w-full break-words font-extrabold lg:mb-5 xl:mb-5 mb-5 text-white`}
              >
                {/* Text Top of the video  */}
              </div>
            </div>
          </div>
          <div className="w-[50%] lg:h-[30%] h-[40%] float-left flex justify-start items-end pb-[10%] pl-[10%]">
            <Link href="/shop">
              <button
                className={`${colors.keyColorBox} ${colors.textBody3} ${colors.keyColorBoxHover} border-[1px] border-white sm:py-2 sm:px-4 px-2 py-1 rounded-md sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] text-[12px] mr-5`}
              >
                Enter Shop
              </button>
            </Link>
          </div>
          <div className="w-[50%] lg:h-[30%] h-[40%] float-left flex justify-end items-end pb-[10%] pr-[10%]">
            <Link href="/contact">
              <button
                className={`float-left border ml-5  ${colors.keyColorBox2} ${colors.textBody3} ${colors.keyColorBoxHover2} sm:py-2 sm:px-4 px-2 py-1 rounded-md sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] text-[12px]`}
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-full w-full absolute inset-0 bg-red-500 bg-cover bg-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/protine1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Hero;
