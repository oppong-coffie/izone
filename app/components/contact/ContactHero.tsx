"use client";

import React from "react";
import { Sparkles } from "lucide-react";

const ContactHero: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="min-h-[40vh] bg-[#0A0A0A]" />;
  }

  return (
    <section className="relative min-h-[400px] bg-gradient-to-br from-[#0A0A0A] via-[#171717] to-[#0A0A0A] overflow-hidden flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#32CD32]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#32CD32]/5 rounded-full blur-3xl animate-pulse delay-1000" />
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
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#32CD32]/10 border border-[#32CD32]/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#32CD32]" />
            <span className="text-[#32CD32] text-sm font-medium">
              Get in Touch
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Let&apos;s Start a{" "}
            <span className="text-[#32CD32]">Conversation</span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Have questions about Jolli bundles or partnership opportunities?
            We&apos;d love to hear from you. Reach out and let&apos;s build the
            future of digital Ghana together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
