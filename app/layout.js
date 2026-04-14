import { Poppins } from "next/font/google";
import { AuthProvider, CartProvider } from "./contexts";
import "./globals.css";

const inter = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Protein Corner - Quality Processed Foods",
  description:
    "Premium processed chicken, beef, eggs, fish, and milk delivered to your door. Quality you can taste.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>{children}</CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
