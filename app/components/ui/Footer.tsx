"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";

const footerLinks = {
  bundles: [
    { name: "Business Essentials", href: "/bundles" },
    { name: "Student Power", href: "/bundles" },
    { name: "Creator Pro", href: "/bundles" },
    { name: "Health-Connect", href: "/bundles" },
    { name: "View All Bundles", href: "/bundles" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Partnership", href: "/about#partnership" },
    { name: "Merchant Center", href: "/merchant" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/faq" },
    { name: "Help Center", href: "/help" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/izone3.png"
                alt="iZone Logo"
                width={50}
                height={50}
                className="w-12 h-12"
              />
              <div className="flex flex-col">
                <h2 className="text-white text-xl font-bold tracking-tight">
                  <span className="text-[#32CD32]">iZone</span>
                </h2>
                <span className="text-[10px] text-gray-400 tracking-wider uppercase">
                  Powered by MTN
                </span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Democratizing digital access in Ghana. Curated digital solutions
              bundled with MTN Data for students, professionals, and businesses.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:kwesi@izone.com.gh"
                className="flex items-center gap-3 text-gray-400 hover:text-[#32CD32] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">kwesi@izone.com.gh</span>
              </a>
              <a
                href="tel:+233244340918"
                className="flex items-center gap-3 text-gray-400 hover:text-[#32CD32] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+233 (0) 244 340 918</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Accra, Ghana</span>
              </div>
            </div>
          </div>

          {/* Bundles Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Bundles</h3>
            <ul className="space-y-3">
              {footerLinks.bundles.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#32CD32] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#32CD32] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#32CD32] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear ?? "2024"} iZone Limited. All rights reserved.
            </p>

            {/* Partnership Badges */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#FFCC00] rounded-lg flex items-center justify-center">
                  <span className="text-[#0A0A0A] font-bold text-[10px]">
                    MTN
                  </span>
                </div>
                <span className="text-gray-500 text-xs">×</span>
                <Image
                  src="/izone3.png"
                  alt="iZone Logo"
                  width={50}
                  height={50}
                  className="w-8 h-8"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#32CD32] hover:text-[#0A0A0A] transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-[#32CD32] rounded-full flex items-center justify-center text-[#0A0A0A] shadow-lg hover:shadow-[#32CD32]/30 transition-all duration-300 z-50 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
