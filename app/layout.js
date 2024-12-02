import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "./providers/CartProvider";
import CartProvider from "./providers/CartProvider";
import CategoryProvider from "./providers/CategoryProvider";

const inter = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Protine Corner",
  description: "Processed chicken, beef, meat, egg and milk",
};

export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      name="viewport"
      content="width=device-width, initial-scale=1"
    >
      <body className="overflow-hidden">
        <CartProvider>
          <CategoryProvider>
            <div className={`h-screen overflow-hidden ${inter.className}`}>
              <Navbar />
              <div className="h-[90%] overflow-hidden">{children}</div>
            </div>
          </CategoryProvider>
        </CartProvider>
      </body>
    </html>
  );
}
