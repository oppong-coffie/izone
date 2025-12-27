"use client";

import React from "react";
import {
  Users,
  TrendingUp,
  Smartphone,
  GraduationCap,
  Briefcase,
  Stethoscope,
  Lightbulb,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "19M+",
    label: "Active Mobile Data Users",
    description: "in Ghana",
  },
  {
    icon: TrendingUp,
    value: "18%",
    label: "Annual Growth",
    description: "in digital consumption",
  },
  {
    icon: Smartphone,
    value: "55%+",
    label: "Smartphone Penetration",
    description: "and rising steadily",
  },
];

const segments = [
  { icon: GraduationCap, value: "5M+", label: "Students & Youth" },
  { icon: Briefcase, value: "1M+", label: "SMEs & Startups" },
  { icon: Stethoscope, value: "800K+", label: "Professionals" },
  { icon: Lightbulb, value: "3M+", label: "Freelancers & Creators" },
];

const Statistics: React.FC = () => {
  return (
    <section className="py-20 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#32CD32]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#32CD32]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The <span className="text-[#32CD32]">Market Opportunity</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ghana&apos;s digital economy is shifting rapidly. Customers and
            businesses now seek more than just connectivity—they need integrated
            solutions.
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-[#32CD32]/30 transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[#32CD32] rounded-xl flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-[#0A0A0A]" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-[#32CD32] mb-2">
                {stat.value}
              </div>
              <div className="text-white font-medium mb-1">{stat.label}</div>
              <div className="text-gray-500 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Target Segments */}
        <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/50">
          <h3 className="text-xl font-semibold text-white text-center mb-8">
            Target Market Segments
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {segments.map((segment, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-white/5 rounded-xl flex items-center justify-center">
                  <segment.icon className="w-6 h-6 text-[#32CD32]" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {segment.value}
                </div>
                <div className="text-gray-400 text-sm">{segment.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
