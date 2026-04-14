"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import SideCart from "./SideCart";

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SideCart />
      {children}
      <Footer />
    </div>
  );
}
