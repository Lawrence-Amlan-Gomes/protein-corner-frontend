"use client";

import { products } from "@/app/utils/products";
import EachProduct from "@/components/EachProduct";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SideCart from "@/components/SideCart";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SideCart />

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900  mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular protein products, handpicked for quality
              and taste
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <EachProduct key={product.id} product={product} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-12"
          >
            <Link
              href="/shop"
              className="inline-block px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              View All Products
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900  mb-4">
              Why Choose Protein Corner?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to providing you with the best quality products
              and service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🍗",
                title: "Premium Quality",
                description:
                  "Only the finest cuts from trusted suppliers, ensuring freshness and taste in every product",
              },
              {
                icon: "🚚",
                title: "Fast Delivery",
                description:
                  "Same-day delivery available for orders placed before 2 PM, keeping your products fresh",
              },
              {
                icon: "💯",
                title: "100% Fresh",
                description:
                  "Our freshness guarantee ensures you receive products at their peak quality",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-gray-50 rounded-xl"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900  mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Order?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Get fresh, quality protein products delivered to your doorstep.
              Order now and taste the difference!
            </p>
            <Link
              href="/shop"
              className="inline-block px-8 py-4 bg-white hover:bg-gray-100 text-orange-600 font-semibold rounded-lg transition-colors duration-200"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
