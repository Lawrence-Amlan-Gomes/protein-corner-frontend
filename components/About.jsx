"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const features = [
    {
      icon: "🍗",
      title: "Quality Products",
      description:
        "We source only the finest protein products from trusted suppliers",
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Get your orders delivered straight to your door in no time",
    },
    {
      icon: "💯",
      title: "Fresh Guarantee",
      description:
        "Our products are always fresh and ready to cook when they reach you",
    },
    {
      icon: "🛡️",
      title: "Safe & Hygienic",
      description:
        "All products are processed and packaged following strict hygiene standards",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          About Protein Corner
        </h1>
        <p className="text-xl text-gray-600 text-gray-400 max-w-3xl mx-auto">
          Your trusted source for high-quality, ready-to-cook processed chicken,
          beef, eggs, fish, and milk
        </p>
      </motion.div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Our Story
          </h2>
          <p className="text-gray-600 text-gray-400 mb-4">
            Protein Corner was founded with a simple mission: to provide
            customers with easy access to high-quality protein products that
            make healthy meal preparation convenient and enjoyable.
          </p>
          <p className="text-gray-600 text-gray-400 mb-4">
            We understand that in today&apos;s fast-paced world, finding time to
            shop for fresh, quality ingredients can be challenging. That&apos;s
            why we&apos;ve made it our mission to bring the finest selection of
            processed protein products directly to your doorstep.
          </p>
          <p className="text-gray-600 text-gray-400">
            From farm-fresh chicken to premium beef, organic eggs to fresh fish
            and milk, every product in our inventory is carefully selected to
            meet our stringent quality standards.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/chicken1.png"
            alt="Quality Products"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="bg-white bg-gray-800 p-8 rounded-xl shadow-lg text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-12 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Our Mission
        </h2>
        <p className="text-xl text-gray-700 text-gray-300 max-w-3xl mx-auto">
          To deliver the finest selection of protein products for quick, healthy
          meals, focusing on quality, convenience, and reliable delivery
          straight to customers&apos; kitchens.
        </p>
      </motion.div>
    </div>
  );
}
