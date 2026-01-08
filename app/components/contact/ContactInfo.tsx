"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock, User } from "lucide-react";
import Image from "next/image";

const contactDetails = [
  {
    icon: User,
    label: "Chairman",
    value: "Kwesi Amoafo-Yeboah",
    subtext: "iZone Limited",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kwesi@izone.com.gh",
    href: "mailto:kwesi@izone.com.gh",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+233 (0) 244 340 918",
    href: "tel:+233244340918",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Accra, Ghana",
    subtext: "West Africa",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri: 9:00 AM - 5:00 PM",
    subtext: "GMT",
  },
];

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Contact Information
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Reach out to us for partnership discussions, bundle inquiries, or any
          questions about our services.
        </p>
      </div>

      <div className="space-y-4">
        {contactDetails.map((contact, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-[#32CD32]/50 transition-colors"
          >
            <div className="w-12 h-12 bg-[#32CD32]/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <contact.icon className="w-6 h-6 text-[#32CD32]" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {contact.label}
              </p>
              {contact.href ? (
                <a
                  href={contact.href}
                  className="text-gray-900 dark:text-white font-medium hover:text-[#32CD32] transition-colors"
                >
                  {contact.value}
                </a>
              ) : (
                <p className="text-gray-900 dark:text-white font-medium">
                  {contact.value}
                </p>
              )}
              {contact.subtext && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {contact.subtext}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Partnership Card */}
      <div className="p-6 bg-gradient-to-br from-[#32CD32]/10 to-[#32CD32]/5 rounded-2xl border border-[#32CD32]/20">
        <div className="flex items-center gap-4 mb-4">
          <Image
            src="/izone3.png"
            alt="iZone Logo"
            width={64}
            height={64}
            className="w-10 h-10"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Jolli by iZone
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Powered by iZone — Ghana&apos;s premier digital bundling platform
          combining curated tools with mobile data.
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
