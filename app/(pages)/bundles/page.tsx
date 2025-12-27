"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Wifi, Search } from "lucide-react";
import { bundles } from "../../../lib/bundles";

export default function BundlesPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedSegment, setSelectedSegment] = React.useState<string | null>(
    null
  );

  const segments = [...new Set(bundles.map((b) => b.segment))];

  const filteredBundles = bundles.filter((bundle) => {
    const matchesSearch =
      bundle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bundle.segment.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bundle.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSegment =
      !selectedSegment || bundle.segment === selectedSegment;
    return matchesSearch && matchesSegment;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#0A0A0A] via-gray-900 to-[#0A0A0A] py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#32CD32]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#32CD32]/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#32CD32]">Bundles</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            All <span className="text-[#32CD32]">Bundles</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Digital solutions + MTN Data in one seamless package. Choose the
            bundle that fits your needs.
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 sticky top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search bundles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-[#32CD32] transition-colors"
              />
            </div>

            {/* Segment Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedSegment(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  !selectedSegment
                    ? "bg-[#32CD32] text-[#0A0A0A]"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                All
              </button>
              {segments.map((segment) => (
                <button
                  key={segment}
                  onClick={() => setSelectedSegment(segment)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedSegment === segment
                      ? "bg-[#32CD32] text-[#0A0A0A]"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {segment}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bundles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredBundles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 dark:text-gray-400">
                No bundles found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBundles.map((bundle) => (
                <Link
                  key={bundle.id}
                  href={`/bundles/${bundle.slug}`}
                  className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-[#32CD32] hover:shadow-xl hover:shadow-[#32CD32]/10 transition-all duration-300 overflow-hidden"
                >
                  {/* Header */}
                  <div
                    className={`h-28 bg-gradient-to-br ${bundle.color} flex items-center justify-center relative`}
                  >
                    <span className="text-6xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {bundle.icon}
                    </span>
                    <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 dark:bg-gray-900/90 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1">
                      <Wifi className="w-3 h-3" />
                      {bundle.dataAllocation}
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="inline-block px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs text-gray-600 dark:text-gray-400 mb-2">
                      {bundle.segment}
                    </span>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#32CD32] transition-colors">
                      {bundle.name}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {bundle.description}
                    </p>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {bundle.tools.slice(0, 4).map((tool, idx) => (
                        <span key={idx} className="text-lg" title={tool.name}>
                          {tool.icon}
                        </span>
                      ))}
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div>
                        <span className="text-2xl font-bold text-[#32CD32]">
                          GH₵ {bundle.price}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          /month
                        </span>
                      </div>
                      <div className="w-10 h-10 bg-[#32CD32] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                        <ArrowRight className="w-5 h-5 text-[#0A0A0A]" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
