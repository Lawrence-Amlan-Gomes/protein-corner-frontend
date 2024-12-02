import Link from "next/link";
export default function FooterItem({ name, linkTo }) {
  return (
    <Link href={linkTo}>
      <div className="w-full flex justify-center items-center text-center lg:mb-5 mb-5 lg:text-[16px] text-[14px]">
        {name}
      </div>
    </Link>
  );
}
