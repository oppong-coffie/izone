"use client";

import React from "react";
import { Users, CreditCard, BarChart3, Megaphone } from "lucide-react";

const benefits = [
  {
    icon: CreditCard,
    title: "Competitive Margins",
    description:
      "Purchase data at significantly reduced wholesale rates and resell at market price. Maximize your profit on every MB sold.",
  },
  {
    icon: Users,
    title: "Instant Delivery",
    description:
      "Our automated systems ensure your customers receive their data top-ups instantly, 24/7. No waiting, no downtime.",
  },
  {
    icon: BarChart3,
    title: "Scalable Infrastructure",
    description:
      "Whether you process 10 or 10,000 transactions a day, our robust platform handles it effortlessly.",
  },
  {
    icon: Megaphone, // Note: importing as 'megaphone' lowercase if 'Megaphone' isn't available, or check lucide imports
    title: "Easy Management",
    description:
      "Manage your float, track sales, and view transaction history from a single, intuitive dashboard or API.",
    customIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-[#32CD32]"
      >
        <path d="m3 11 18-5v12L3 14v-3z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </svg>
    ),
  },
];

const MerchantBenefits: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Partner with <span className="text-[#32CD32]">Jolli?</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We solve the biggest challenges for digital service providers in
            Ghana: distribution and payments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-[#32CD32]/50 transition-all duration-300"
            >
              <div className="w-14 h-14 mb-6 bg-[#32CD32]/10 rounded-xl flex items-center justify-center">
                {benefit.customIcon ? (
                  benefit.customIcon
                ) : (
                  <benefit.icon className="w-7 h-7 text-[#32CD32]" />
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MerchantBenefits;
