"use client";

import React from "react";
import { Check, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

const bundles = [
  {
    name: "Starter Pack",
    size: "500 GB",
    price: "From GHS 4.5 / GB",
    idealFor: "Small Resellers",
    features: ["Valid for 30 days", "Instant API Delivery", "Basic Dashboard"],
    color: "from-blue-600 to-blue-400",
  },
  {
    name: "Growth Plan",
    size: "1 TB",
    price: "From GHS 4.0 / GB",
    idealFor: "Growing Agents",
    features: [
      "Non-expiry options",
      "Priority Support",
      "Advanced Analytics",
      "API & Web Access",
    ],
    popular: true,
    color: "from-[#32CD32] to-[#28a428]",
  },
  {
    name: "Enterprise Block",
    size: "10 TB+",
    price: "Custom Rates",
    idealFor: "Large Fintechs",
    features: [
      "Dedicated Account Manager",
      "Custom SLA",
      "White-label options",
      "100% Uptime Guarantee",
    ],
    color: "from-purple-600 to-purple-400",
  },
];

const BulkBundles: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#32CD32]/10 text-[#32CD32] text-sm font-medium rounded-full mb-4">
            Wholesale Packages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Bulk Data <span className="text-[#32CD32]">Bundles</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose a package that fits your scale. The more you buy, the bigger
            your margin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bundles.map((bundle, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                bundle.popular
                  ? "bg-[#0A0A0A] border-[#32CD32] shadow-2xl scale-105 z-10"
                  : "bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 hover:border-[#32CD32]/30"
              }`}
            >
              {bundle.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#32CD32] text-[#0A0A0A] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <span
                  className={`inline-block text-sm font-semibold mb-2 ${
                    bundle.popular
                      ? "text-[#32CD32]"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {bundle.idealFor}
                </span>
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    bundle.popular
                      ? "text-white"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {bundle.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r ${bundle.color}`}
                  >
                    {bundle.size}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-2">{bundle.price}</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {bundle.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        bundle.popular
                          ? "bg-[#32CD32]/20 text-[#32CD32]"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      <Check className="w-3 h-3" />
                    </div>
                    <span
                      className={`text-sm ${
                        bundle.popular
                          ? "text-gray-300"
                          : "text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="#join-form"
                className={`w-full py-3 rounded-xl font-bold text-center transition-all ${
                  bundle.popular
                    ? "bg-[#32CD32] text-[#0A0A0A] hover:bg-[#28a428] shadow-lg shadow-[#32CD32]/20"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                Buy Now
              </Link>
            </div>
          ))}
        </div>

        {/* Info Strip */}
        <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-blue-500/5 border border-blue-500/10 rounded-2xl flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-blue-500 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-blue-500 mb-1">Secure & Valid</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                All bulk data is 100% legitimate high-speed data. No hacks, no
                shortcuts. Guaranteed validity.
              </p>
            </div>
          </div>
          <div className="p-6 bg-[#32CD32]/5 border border-[#32CD32]/10 rounded-2xl flex items-start gap-4">
            <Zap className="w-8 h-8 text-[#32CD32] flex-shrink-0" />
            <div>
              <h4 className="font-bold text-[#32CD32] mb-1">
                Instant Allocation
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Data is credited to your merchant wallet instantly upon payment.
                Start selling immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkBundles;
