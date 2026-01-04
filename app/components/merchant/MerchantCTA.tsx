"use client";

import React, { useState } from "react";
import { Loader2, ArrowRight } from "lucide-react";

const MerchantCTA: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="join-form" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-[#0A0A0A] rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-800 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to <span className="text-[#32CD32]">Scale?</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Fill out the form below to express your interest. Our partnership
              team will review your application and get back to you within 48
              hours.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-[#32CD32]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="w-10 h-10 text-[#32CD32]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Application Received!
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Thanks for your interest in partnering with Jolli. We'll be in
                touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#32CD32] outline-none transition-all dark:text-white"
                    placeholder="e.g. Acme Digital"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Website URL
                  </label>
                  <input
                    type="url"
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#32CD32] outline-none transition-all dark:text-white"
                    placeholder="https://..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#32CD32] outline-none transition-all dark:text-white"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#32CD32] outline-none transition-all dark:text-white"
                    placeholder="email@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Product Description
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#32CD32] outline-none transition-all dark:text-white"
                  placeholder="Tell us about your digital product and why it fits Jolli..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#32CD32] text-[#0A0A0A] font-bold rounded-xl hover:bg-[#28a428] hover:shadow-lg hover:shadow-[#32CD32]/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default MerchantCTA;
