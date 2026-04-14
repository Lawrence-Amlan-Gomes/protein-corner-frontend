"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
      ],
    },
    {
      title: "Customer Service",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "FAQ", href: "/contact" },
        { name: "Shipping Info", href: "/services" },
        { name: "Returns", href: "/services" },
      ],
    },
    {
      title: "Categories",
      links: [
        { name: "Chicken", href: "/shop?category=chicken" },
        { name: "Beef", href: "/shop?category=beef" },
        { name: "Eggs", href: "/shop?category=egg" },
        { name: "Fish", href: "/shop?category=fish" },
        { name: "Milk", href: "/shop?category=milk" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: "/fbIcon.png", href: "#" },
    { name: "Email", icon: "/gmailIcon.png", href: "mailto:info@proteincorner.com" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/Logo.png"
                alt="Protein Corner Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold">Protein Corner</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted source for high-quality, ready-to-cook processed
              chicken, meat, and eggs. Quality you can taste, delivered to your
              door.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 text-orange-500">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-orange-500 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} Protein Corner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
