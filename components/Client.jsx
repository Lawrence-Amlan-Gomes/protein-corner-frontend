"use client";

import { motion } from "framer-motion";
import Star from "./Star";

export default function Client() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Home Chef",
      rating: 5,
      comment:
        "The quality of the chicken is exceptional. It is always fresh and perfect for my family dinners. Highly recommended!",
    },
    {
      name: "Michael Chen",
      role: "Fitness Enthusiast",
      rating: 5,
      comment:
        "Great selection of protein products at competitive prices. The delivery is always on time and the products are fresh.",
    },
    {
      name: "Emily Rodriguez",
      role: "Restaurant Owner",
      rating: 4,
      comment:
        "We have been ordering from Protein Corner for our restaurant for months. Consistent quality and reliable service.",
    },
    {
      name: "David Thompson",
      role: "Busy Parent",
      rating: 5,
      comment:
        "The ready-to-cook products save me so much time. My kids love the chicken and the beef steaks are restaurant quality.",
    },
    {
      name: "Lisa Park",
      role: "Health Coach",
      rating: 5,
      comment:
        "I recommend Protein Corner to all my clients. The organic eggs and fresh fish are perfect for healthy meal prep.",
    },
    {
      name: "James Wilson",
      role: "Regular Customer",
      rating: 4,
      comment:
        "Excellent customer service and top-notch products. The only improvement I would suggest is more variety in milk products.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          What Our Customers Say
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Don&apos;t just take our word for it. Here is what our satisfied
          customers have to say about Protein Corner.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold text-xl">
                {testimonial.name.charAt(0)}
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>

            <div className="mb-4">
              <Star rating={testimonial.rating} />
            </div>

            <p className="text-gray-700 dark:text-gray-300 italic">
              &quot;{testimonial.comment}&quot;
            </p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 text-center"
      >
        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Join Our Satisfied Customers
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Experience the quality and convenience that thousands of customers
            already enjoy. Place your first order today!
          </p>
          <a
            href="/shop"
            className="inline-block px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Start Shopping
          </a>
        </div>
      </motion.div>
    </div>
  );
}
