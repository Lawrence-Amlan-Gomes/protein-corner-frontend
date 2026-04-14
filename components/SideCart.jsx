"use client";

import { useCart } from "@/app/contexts";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SideCartItem from "./SideCartItem";

export default function SideCart() {
  const { cart, isCartOpen, setIsCartOpen, cartTotal, clearCart } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Image
                  src="/cross.png"
                  alt="Close"
                  width={24}
                  height={24}
                  className="text-gray-700"
                />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-24 h-24 mb-4">
                    <Image
                      src="/cart.png"
                      alt="Empty cart"
                      width={96}
                      height={96}
                      className="opacity-50"
                    />
                  </div>
                  <p className="text-gray-600 text-lg">Your cart is empty</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Add some products to get started
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {cart.map((item) => (
                    <SideCartItem key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-gray-200 p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-2xl font-bold text-gray-900">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>

                <Link
                  href="/payment"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full py-4 bg-orange-600 hover:bg-orange-700 text-white text-center font-semibold rounded-lg transition-colors duration-200"
                >
                  Proceed to Checkout
                </Link>

                <button
                  onClick={clearCart}
                  className="block w-full py-3 text-gray-600 hover:text-red-500 transition-colors duration-200"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
