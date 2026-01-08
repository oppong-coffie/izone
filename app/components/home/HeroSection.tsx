"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";

const HeroSection: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="min-h-[70vh] bg-[#0A0A0A]" />;
  }

  return (
    <section className="relative min-h-[700px] bg-gradient-to-br from-[#0A0A0A] via-[#171717] to-[#0A0A0A] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#32CD32]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#32CD32]/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#32CD32]/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(50, 205, 50, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(50, 205, 50, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-16 lg:py-24">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Partnership Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#32CD32]/10 border border-[#32CD32]/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#32CD32]" />
              <span className="text-[#32CD32] text-sm font-medium">
                Powered by iZone
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Digital Solutions
              <br />
              <span className="text-[#32CD32]">+ High-Speed Data</span>
              <br />
              One Bundle
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-8 mx-auto lg:mx-0">
              Jolli brings together curated digital tools with reliable data in
              seamless bundles. Whether you&apos;re a student, entrepreneur, or
              professional—get everything you need in one subscription.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/bundles"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#32CD32] text-[#0A0A0A] font-semibold rounded-full hover:bg-[#28a428] hover:shadow-[0_0_30px_rgba(50,205,50,0.4)] transition-all duration-300 group"
              >
                Explore Bundles
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#32CD32] text-[#32CD32] font-semibold rounded-full hover:bg-[#32CD32] hover:text-[#0A0A0A] transition-all duration-300"
              >
                Learn More
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 mt-10 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-gray-400">
                <Zap className="w-5 h-5 text-[#32CD32]" />
                <span className="text-sm">Instant Activation</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Shield className="w-5 h-5 text-[#32CD32]" />
                <span className="text-sm">Secure Payments</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-[#32CD32] font-bold">24/7</span>
                <span className="text-sm">Support</span>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Bundle Card */}
          <div className="flex-1 relative">
            <div className="relative max-w-md mx-auto">
              {/* Floating Stats Cards */}
              <div className="absolute -top-4 -left-4 w-28 h-28 bg-[#32CD32] rounded-2xl shadow-2xl flex items-center justify-center animate-bounce z-10">
                <div className="text-center">
                  <p className="text-[#0A0A0A] font-bold text-2xl">11</p>
                  <p className="text-[#0A0A0A] text-xs font-medium">Bundles</p>
                </div>
              </div>

              {/* Main Bundle Preview Card */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 border border-gray-700 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-[#32CD32]/20 to-[#32CD32]/5 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                  {/* Bundle Icons Grid */}
                  <div className="grid grid-cols-2 gap-4 p-8">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center text-3xl">
                      💼
                    </div>
                    <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center text-3xl">
                      📚
                    </div>
                    <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center text-3xl">
                      🎬
                    </div>
                    <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center text-3xl">
                      🏥
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-[#32CD32]/10 text-[#32CD32] text-xs font-medium rounded">
                      MOST POPULAR
                    </span>
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded">
                      + DATA
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-lg">
                    Student Power Bundle
                  </h3>
                  <p className="text-gray-400 text-sm">
                    E-learning, research tools & 8GB Data
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-[#32CD32] font-bold text-2xl">
                      GH₵ 80
                    </span>
                    <span className="text-gray-500 text-sm">/month</span>
                  </div>
                  <Link
                    href="/bundles/student-power"
                    className="block w-full py-3 bg-[#32CD32] text-[#0A0A0A] font-semibold rounded-xl hover:bg-[#28a428] hover:shadow-lg hover:shadow-[#32CD32]/30 transition-all text-center"
                  >
                    Subscribe Now
                  </Link>
                </div>
              </div>

              {/* Floating Users Badge */}
              <div className="absolute -bottom-4 -right-4 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
                <p className="text-sm text-gray-500">Active Users</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  19M+
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
