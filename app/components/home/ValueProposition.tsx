"use client";

import React from "react";
import { Server, Package, MapPin, Handshake } from "lucide-react";

const propositions = [
  {
    icon: Server,
    title: "Technology Platform",
    description:
      "Our in-house system handles subscriptions, billing, onboarding, renewals, and usage tracking seamlessly.",
    color: "from-[#32CD32] to-[#28a428]",
  },
  {
    icon: Package,
    title: "Aggregated Digital Content",
    description:
      "We integrate the best tools from local and global partners—ranging from SaaS and e-learning to productivity and content tools.",
    color: "from-[#32CD32] to-[#28a428]",
  },
  {
    icon: MapPin,
    title: "Market Distribution Expertise",
    description:
      "With a strong national footprint, we have access to underserved and untapped consumer bases across Ghana.",
    color: "from-[#32CD32] to-[#28a428]",
  },
  {
    icon: Handshake,
    title: "Strategic Brand Synergy",
    description:
      "All bundles are co-branded with our partner to reinforce leadership in the digital ecosystem and grow customer stickiness.",
    color: "from-[#32CD32] to-[#28a428]",
  },
];

const ValueProposition: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#32CD32]/10 text-[#32CD32] text-sm font-medium rounded-full mb-4">
            Why Jolli by iZone?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What We Bring to the Table
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            iZone Limited is a leading Ghanaian technology distribution company
            with over a decade of experience supporting Ghana&apos;s mobile
            ecosystem.
          </p>
        </div>

        {/* Propositions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {propositions.map((prop, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-[#32CD32]/50 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 mb-6 bg-gradient-to-br ${prop.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
              >
                <prop.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {prop.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-[#32CD32]/10 rounded-2xl border border-[#32CD32]/20">
            <div className="text-left">
              <p className="text-gray-900 dark:text-white font-semibold">
                Ready to transform your digital experience?
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Join thousands of Ghanaians using Jolli bundles
              </p>
            </div>
            <a
              href="/bundles"
              className="px-6 py-3 bg-[#32CD32] text-[#0A0A0A] font-semibold rounded-full hover:bg-[#28a428] hover:shadow-lg hover:shadow-[#32CD32]/30 transition-all whitespace-nowrap"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
