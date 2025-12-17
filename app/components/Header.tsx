"use client";

import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-[#32CD32]/30">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#32CD32] to-[#32CD32] rounded-xl flex items-center justify-center shadow-lg shadow-[#32CD32]/30">
            <span className="text-black font-bold text-lg">iZ</span>
          </div>
          <h1 className="text-white text-xl font-semibold">
            iZone <span className="text-[#32CD32]">Digistore</span>
          </h1>

          <p className="text-gray-400 mt-1">
            Welcome, <span className="font-medium text-[#32CD32]">User</span>
          </p>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-[#32CD32] transition-colors">
            Home
          </Link>
          <Link
            href="/products"
            className="hover:text-[#32CD32] transition-colors"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="hover:text-[#32CD32] transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#32CD32] transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/cart"
            className="relative hover:text-[#32CD32] transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-[#0A0A0A] bg-[#32CD32] rounded-full">
              0
            </span>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-gray-300 hover:text-[#32CD32] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-[#0A0A0A] border-t border-[#32CD32]/30">
          <div className="flex flex-col gap-4 p-4 text-sm text-gray-300">
            <Link
              href="/"
              className="hover:text-[#32CD32] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="hover:text-[#32CD32] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="hover:text-[#32CD32] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#32CD32] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-2 hover:text-[#32CD32] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <ShoppingCart className="w-5 h-5" />
              Cart
            </Link>
            <Link
              href="/login"
              className="hover:text-[#32CD32] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
