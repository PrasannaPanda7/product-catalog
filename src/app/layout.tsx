"use client";

import { ReactNode } from "react";
import { CartProvider } from "../contexts/CartContext";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Providers from "./queryProvider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <CartProvider>
            <Navbar />
            <div className="flex justify-center">{children}</div>
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
