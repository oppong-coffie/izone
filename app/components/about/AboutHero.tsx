"use client";

import React from "react";
import { Sparkles, Globe, Zap } from "lucide-react";

const AboutHero: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="min-h-[60vh] bg-[#0A0A0A]" />;
  }

  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-[#0A0A0A] via-[#171717] to-[#0A0A0A] overflow-hidden flex items-center">
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
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#32CD32]/10 border border-[#32CD32]/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#32CD32]" />
            <span className="text-[#32CD32] text-sm font-medium">
              Jolli by iZone • Powered by MTN Ghana
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Democratizing <span className="text-[#32CD32]">Digital Access</span>
            <br />
            in Ghana
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            iZone Limited is a leading Ghanaian technology distribution company,
            enhancing productivity through technology with over a decade of
            experience supporting Ghana&apos;s mobile ecosystem.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-8 justify-center">
            <div className="flex items-center gap-2 text-gray-400">
              <Globe className="w-5 h-5 text-[#32CD32]" />
              <span className="text-sm">Ghana&apos;s Digital Partner</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Zap className="w-5 h-5 text-[#32CD32]" />
              <span className="text-sm">10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-[#32CD32] font-bold">19M+</span>
              <span className="text-sm">Users Reached</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
