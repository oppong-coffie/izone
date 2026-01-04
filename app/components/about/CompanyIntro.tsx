"use client";

import React from "react";
import { Target, Rocket, Users, Award } from "lucide-react";

const milestones = [
  {
    icon: Target,
    year: "Mission",
    title: "Democratize Digital Access",
    description:
      "Our mission is to democratize digital access and enhance productivity through technology for all Ghanaians.",
  },
  {
    icon: Rocket,
    year: "Vision",
    title: "Digital Enabler",
    description:
      "Transition from data provider to digital enabler, leading the next phase of Ghana's digital transformation.",
  },
  {
    icon: Users,
    year: "Partnership",
    title: "Long-Standing MTN Partner",
    description:
      "A trusted provider of mobile and digital services—deeply integrated into Ghana's economic and digital growth story.",
  },
  {
    icon: Award,
    year: "Experience",
    title: "Over a Decade Strong",
    description:
      "With over 10 years of experience, iZone has evolved into a trusted leader in Ghana's mobile ecosystem.",
  },
];

const CompanyIntro: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#32CD32]/10 text-[#32CD32] text-sm font-medium rounded-full mb-4">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-[#32CD32]">iZone Limited</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ghana&apos;s digital economy is shifting rapidly. Customers and
            businesses now seek more than just connectivity—they need integrated
            solutions that empower learning, commerce, communication, and
            productivity.
          </p>
        </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-[#32CD32]/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#32CD32] to-[#28a428] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  <milestone.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-[#32CD32] text-sm font-semibold uppercase tracking-wider">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
