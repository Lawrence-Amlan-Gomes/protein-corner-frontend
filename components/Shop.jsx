"use client";

import {
  categories,
  getProductsByCategory,
  products,
} from "@/app/utils/products";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import EachProduct from "./EachProduct";

export default function Shop() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "all",
  );

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : getProductsByCategory(selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse our wide selection of premium quality protein products. From
          fresh chicken to organic eggs, we have everything you need for healthy
          meals.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              selectedCategory === "all"
                ? "bg-orange-600 text-white shadow-lg"
                : "bg-white text-gray-900 hover:bg-gray-50 shadow-md"
            }`}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === category.id
                  ? "bg-orange-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md"
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <EachProduct key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            No products found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
