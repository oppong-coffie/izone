"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const mtnProvides = [
  "Wholesale mobile data at competitive rates",
  "Mobile Money integration for seamless billing",
  "Brand exposure in all marketing and bundle activations",
];

const izoneDelivers = [
  "Curated bundles tailored for each vertical",
  "Platform management and digital storefront",
  "Customer acquisition, marketing, and support",
  "Revenue collection and reconciliation",
];

const financialModel = [
  {
    step: "01",
    title: "Credit-Based Data Purchase",
    description: "iZone purchases data on credit backed by a bank guarantee.",
  },
  {
    step: "02",
    title: "Favorable Wholesale Rate",
    description: "MTN provides discounted rates for data used in bundles.",
  },
  {
    step: "03",
    title: "Customer Billing & Collection",
    description: "iZone collects payments via its storefront and MTN MoMo.",
  },
  {
    step: "04",
    title: "Payment to MTN",
    description: "MTN is reimbursed based on monthly agreed drawdowns.",
  },
];

const PartnershipSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0A0A0A] via-gray-900 to-[#0A0A0A] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#32CD32]/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#32CD32]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#FFCC00]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#32CD32]/10 text-[#32CD32] text-sm font-medium rounded-full mb-4">
            Strategic Partnership
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Partnership <span className="text-[#32CD32]">Model</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A co-branded model designed to be simple, scalable, and
            impactful—making MTN the fuel behind a fast-growing digital
            marketplace.
          </p>
        </div>

        {/* Partnership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* MTN Card */}
          <div className="bg-gradient-to-br from-[#FFCC00]/10 to-[#FFCC00]/5 rounded-2xl p-8 border border-[#FFCC00]/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#FFCC00] rounded-xl flex items-center justify-center">
                <span className="text-[#0A0A0A] font-black text-xl">MTN</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">MTN Ghana</h3>
                <p className="text-gray-400 text-sm">Network Partner</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 font-medium">MTN Provides:</p>
            <ul className="space-y-3">
              {mtnProvides.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFCC00] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* iZone Card */}
          <div className="bg-gradient-to-br from-[#32CD32]/10 to-[#32CD32]/5 rounded-2xl p-8 border border-[#32CD32]/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#32CD32] rounded-xl flex items-center justify-center">
                <span className="text-[#0A0A0A] font-black text-xl">iZ</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">iZone Limited</h3>
                <p className="text-gray-400 text-sm">Technology Partner</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 font-medium">iZone Delivers:</p>
            <ul className="space-y-3">
              {izoneDelivers.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#32CD32] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Financial Model */}
        <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/50">
          <h3 className="text-xl font-semibold text-white text-center mb-8">
            Financial Model
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialModel.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-[#32CD32] rounded-full flex items-center justify-center">
                  <span className="text-[#0A0A0A] font-bold">{item.step}</span>
                </div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/50">
            <p className="text-white text-lg font-medium max-w-2xl">
              &ldquo;Together, we can power millions of digital journeys —
              making MTN not just a telecom provider, but the go-to platform for
              digital life in Ghana.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#FFCC00] rounded-lg flex items-center justify-center">
                <span className="text-[#0A0A0A] font-bold text-xs">MTN</span>
              </div>
              <span className="text-gray-500">×</span>
                <Image
                src="/izone3.png"
                alt="iZone Logo"
                width={64}
                height={64}
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
