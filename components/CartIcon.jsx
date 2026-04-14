"use client";

import { useCart } from "@/app/contexts";
import Image from "next/image";

export default function CartIcon({ count }) {
  const { setIsCartOpen } = useCart();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative p-2 rounded-full hover:bg-gray-100  transition-colors duration-200"
      aria-label="Open cart"
    >
      <Image
        src="/cart.png"
        alt="Cart"
        width={24}
        height={24}
        className="text-gray-700"
      />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  );
}
