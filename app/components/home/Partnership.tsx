"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const mtnBenefits = [
  "Wholesale mobile data at competitive rates",
  "Mobile Money integration for seamless billing",
  "Brand exposure in all marketing and bundle activations",
];

const izoneBenefits = [
  "Curated bundles tailored for each vertical",
  "Platform management and digital storefront",
  "Customer acquisition, marketing, and support",
  "Revenue collection and reconciliation",
];

const Partnership: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0A0A0A] via-gray-900 to-[#0A0A0A] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#32CD32]/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#32CD32]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#32CD32]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#32CD32]/10 text-[#32CD32] text-sm font-medium rounded-full mb-4">
            Strategic Partnership
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powering Ghana&apos;s Digital Future{" "}
            <span className="text-[#32CD32]">Together</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A co-branded model that makes us the fuel behind a fast-growing
            digital marketplace
          </p>
        </div>

        {/* Partnership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Network Partner Card */}
          <div className="bg-gradient-to-br from-[#32CD32]/10 to-[#32CD32]/5 rounded-2xl p-8 border border-[#32CD32]/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#32CD32] rounded-xl flex items-center justify-center">
                <span className="text-[#0A0A0A] font-black text-xl">NP</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">
                  Network Partner
                </h3>
                <p className="text-gray-400 text-sm">Connectivity Provider</p>
              </div>
            </div>
            <ul className="space-y-3">
              {mtnBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#32CD32] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* iZone Card */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/izone3.png"
                alt="Logo"
                width={60}
                height={60}
                className="w-16 h-16"
              />
              <div>
                <h3 className="text-white font-bold text-xl">iZone Limited</h3>
                <p className="text-gray-400 text-sm">Technology Partner</p>
              </div>
            </div>
            <ul className="space-y-3">
              {izoneBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#32CD32] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/50">
            <p className="text-white text-lg font-medium max-w-2xl">
              &ldquo;Together, we can power millions of digital journeys —
              making us not just a telecom provider, but the go-to platform for
              digital life in Ghana.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <Image
                src="/izone3.png"
                alt="Logo"
                width={30}
                height={30}
                className="w-10 h-10"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
