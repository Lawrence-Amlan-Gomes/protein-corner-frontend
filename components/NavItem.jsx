import colors from "@/app/utils/colors";
import Link from "next/link";

export default function NavItem({ name, linkTo, inNavBar, setShowMenu }) {
  return (
    <Link href={linkTo} onClick={() => setShowMenu(false)}>
      <div
        className={`cursor-pointer felx justify-center items-center ${
          inNavBar ? colors.textHoverNav2 : "hover:text-black text-[#222222]"
        }`}
      >
        {name}
      </div>
    </Link>
  );
}
