"use client";
import colors from "@/app/utils/colors";
import Image from "next/image";
import Link from "next/link";
import loginDark from "../public/LoginDark.png";

function Login() {
  return (
    <div className="flex justify-center items-center">
      <div className="relative rounded-full lg:h-[30px] lg:w-[30px] md:w-[20px] md:h-[20px] sm:w-[15px] sm:h-[15px] h-[15px] w-[15px] float-left">
        <Image src={loginDark} alt={"logo"} fill className="object-cover" />
      </div>
      <div
        className={`float-left flex justify-center items-center lg:h-[30px] lg:text-[13px] md:text-[10px] sm:text-[10px] text-[10px] cursor-pointer hover:underline ${colors.textHoverNav}`}
      >
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
}
export default Login;
