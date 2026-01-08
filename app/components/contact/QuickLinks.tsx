"use client";

import React from "react";
import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Heart,
  Truck,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  {
    icon: Briefcase,
    title: "Business Bundles",
    description: "Zoom, cloud storage, and accounting tools",
    href: "/bundles",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    icon: GraduationCap,
    title: "Student Bundles",
    description: "E-learning platforms and research tools",
    href: "/bundles",
    color: "from-purple-500/20 to-purple-600/10",
  },
  {
    icon: Heart,
    title: "Healthcare Bundles",
    description: "Telemedicine and records management",
    href: "/bundles",
    color: "from-red-500/20 to-red-600/10",
  },
  {
    icon: Truck,
    title: "Logistics Bundles",
    description: "Delivery tracking and POS tools",
    href: "/bundles",
    color: "from-orange-500/20 to-orange-600/10",
  },
];

const QuickLinks: React.FC = () => {
  return (
    <section className="py-16 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Explore Our <span className="text-[#32CD32]">Bundles</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Discover tailored digital solutions for your industry, all bundled
            with High-Speed Data.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-[#32CD32]/50 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <link.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2 group-hover:text-[#32CD32] transition-colors">
                {link.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{link.description}</p>
              <div className="flex items-center gap-2 text-[#32CD32] text-sm font-medium">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/bundles"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#32CD32] text-[#0A0A0A] font-semibold rounded-full hover:bg-[#28a428] hover:shadow-lg hover:shadow-[#32CD32]/30 transition-all group"
          >
            View All 11 Bundles
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
