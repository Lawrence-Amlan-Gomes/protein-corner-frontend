"use client";

import { useCart } from "@/app/contexts";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AddToCartCom from "./AddToCartCom";
import Star from "./Star";

export default function EachProduct({ product }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs px-2 py-1 rounded-full">
            {product.category}
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-orange-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center mb-3">
          <Star rating={product.rating} />
          <span className="text-sm text-gray-500 ml-2">
            ({product.reviews})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-orange-600">
            ${product.price.toFixed(2)}
          </span>
          <AddToCartCom
            onClick={() => addToCart(product)}
            className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
          >
            Add to Cart
          </AddToCartCom>
        </div>
      </div>
    </motion.div>
  );
}
