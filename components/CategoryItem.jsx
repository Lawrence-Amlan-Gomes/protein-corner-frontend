"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CategoryItem({ category, isActive }) {
  return (
    <Link href={`/shop?category=${category.id}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex flex-col items-center justify-center p-6 rounded-xl cursor-pointer transition-all duration-200 ${
          isActive
            ? "bg-orange-600 text-white shadow-lg"
            : "bg-white text-gray-900 hover:bg-gray-50 shadow-md"
        }`}
      >
        <span className="text-4xl mb-2">{category.icon}</span>
        <span className="font-semibold">{category.name}</span>
      </motion.div>
    </Link>
  );
}
