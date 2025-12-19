"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Loader2,
  ArrowRight,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const LoginPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate inputs
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }

      console.log("✅ Login successful:", data);

      // Show success animation
      setShowSuccess(true);

      // Store user data in localStorage (or you can use cookies/session)
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect to home after animation
      setTimeout(() => {
        router.push("/home");
      }, 2000);
    } catch (err: any) {
      console.error("❌ Login error:", err);
      setError(err.message || "Login failed. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#0A0A0A] min-h-screen">
      {/* LEFT SIDE - Brand Section */}
      <div className="hidden lg:flex flex-col justify-between text-white px-12 py-14 relative overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#32CD32]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#32CD32]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#32CD32]/15 rounded-full blur-2xl animate-pulse" />

        {/* Content */}
        <div className="relative z-10">
          {/* Brand Logo */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-[#32CD32] to-[#32CD32] rounded-2xl flex items-center justify-center shadow-lg shadow-[#32CD32]/30">
              <span className="text-black font-extrabold text-3xl">iZ</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                iZone <span className="text-[#32CD32]">Digistore</span>
              </h2>
              <p className="text-sm text-gray-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Smart deals for smart people
              </p>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Welcome Back <br />
            <span className="bg-gradient-to-r from-[#32CD32] to-[#32CD32] bg-clip-text text-transparent">
              To iZone
            </span>
          </h1>

          {/* Feature List */}
          <ul className="space-y-5 flex gap-7">
            {[
              { icon: "⚡", text: "Fast" },
              { icon: "🛍️", text: "Affordable" },
              { icon: "📦", text: "Secure" },
              { icon: "💻", text: "Reliable" },
            ].map((feature, index) => (
              <li
                key={index}
                className="flex items-center group hover:translate-x-2 transition-transform duration-300"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {feature.icon}
                </span>
                <span className="text-gray-300 ml-2">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="relative z-10 text-sm text-gray-500">
          © 2025 iZone Digistore. All rights reserved.
        </div>
      </div>

      {/* RIGHT SIDE - Login Form */}
      <div className="flex items-center justify-center px-6 pt-6 relative overflow-hidden">
        {/* Mobile Background Glow */}
        <div className="lg:hidden absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#32CD32]/10 to-transparent" />

        <div className="w-full max-w-md relative z-10">
          {/* Form Card */}
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-3xl shadow-2xl p-4 border border-[#32CD32]/20 backdrop-blur-xl relative overflow-hidden">
            {/* Card Glow Effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#32CD32]/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h1 className="text-3xl font-bold text-white text-center mb-2">
                Sign In
              </h1>
              <p className="text-gray-400 text-center mb-4">
                Welcome back! Please sign in to continue.
              </p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Email */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#32CD32] transition-colors" />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-2 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#32CD32] focus:ring-2 focus:ring-[#32CD32]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#32CD32] transition-colors" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-12 pr-12 py-2 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#32CD32] focus:ring-2 focus:ring-[#32CD32]/20 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#32CD32] transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Error Display */}
                {error && (
                  <p className="text-red-500 text-sm text-center animate-pulse">
                    {error}
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2 bg-gradient-to-r from-[#32CD32] to-[#32CD32] text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#32CD32]/50 disabled:opacity-50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mt-6"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] text-gray-400">
                    Don't have an account?
                  </span>
                </div>
              </div>

              {/* Register Link */}
              <Link
                href="/register"
                className="block text-center text-[#32CD32] font-semibold hover:text-[#32CD32]/80 transition-all duration-300"
              >
                Create an account
              </Link>
            </div>
          </div>

          {/* Trust Badge */}
          <p className="text-center text-gray-500 text-sm mt-6">
            🔒 Your data is secure and encrypted
          </p>
        </div>

        {/* Success Modal */}
        {showSuccess && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
            <div className="bg-[#1A1A1A] p-8 rounded-2xl w-80 text-center border border-[#32CD32]/30 relative overflow-hidden">
              {/* Animated particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full animate-ping"
                    style={{
                      backgroundColor: i % 2 === 0 ? "#32CD32" : "#E8FF00",
                      left: `${10 + i * 7}%`,
                      top: `${20 + (i % 3) * 20}%`,
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: "1s",
                    }}
                  />
                ))}
              </div>

              {/* Success checkmark with ring animation */}
              <div className="relative mx-auto w-24 h-24 mb-6">
                <div className="absolute inset-0 rounded-full bg-[#32CD32]/20 animate-ping" />
                <div className="absolute inset-2 rounded-full bg-[#32CD32]/30 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <CheckCircle
                    className="w-16 h-16 text-[#32CD32] animate-bounce"
                    style={{ animationDuration: "0.6s" }}
                  />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-2 animate-pulse">
                👋 Welcome Back!
              </h2>
              <p className="text-gray-400 mb-4">Login successful</p>
              <p className="text-sm text-[#32CD32]">Redirecting to home...</p>

              {/* Loading bar animation */}
              <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#32CD32] to-[#E8FF00] rounded-full"
                  style={{
                    animation: "loadingBar 2s ease-out forwards",
                  }}
                />
              </div>
              <style jsx>{`
                @keyframes loadingBar {
                  from {
                    width: 0%;
                  }
                  to {
                    width: 100%;
                  }
                }
              `}</style>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
