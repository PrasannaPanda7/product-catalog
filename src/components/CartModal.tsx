// components/CartModal.tsx
"use client";

import { useCart } from "../contexts/CartContext";

export default function CartModal({ onClose }: { onClose: () => void }) {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="fixed inset-0 bg-[#000000aa] flex justify-end z-50">
      <div className="bg-white w-full max-w-md h-full p-4 overflow-auto shadow-lg">
        <button onClick={onClose} className="text-gray-500 float-right text-xl">
          ×
        </button>
        <h2 className="text-lg font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-red-500">No items in cart.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4 border-b pb-2"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-16 h-16 object-cover"
              />
              <div className="flex-1 ml-4">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <div className="flex items-center mt-1">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, (item.quantity || 1) - 1)
                    }
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    −
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.id, (item.quantity || 1) + 1)
                    }
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-4 text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
