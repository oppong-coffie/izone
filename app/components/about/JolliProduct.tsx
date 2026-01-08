"use client";

import React from "react";
import { Store, Zap, Shield, CheckCircle } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Store,
    title: "Curated Digital Marketplace",
    description:
      "A digital storefront bringing together the best digital tools from local and global partners.",
  },
  {
    icon: Zap,
    title: "Activation Engine",
    description:
      "Seamless bundling platform that combines High-Speed mobile data with curated digital solutions.",
  },
  {
    icon: Shield,
    title: "Co-branded with Partner",
    description:
      "Built for consumer trust and reach, leveraging our partner's established brand in Ghana.",
  },
];

const benefits = [
  "Subscribe once, get both data + digital tools",
  "Convenient and affordable packages",
  "Tailored for specific verticals and needs",
  "Seamless MoMo payment integration",
  "Instant activation upon subscription",
  "24/7 customer support",
];

const JolliProduct: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-[#32CD32]/10 text-[#32CD32] text-sm font-medium rounded-full mb-4">
              The Product
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Introducing <span className="text-[#32CD32]">Jolli by iZone</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              Jolli is a digital storefront and bundling platform that brings
              together High-Speed mobile data with curated digital
              solutions—tailored for specific verticals. Users subscribe once
              and get both data + digital tools in one seamless package.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#32CD32] to-[#28a428] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/bundles"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#32CD32] text-[#0A0A0A] font-semibold rounded-full hover:bg-[#28a428] hover:shadow-[0_0_30px_rgba(50,205,50,0.4)] transition-all duration-300"
            >
              Explore Our Bundles
            </Link>
          </div>

          {/* Right Content - Benefits Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#32CD32] rounded-xl flex items-center justify-center">
                  <span className="text-[#0A0A0A] font-black text-lg">J</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">
                    Jolli Benefits
                  </h3>
                  <p className="text-gray-400 text-sm">
                    What makes us different
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#32CD32] flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#32CD32] rounded-2xl shadow-2xl flex flex-col items-center justify-center animate-bounce">
                <p className="text-[#0A0A0A] font-bold text-2xl">11</p>
                <p className="text-[#0A0A0A] text-xs font-medium">Bundles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JolliProduct;
