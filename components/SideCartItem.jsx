"use client";

import { useCart } from "@/app/contexts";
import Image from "next/image";

export default function SideCartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-200">
      <div className="relative w-20 h-20 flex-shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-gray-900 truncate">
          {item.name}
        </h4>
        <p className="text-orange-600 font-bold mt-1">
          ${item.price.toFixed(2)}
        </p>
      </div>

      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
          >
            -
          </button>
          <span className="w-8 text-center text-gray-900 font-medium">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
          >
            +
          </button>
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-xs text-red-500 hover:text-red-600 transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
