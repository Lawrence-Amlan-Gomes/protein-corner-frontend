"use client";
import colors from "@/app/utils/colors";
import navItems from "@/app/utils/navItems";
import gmailIcon from "../public/gmailIcon.png";
import gmailIconWhite from "../public/gmailIconWhite.png";
import gmailIconBlack from "../public/gmailIconBlack.png";
import fbIcon from "../public/fbIcon.png";
import fbIconWhite from "../public/fbIconWhite.png";
import fbIconBlack from "../public/fbIconBlack.png";
import Image from "next/image";
import NavItem from "./NavItem";
import { useState } from "react";
import FooterItems from "./FooterItems";

export default function Footer() {
  const [gmailIn, setGmailIn] = useState(false);
  const [fbIn, setFbIn] = useState(false);
  return (
    <div
      className={`${colors.bgBody} border-t-[1px] border-[#888888] lg:h-[500px] overflow-hidden`}
    >
      <div className="w-full h-[80%] px-5 float-left">
        <div className="lg:h-full lg:w-[25%] w-full lg:border-t-0 border-t-[1px] border-t-[#aaaaaa] float-left px-5">
          <div className="w-full flex justify-center items-center lg:h-[80px] h-[50px] font-bold lg:text-[25px] text-[16px] mt-5">
            Ehsan Agro
          </div>
          <FooterItems
            name="Discover High-Quality Seeds, Tools, and Farming Solutions to Boost
            Your Agricultural Success."
            linkTo="/"
          />
          <FooterItems name="Dhaka, Bangladesh" linkTo="/" />
          <FooterItems name="0181XXXXXXX" linkTo="/" />
          <FooterItems name="agrofarm@gmail.com" linkTo="/" />
        </div>
        <div className="lg:h-full lg:w-[25%] w-full lg:border-t-0 border-t-[1px] border-t-[#aaaaaa] float-left px-5">
          <div className="w-full flex justify-center items-center lg:h-[80px] h-[50px] font-bold lg:text-[25px] text-[16px] mt-5">
            Company
          </div>
          <FooterItems name="Shop" linkTo="/shop" />
          <FooterItems name="Blog" linkTo="/" />
          <FooterItems name="About" linkTo="/" />
          <FooterItems name="Clients" linkTo="/clients" />
          <FooterItems name="Payment" linkTo="/payment" />
        </div>
        <div className="lg:h-full lg:w-[25%] w-full lg:border-t-0 border-t-[1px] border-t-[#aaaaaa] float-left px-5">
          <div className="w-full flex justify-center items-center lg:h-[80px] h-[50px] font-bold lg:text-[25px] text-[16px] mt-5">
            Services
          </div>
          <FooterItems name="Order Tracking" linkTo="/" />
          <FooterItems name="Wishlist" linkTo="/" />
          <FooterItems name="Login" linkTo="/login" />
          <FooterItems name="My Account" linkTo="/" />
          <FooterItems name="Terms of Services" linkTo="/" />
        </div>
        <div className="lg:h-full lg:w-[25%] w-full lg:border-t-0 border-t-[1px] border-t-[#aaaaaa] float-left px-5">
          <div className="w-full flex justify-center items-center lg:h-[80px] h-[50px] font-bold lg:text-[25px] text-[16px] mt-5">
            Newsletter
          </div>
          <FooterItems name="Subscribe to our weekly Newsletter and receive updates via email." linkTo="/" />
          <FooterItems name="Contact US" linkTo="/contact" />
        </div>
      </div>
      <div
        className={`${colors.keyColorBox2} w-full lg:h-[20%] h-[50px] float-left flex justify-center text-white items-center lg:text-[20px] text-[10px]`}
      >
        Copyright <span className="font-bold mx-2">© Agro Farm</span>All Right
        Reserved.
      </div>
    </div>
  );
}
