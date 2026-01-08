"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Wifi } from "lucide-react";
import { bundles } from "../../../lib/bundles";

const BundleGrid: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#32CD32]/10 border border-[#32CD32]/20 rounded-full mb-4">
              <Wifi className="w-4 h-4 text-[#32CD32]" />
              <span className="text-[#32CD32] text-xs font-medium uppercase tracking-wider">
                Digital + Data Bundles
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Choose Your Bundle
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg">
              Curated digital solutions tailored for your industry, combined
              with High-Speed Data for seamless connectivity
            </p>
          </div>
          <Link
            href="/bundles"
            className="inline-flex items-center gap-2 text-[#32CD32] font-medium hover:gap-3 transition-all group"
          >
            View All Bundles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bundles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {bundles.map((bundle) => (
            <Link
              key={bundle.id}
              href={`/bundles/${bundle.slug}`}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-[#32CD32] hover:shadow-xl hover:shadow-[#32CD32]/10 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Header */}
              <div
                className={`h-24 bg-gradient-to-br ${bundle.color} flex items-center justify-center relative`}
              >
                <span className="text-5xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {bundle.icon}
                </span>
                {/* Data Badge */}
                <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 dark:bg-gray-900/90 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
                  {bundle.dataAllocation}
                </div>
              </div>

              <div className="p-5">
                {/* Segment Tag */}
                <span className="inline-block px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs text-gray-600 dark:text-gray-400 mb-2">
                  {bundle.segment}
                </span>

                {/* Bundle Name */}
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#32CD32] transition-colors">
                  {bundle.name}
                </h3>

                {/* Tools Preview */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {bundle.tools.slice(0, 3).map((tool, idx) => (
                    <span key={idx} className="text-lg" title={tool.name}>
                      {tool.icon}
                    </span>
                  ))}
                  {bundle.tools.length > 3 && (
                    <span className="text-xs text-gray-500 dark:text-gray-400 self-center ml-1">
                      +{bundle.tools.length - 3} more
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl font-bold text-[#32CD32]">
                    GH₵ {bundle.price}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {bundle.tools.length} tools included
                  </span>
                  <div className="w-8 h-8 bg-[#32CD32] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                    <ArrowRight className="w-4 h-4 text-[#0A0A0A]" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BundleGrid;
