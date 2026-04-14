"use client";

import { useCart } from "@/app/contexts";
import { getProductById, products } from "@/app/utils/products";
import AddToCartCom from "@/components/AddToCartCom";
import PageLayout from "@/components/PageLayout";
import Star from "@/components/Star";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const product = getProductById(parseInt(params.id));
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-whitedark:text-white mb-4">
            Product not found
          </h1>
          <Link
            href="/shop"
            className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white bg-gray-800 border-b border-gray-200 dark:r-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-400 hover:text-orange-600"
              >
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link
                href="/shop"
                className="text-gray-600 dark:text-gray-400 hover:text-orange-600"
              >
                Shop
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 dark:text-whitedark:text-white">
                {product.name}
              </span>
            </nav>
          </div>
        </div>

        {/* Product Details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Product Image */}
            <div className="relative h-96 lg:h-[500px] bg-white bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-medium rounded-full mb-4">
                  {product.category}
                </span>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-whitedark:text-white mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  <Star rating={product.rating} />
                  <span className="text-gray-600 dark:text-gray-400">
                    ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {product.description}
              </p>

              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400">
                ${product.price.toFixed(2)}
              </div>

              <AddToCartCom
                onClick={() => addToCart(product)}
                className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 text-lg"
              >
                Add to Cart
              </AddToCartCom>

              {/* Product Features */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200 border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400">
                      ✓
                    </span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Fresh & Quality
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400">
                      ✓
                    </span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Fast Delivery
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400">
                      ✓
                    </span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Hygienic Packing
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400">
                      ✓
                    </span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Best Price
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-20"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-whitedark:text-white mb-8">
                Related Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    href={`/product/${relatedProduct.id}`}
                    className="bg-white bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-48 overflow-hidden bg-gray-100 bg-gray-700">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                        ${relatedProduct.price.toFixed(2)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
