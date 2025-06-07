// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import CartModal from "./CartModal";

export default function Navbar() {
  const { cart } = useCart();
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="p-4 bg-gray-100 flex justify-between items-center relative">
      <Link href="/" className="font-bold">
        Home
      </Link>
      <button onClick={() => setShowCart(true)} className="relative">
        Cart ({cart.reduce((sum, item) => sum + (item.quantity || 1), 0)})
      </button>

      {showCart && <CartModal onClose={() => setShowCart(false)} />}
    </div>
  );
}
