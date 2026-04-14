"use client";

import { motion } from "framer-motion";

export default function Service() {
  const services = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      description:
        "Same-day delivery available for orders placed before 2 PM. We ensure your products reach you fresh and on time.",
      features: [
        "Same-day delivery",
        "Real-time tracking",
        "Temperature-controlled transport",
      ],
    },
    {
      icon: "✅",
      title: "Quality Assurance",
      description:
        "Every product undergoes strict quality checks before delivery. We guarantee freshness and premium quality.",
      features: [
        "Quality certified",
        "Freshness guarantee",
        "Strict hygiene standards",
      ],
    },
    {
      icon: "🔄",
      title: "Easy Returns",
      description:
        "Not satisfied with your order? We offer hassle-free returns within 24 hours of delivery.",
      features: ["24-hour return window", "Full refund", "No questions asked"],
    },
    {
      icon: "💳",
      title: "Secure Payment",
      description:
        "Multiple payment options with bank-level security. Your transactions are always safe with us.",
      features: [
        "Multiple payment methods",
        "SSL encryption",
        "Secure checkout",
      ],
    },
    {
      icon: "📞",
      title: "24/7 Support",
      description:
        "Our customer support team is available round the clock to assist you with any queries or concerns.",
      features: ["24/7 availability", "Expert assistance", "Quick resolution"],
    },
    {
      icon: "🎁",
      title: "Loyalty Program",
      description:
        "Earn points on every purchase and redeem them for discounts. The more you shop, the more you save!",
      features: ["Earn points", "Exclusive discounts", "Special offers"],
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
          Our Services
        </h1>
        <p className="text-xl text-gray-600 text-gray-400 max-w-3xl mx-auto">
          We go beyond just selling products. Discover the comprehensive
          services that make shopping with Protein Corner a delightful
          experience.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 text-gray-400 mb-6">
              {service.description}
            </p>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-gray-700 text-gray-300"
                >
                  <svg
                    className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 grid md:grid-cols-2 gap-8"
      >
        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Subscription Plans
          </h3>
          <p className="text-gray-600 text-gray-400 mb-4">
            Subscribe to our weekly or monthly delivery plans and save up to 20%
            on your orders. Never run out of your favorite protein products!
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Learn More
          </a>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Corporate Orders
          </h3>
          <p className="text-gray-600 text-gray-400 mb-4">
            Running a restaurant or food business? Get special pricing on bulk
            orders with dedicated account management and priority delivery.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Contact Sales
          </a>
        </div>
      </motion.div>
    </div>
  );
}
