"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Wifi } from "lucide-react";

const bundles = [
  {
    segment: "Business",
    name: "Business Essentials Bundle",
    content: "Zoom, cloud storage, accounting tools",
    icon: "💼",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    segment: "Education",
    name: "Student Power Bundle",
    content: "E-learning platforms, research tools",
    icon: "📚",
    color: "from-purple-500/20 to-purple-600/10",
  },
  {
    segment: "Content Creators",
    name: "Creator Pro Bundle",
    content: "Editing software, content schedulers",
    icon: "🎬",
    color: "from-pink-500/20 to-pink-600/10",
  },
  {
    segment: "Healthcare",
    name: "Health-Connect Bundle",
    content: "Telemedicine platforms, records apps",
    icon: "🏥",
    color: "from-red-500/20 to-red-600/10",
  },
  {
    segment: "Logistics & E-commerce",
    name: "Logistics-Pro Bundle",
    content: "Delivery tracking, POS tools",
    icon: "🚚",
    color: "from-orange-500/20 to-orange-600/10",
  },
  {
    segment: "Agriculture",
    name: "Agri-Tech Bundle",
    content: "Monitoring tools, mobile farming apps",
    icon: "🌾",
    color: "from-green-500/20 to-green-600/10",
  },
  {
    segment: "Hospitality & Tourism",
    name: "Hospitality Hub Bundle",
    content: "Booking tools, CRM systems",
    icon: "🏨",
    color: "from-teal-500/20 to-teal-600/10",
  },
  {
    segment: "Financial Services",
    name: "Fin-Pro Bundle",
    content: "Dashboards, financial management apps",
    icon: "💳",
    color: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    segment: "Startups & Gig Workers",
    name: "Startup Bundle",
    content: "Freelancer tools, CV builders",
    icon: "🚀",
    color: "from-yellow-500/20 to-yellow-600/10",
  },
  {
    segment: "Government & Public",
    name: "Gov-Connect Bundle",
    content: "Secure messaging, cloud tools",
    icon: "🏛️",
    color: "from-slate-500/20 to-slate-600/10",
  },
  {
    segment: "Legal & Judiciary",
    name: "Legal Bundle",
    content: "E-filing, legal docs & case management",
    icon: "⚖️",
    color: "from-amber-500/20 to-amber-600/10",
  },
];

const BundlesShowcase: React.FC = () => {
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
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#32CD32]/10 border border-[#32CD32]/20 rounded-full mb-4">
            <Wifi className="w-4 h-4 text-[#32CD32]" />
            <span className="text-[#32CD32] text-xs font-medium uppercase tracking-wider">
              11 Industry Bundles
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bundles for Every <span className="text-[#32CD32]">Industry</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Each bundle combines curated digital tools with High-Speed Data,
            tailored for specific verticals to meet unique needs.
          </p>
        </div>

        {/* Bundles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {bundles.map((bundle, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-[#32CD32]/50 transition-all duration-300 overflow-hidden"
            >
              {/* Icon Header */}
              <div
                className={`h-20 bg-gradient-to-br ${bundle.color} flex items-center justify-center`}
              >
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {bundle.icon}
                </span>
              </div>

              <div className="p-5">
                {/* Segment Tag */}
                <span className="inline-block px-2 py-0.5 bg-gray-700/50 rounded text-xs text-gray-400 mb-2">
                  {bundle.segment}
                </span>

                {/* Bundle Name */}
                <h3 className="font-bold text-white mb-2 group-hover:text-[#32CD32] transition-colors">
                  {bundle.name}
                </h3>

                {/* Content */}
                <p className="text-gray-400 text-sm mb-3">{bundle.content}</p>

                {/* Data Badge */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#32CD32] font-medium">
                    + High-Speed Data
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/bundles"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#32CD32] text-[#0A0A0A] font-semibold rounded-full hover:bg-[#28a428] hover:shadow-[0_0_30px_rgba(50,205,50,0.4)] transition-all duration-300 group"
          >
            View All Bundles
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BundlesShowcase;
