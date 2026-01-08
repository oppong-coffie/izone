"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Trash2, ArrowRight, ShoppingCart, Loader2 } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface CartItem {
  id: string;
  quantity: number;
  product: Product;
}

interface Cart {
  id: string;
  items: CartItem[];
}

export default function CartPage() {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isProcessingCheckout, setIsProcessingCheckout] = useState(false);

  const fetchCart = async () => {
    try {
      const res = await fetch("/api/cart");
      if (!res.ok) throw new Error("Failed to fetch cart");
      const data = await res.json();
      setCart(data);
    } catch (err) {
      console.error(err);
      setError("Could not load cart. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const removeItem = async (itemId: string) => {
    try {
      const res = await fetch(`/api/cart/${itemId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        fetchCart(); // Refresh cart
      } else {
        alert("Failed to remove item");
      }
    } catch (err) {
      console.error(err);
      alert("Error removing item");
    }
  };

  const calculateTotal = () => {
    if (!cart?.items) return 0;
    return cart.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessingCheckout(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Checkout initialization failed");
      }

      if (data.authorization_url) {
        // Redirect to Paystack
        window.location.href = data.authorization_url;
      } else {
        alert("No payment URL received");
      }
    } catch (err: any) {
      console.error(err);
      alert(err.message || "An error occurred during checkout");
    } finally {
      setIsProcessingCheckout(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#32CD32]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={fetchCart}
          className="px-4 py-2 bg-[#32CD32] text-white rounded-lg"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12 relative">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
          <ShoppingCart className="w-8 h-8 text-[#32CD32]" />
          Your Cart
        </h1>

        {cart && cart.items.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items List */}
            <div className="flex-1 space-y-4">
              {cart.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row items-center gap-4"
                >
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-3xl">
                    {item.product.image || "📦"}
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                      {item.product.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {item.product.category}
                    </p>
                    <div className="mt-1 text-[#32CD32] font-bold">
                      GH₵ {item.product.price}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-gray-600 dark:text-gray-400">
                      Qty: {item.quantity}
                    </span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Remove Item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-96">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Subtotal</span>
                    <span>GH₵ {calculateTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Tax</span>
                    <span>GH₵ 0.00</span>
                  </div>
                  <div className="h-px bg-gray-200 dark:bg-gray-700 my-4" />
                  <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white">
                    <span>Total</span>
                    <span>GH₵ {calculateTotal().toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsCheckoutModalOpen(true)}
                  className="w-full py-4 bg-[#32CD32] text-[#0A0A0A] font-bold rounded-xl hover:bg-[#28a428] hover:shadow-lg hover:shadow-[#32CD32]/30 transition-all flex items-center justify-center gap-2"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="mt-4 text-center">
                  <Link
                    href="/bundles"
                    className="text-sm text-gray-500 hover:text-[#32CD32]"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
              🛒
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-8">
              Looks like you haven't added any bundles yet.
            </p>
            <Link
              href="/bundles"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#32CD32] text-[#0A0A0A] font-bold rounded-full hover:bg-[#28a428] transition-all"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </div>

      {/* Checkout Modal */}
      {isCheckoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-md p-6 shadow-2xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Checkout
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">
              Enter your email address to receive your receipt and order
              details.
            </p>
            <form onSubmit={handleCheckout}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-[#32CD32] focus:ring-1 focus:ring-[#32CD32]"
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsCheckoutModalOpen(false)}
                  className="flex-1 py-3 px-4 rounded-xl border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isProcessingCheckout}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#32CD32] text-[#0A0A0A] font-bold hover:bg-[#28a428] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessingCheckout ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Pay Now"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
