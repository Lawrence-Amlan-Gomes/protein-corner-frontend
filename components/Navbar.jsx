"use client";
import colors from "@/app/utils/colors";
import navItems from "@/app/utils/navItems";
import Image from "next/image";
import logo from "../public/Logo.png";
import cross from "../public/cross.png";
import menu from "../public/menu.png";
import Login from "./Login";
import NavItem from "./NavItem";
import Link from "next/link";
import { useEffect, useState } from "react";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    if (showMenu) {
      setTimeout(() => {
        setShowMenu(false);
      }, 5000);
    }
  }, [showMenu]);
  return (
    <div
      className={`h-[10%] w-full ralative z-50 border-[#bbbbbb] border-b-[1px]`}
    >
      <div
        className={`h-full w-full 
             ${colors.bgNav} ${colors.textNav}
       `}
      >
        <div className="h-full w-[40%] lg:w-[20%] lg:ml-[5%] float-left flex justify-center items-center">
          <div className="sm:w-[70px] sm:h-[30px] lg:w-full lg:h-[70%] w-[100px] h-[40px] sm:mr-5 relative">
            <Link href={"/"}>
              <Image
                src={logo}
                alt={"logo"}
                fill
                className="object-cover"
                objectPosition="left"
              />
            </Link>
          </div>
        </div>
        <div
          className={`h-full w-[20%] sm:hidden float-left flex justify-center items-center`}
        >
          <div
            className="relative h-[20px] w-[20px]"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <Image
              src={showMenu ? cross : menu}
              alt={"menu"}
              fill
              className="object-cover"
            />
          </div>{" "}
        </div>
        <div className="sm:h-full lg:w-[55%] h-0 w-0 sm:visible hidden font-semibold sm:flex items-center justify-center lg:gap-5 md:gap-4 sm:gap-3 float-left xl:text-[16px] lg:text-[13px] md:text-[11px] sm:text-[9px] text-[0px]">
          {navItems.map((i) => (
            <NavItem
              key={i.name}
              name={i.name}
              linkTo={i.linkTo}
              inNavBar={true}
              setShowMenu={setShowMenu}
            />
          ))}
        </div>
        <div className="h-full sm:w-[15%] w-[40%] sm:mr-[5%] flex items-center justify-center lg:gap-5 xl:gap-5 md:gap-4 sm:gap-3 gap-3 float-left lg:text-[16px]">
          <Login />
          <CartIcon />
        </div>
      </div>
      {showMenu ? (
        <div
          className={`h-[70px] pt-[20px] z-50 bg-opacity-100 absolute w-full sm:hidden font-semibold p-2 grid grid-cols-4 text-center 
            ${colors.bgNav} ${colors.textNav}

           border-t-[1px] border-b-[1px] border-zinc-500 sm:border-0 float-left text-[12px]`}
        >
          {navItems.map((i) => (
            <NavItem
              key={i.name}
              name={i.name}
              linkTo={i.linkTo}
              inNavBar={true}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
