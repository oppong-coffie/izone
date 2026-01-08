"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference");
  const [clearing, setClearing] = useState(true);

  useEffect(() => {
    // Clear the cart on successful load
    const clearCart = async () => {
      try {
        await fetch("/api/cart/clear", { method: "POST" });
      } catch (err) {
        console.error("Failed to clear cart", err);
      } finally {
        setClearing(false);
      }
    };

    clearCart();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-lg mx-auto shadow-xl border border-gray-100 dark:border-gray-700">
          <div className="w-20 h-20 bg-[#32CD32]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-[#32CD32]" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Payment Successful!
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Thank you for your purchase. Your transaction was successful.
            {reference && (
              <span className="block mt-2 text-xs text-gray-400">
                Reference: {reference}
              </span>
            )}
          </p>

          <Link
            href="/bundles"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#32CD32] text-[#0A0A0A] font-bold rounded-full hover:bg-[#28a428] transition-all"
          >
            Continue Shopping
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
