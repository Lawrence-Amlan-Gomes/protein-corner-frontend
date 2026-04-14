"use client";

import { useCart } from "@/app/contexts";
import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PaymentPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      router.push("/");
      alert("Payment successful! Thank you for your order.");
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900  mb-4">
            Your cart is empty
          </h1>
          <button
            onClick={() => router.push("/shop")}
            className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Go to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900  mb-8">Checkout</h1>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-xl font-bold text-gray-900  mb-6">
                Order Summary
              </h2>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between py-3 border-b border-gray-200 border-gray-700"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 ">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600 text-gray-400">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <p className="font-bold text-gray-900 ">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 border-gray-700">
                <div className="flex justify-between items-center text-lg">
                  <span className="text-gray-600 text-gray-400">Subtotal</span>
                  <span className="font-bold text-gray-900 ">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-lg mt-2">
                  <span className="text-gray-600 text-gray-400">Delivery</span>
                  <span className="font-bold text-green-600">Free</span>
                </div>
                <div className="flex justify-between items-center text-2xl mt-4 pt-4 border-t border-gray-200 border-gray-700">
                  <span className="font-bold text-gray-900 ">Total</span>
                  <span className="font-bold text-orange-600">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Payment Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-xl font-bold text-gray-900  mb-6">
                Payment Details
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Card Information */}
                <div>
                  <h3 className="font-semibold text-gray-900  mb-4">
                    Card Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 text-gray-300 mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        required
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 text-gray-300 mb-2">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        name="cardName"
                        required
                        placeholder="John Doe"
                        value={formData.cardName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 text-gray-300 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          required
                          placeholder="MM/YY"
                          value={formData.expiryDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 text-gray-300 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          required
                          placeholder="123"
                          value={formData.cvv}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivery Address */}
                <div>
                  <h3 className="font-semibold text-gray-900  mb-4">
                    Delivery Address
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 text-gray-300 mb-2">
                        Street Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        required
                        placeholder="123 Main Street"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 text-gray-300 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          required
                          placeholder="New York"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 text-gray-300 mb-2">
                          ZIP Code
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          required
                          placeholder="12345"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  {isProcessing
                    ? "Processing..."
                    : `Pay $${cartTotal.toFixed(2)}`}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
