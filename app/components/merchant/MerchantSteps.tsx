"use client";

import React from "react";
import { ClipboardList, Code, Rocket, Coins } from "lucide-react";
const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Register & Verify",
    description:
      "Create your merchant account and submit business documents. Approval takes less than 24 hours.",
  },
  {
    icon: Coins,
    step: "02",
    title: "Fund Wallet",
    description:
      "Deposit funds into your secure merchant wallet via Mobile Money or Bank Transfer to start purchasing.",
  },
  {
    icon: Code,
    step: "03",
    title: "Integrate or Buy",
    description:
      "Connect via our robust API for automated sales or manually purchase large blocks of data from the dashboard.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Start Reselling",
    description:
      "Dispense data to your customers instantly. Set your own prices and enjoy high profit margins.",
  },
];

const MerchantSteps: React.FC = () => {
  return (
    <section className="py-20 bg-[#0A0A0A] relative overflow-hidden">
      {/* Connector Line */}
      <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[#32CD32]/0 via-[#32CD32]/20 to-[#32CD32]/0 -translate-y-12" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It <span className="text-[#32CD32]">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From application to revenue in four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative group">
              <div className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-[#32CD32]/50 transition-all h-full z-10 relative">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#32CD32] to-[#28a428] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-[#0A0A0A]" />
                </div>
                <span className="block text-[#32CD32] font-bold text-sm mb-2 uppercase tracking-wider">
                  Step {item.step}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MerchantSteps;
