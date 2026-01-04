"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, ArrowRight, User } from "lucide-react";

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#32CD32]/10 text-[#32CD32] text-sm font-medium rounded-full mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let&apos;s Build This{" "}
              <span className="text-[#32CD32]">Vision Together</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              We&apos;re excited to partner and transform Ghana&apos;s digital
              landscape. Reach out to start the conversation.
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Contact Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#32CD32] rounded-2xl flex items-center justify-center">
                    <User className="w-8 h-8 text-[#0A0A0A]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Kwesi Amoafo-Yeboah
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Chairman, iZone Limited
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <a
                    href="mailto:kwesi@izone.com.gh"
                    className="flex items-center justify-center md:justify-start gap-3 text-gray-600 dark:text-gray-300 hover:text-[#32CD32] transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#32CD32]/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#32CD32]" />
                    </div>
                    <span>kwesi@izone.com.gh</span>
                  </a>
                  <a
                    href="tel:+233244340918"
                    className="flex items-center justify-center md:justify-start gap-3 text-gray-600 dark:text-gray-300 hover:text-[#32CD32] transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#32CD32]/10 rounded-xl flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#32CD32]" />
                    </div>
                    <span>+233 (0) 244 340 918</span>
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-40 bg-gray-200 dark:bg-gray-700" />

              {/* CTA */}
              <div className="flex-1 text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Ready to explore our digital bundles and transform your
                  productivity?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/bundles"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#32CD32] text-[#0A0A0A] font-semibold rounded-full hover:bg-[#28a428] hover:shadow-lg hover:shadow-[#32CD32]/30 transition-all group"
                  >
                    Explore Bundles
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-[#32CD32] text-[#32CD32] font-semibold rounded-full hover:bg-[#32CD32] hover:text-[#0A0A0A] transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Branding */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3">
              <div className="w-8 h-8 bg-[#FFCC00] rounded-lg flex items-center justify-center">
                <span className="text-[#0A0A0A] font-bold text-xs">MTN</span>
              </div>
              <span className="text-gray-400">×</span>
              <div className="w-8 h-8 bg-[#32CD32] rounded-lg flex items-center justify-center">
                <span className="text-[#0A0A0A] font-bold text-xs">iZ</span>
              </div>
              <span className="text-gray-500 dark:text-gray-400 ml-2">
                Jolli by iZone — Powered by MTN Ghana
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
