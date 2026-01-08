"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Check, Wifi, Zap, Shield, Clock } from "lucide-react";
import type { Bundle } from "../../../../lib/bundles";

interface Props {
  bundle: Bundle;
}

export default function BundleDetailContent({ bundle }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section
        className={`relative py-20 bg-gradient-to-br ${bundle.color} overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/70 text-sm mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/bundles" className="hover:text-white">
              Bundles
            </Link>
            <span>/</span>
            <span className="text-white">{bundle.name}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left - Info */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur rounded-full mb-4">
                <Wifi className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">
                  {bundle.dataAllocation} Included
                </span>
              </div>

              <div className="text-8xl mb-6">{bundle.icon}</div>

              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-sm mb-4">
                {bundle.segment}
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {bundle.name}
              </h1>

              <p className="text-white/80 text-lg max-w-xl mb-8 mx-auto lg:mx-0">
                {bundle.description}
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <div className="flex items-center gap-2 text-white/80">
                  <Zap className="w-5 h-5" />
                  <span className="text-sm">Instant Activation</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">Secure Payment</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Right - Pricing Card */}
            <div className="w-full lg:w-96">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl">
                <div className="text-center mb-6">
                  <span className="text-gray-500 dark:text-gray-400">
                    Monthly subscription
                  </span>
                  <div className="flex items-baseline justify-center gap-1 mt-2">
                    <span className="text-5xl font-bold text-[#32CD32]">
                      GH₵ {bundle.price}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      /month
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {bundle.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-[#32CD32]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#32CD32]" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#32CD32]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Wifi className="w-3 h-3 text-[#32CD32]" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {bundle.dataAllocation}
                    </span>
                  </li>
                </ul>

                <button
                  onClick={async () => {
                    try {
                      const res = await fetch("/api/cart", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          productId: bundle.id,
                          quantity: 1,
                        }),
                      });
                      if (res.ok) {
                        window.location.href = "/cart";
                      } else {
                        alert("Failed to add to cart");
                      }
                    } catch (err) {
                      console.error(err);
                      alert("Error adding to cart");
                    }
                  }}
                  className="w-full py-4 bg-[#32CD32] text-[#0A0A0A] font-bold rounded-xl hover:bg-[#28a428] hover:shadow-lg hover:shadow-[#32CD32]/30 transition-all text-lg"
                >
                  Subscribe Now
                </button>

                <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-4">
                  Pay with MoMo • Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Included Tools Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            What&apos;s Included
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bundle.tools.map((tool, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-[#32CD32] hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {tool.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="pb-16">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/bundles"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#32CD32] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Bundles
          </Link>
        </div>
      </section>
    </div>
  );
}
