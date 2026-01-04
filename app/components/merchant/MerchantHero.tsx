"use client";

import React from "react";
import { Sparkles, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

const MerchantHero: React.FC = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-[#0A0A0A] via-[#171717] to-[#0A0A0A] overflow-hidden flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#32CD32]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#32CD32]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/10 border border-[#FFCC00]/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#FFCC00]" />
            <span className="text-[#FFCC00] text-sm font-medium">
              Start Your Reselling Business
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Buy Wholesale Data <br />
            <span className="text-[#32CD32]">Sell for Profit</span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join Ghana's fastest-growing data reselling network. Buy MTN bundles
            in bulk at unbeatable wholesale rates and resell to your customers
            instantly via our API or Dashboard.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#join-form"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#32CD32] text-[#0A0A0A] font-semibold rounded-full hover:bg-[#28a428] hover:shadow-[0_0_30px_rgba(50,205,50,0.4)] transition-all duration-300"
            >
              Start Reselling
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-gray-700 text-white font-semibold rounded-full hover:bg-gray-800 transition-all"
            >
              View Bulk Rates
            </Link>
          </div>

          {/* Trust Stats */}
          <div className="flex flex-wrap items-center gap-8 justify-center mt-12 pt-8 border-t border-gray-800/50">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">Up to 20%</span>
              <span className="text-sm text-gray-500">Margin</span>
            </div>
            <div className="w-px h-10 bg-gray-800 hidden sm:block" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">Instant</span>
              <span className="text-sm text-gray-500">Delivery</span>
            </div>
            <div className="w-px h-10 bg-gray-800 hidden sm:block" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">100%</span>
              <span className="text-sm text-gray-500">Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchantHero;
