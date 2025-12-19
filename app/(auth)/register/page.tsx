"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Loader2,
  ArrowRight,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Sparkles,
  CheckCircle,
  Phone,
} from "lucide-react";

const Page = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  // verification flow state
  const [verificationPin, setVerificationPin] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [enteredPin, setEnteredPin] = useState("");
  const [verificationError, setVerificationError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // Generate a random 4-digit PIN
  const generatePin = (): string => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  // Called when user clicks "Create Account" button
  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form inputs first
    if (!fullName || !email || !password || !confirmPassword) {
      setVerificationError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setVerificationError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setVerificationError("Password must be at least 8 characters");
      return;
    }

    setIsLoading(true);
    setVerificationError("");

    // Generate verification PIN
    const pin = generatePin();
    console.log("🔑 Generated PIN for", email, ":", pin);
    setVerificationPin(pin);

    try {
      // Send verification email via API
      const res = await fetch("/api/send-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name: fullName, pin }),
      });

      // Send   verification via SMS
      const smsRes = await fetch("/api/send-sms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, pin }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to send verification email");
      }

      console.log("✅ Verification email sent");
      setShowModal(true);
    } catch (error: any) {
      console.error("❌ Error sending verification email:", error);
      // Still show modal for development - PIN is logged to console
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Called when user clicks "Verify" button in the modal
  const handleVerifySubmit = async () => {
    setVerificationError("");

    if (enteredPin === verificationPin) {
      setIsLoading(true);
      try {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: fullName,
            email,
            password,
            phone,
            verificationPin: verificationPin,
          }),
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Registration failed");
        }
        // Success - show success animation
        console.log("✅ Registration successful:", data);
        setShowSuccess(true);

        // Redirect to home after animation
        setTimeout(() => {
          router.push("/home");
        }, 2500);
      } catch (error: any) {
        console.error(error);
        setVerificationError(error.message || "Registration failed");
        setIsLoading(false);
      }
    } else {
      setVerificationError("Invalid code, please try again.");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#0A0A0A]">
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
            Power Your <br />
            <span className="bg-gradient-to-r from-[#32CD32] to-[#32CD32] bg-clip-text text-transparent">
              Digital Lifestyle
            </span>
          </h1>

          <p className="text-gray-400 max-w-md mb-12 text-lg leading-relaxed">
            From gadgets ⚡ to digital tools 💻, iZone Digistore brings you
            affordable and high-quality tech.
          </p>

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
                <span className="text-gray-300">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="relative z-10 text-sm text-gray-500">
          © 2025 iZone Digistore. All rights reserved.
        </div>
      </div>

      {/* RIGHT SIDE - Form Section */}
      <div className="flex items-center justify-center px-6 pt-6 relative overflow-hidden">
        {/* Mobile Background Glow */}
        <div className="lg:hidden absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#E8FF00]/10 to-transparent" />

        <div className="w-full max-w-md relative z-10">
          {/* Mobile Logo */}
          <div className="text-center mb-8 lg:hidden">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="w-14 h-14 bg-gradient-to-br from-[#E8FF00] to-[#F5FF80] rounded-xl flex items-center justify-center shadow-lg shadow-[#E8FF00]/30">
                <span className="text-[#0A0A0A] font-bold text-2xl">iZ</span>
              </div>
              <span className="text-2xl font-bold text-white">
                iZone<span className="text-[#E8FF00]">Digistore</span>
              </span>
            </Link>
          </div>

          {/* Form Card */}
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-3xl shadow-2xl p-4 border border-[#E8FF00]/20 backdrop-blur-xl relative overflow-hidden">
            {/* Card Glow Effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#32CD32]/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h1 className="text-3xl font-bold text-white text-center">
                Create Account
              </h1>
              <p className="text-gray-400 text-center mb-4">
                Join iZone and start your digital journey
              </p>

              <form className="space-y-5" onSubmit={handleVerify}>
                {/* Full Name */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#E8FF00] transition-colors" />
                    <input
                      type="text"
                      placeholder="John Doe"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-12 pr-4 py-2 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#E8FF00] focus:ring-2 focus:ring-[#E8FF00]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#E8FF00] transition-colors" />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-2 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#E8FF00] focus:ring-2 focus:ring-[#E8FF00]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#E8FF00] transition-colors" />
                    <input
                      type="tel"
                      placeholder="123-456-7890"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-12 pr-4 py-2 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#E8FF00] focus:ring-2 focus:ring-[#E8FF00]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#E8FF00] transition-colors" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-12 pr-12 py-2 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#E8FF00] focus:ring-2 focus:ring-[#E8FF00]/20 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#E8FF00] transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#E8FF00] transition-colors" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full pl-12 pr-12 py-2 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#E8FF00] focus:ring-2 focus:ring-[#E8FF00]/20 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#E8FF00] transition-colors"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Validation Error Display */}
                {verificationError && !showModal && (
                  <p className="text-red-500 text-sm text-center">
                    {verificationError}
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
                      Create Account
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                {/* Verification Modal */}
                {showModal && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
                    <div className="bg-[#1A1A1A] p-6 rounded-2xl w-80 text-center border border-[#32CD32]/30 relative overflow-hidden">
                      {/* Success Animation */}
                      {showSuccess ? (
                        <div className="py-8">
                          {/* Animated particles */}
                          <div className="absolute inset-0 overflow-hidden">
                            {[...Array(12)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute w-2 h-2 rounded-full animate-ping"
                                style={{
                                  backgroundColor:
                                    i % 2 === 0 ? "#32CD32" : "#E8FF00",
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
                            🎉 Success!
                          </h2>
                          <p className="text-gray-400 mb-4">
                            Account created successfully
                          </p>
                          <p className="text-sm text-[#32CD32]">
                            Redirecting to home...
                          </p>

                          {/* Loading bar animation */}
                          <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-[#32CD32] to-[#E8FF00] rounded-full"
                              style={{
                                animation: "loadingBar 2.5s ease-out forwards",
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
                      ) : (
                        /* Verification Input */
                        <>
                          <h2 className="text-xl font-bold mb-4 text-white">
                            Enter Verification Code
                          </h2>
                          <p className="text-gray-400 text-sm mb-4">
                            Check your console for the 4-digit PIN
                          </p>
                          <input
                            type="text"
                            maxLength={4}
                            value={enteredPin}
                            onChange={(e) =>
                              setEnteredPin(e.target.value.replace(/\D/g, ""))
                            }
                            placeholder="••••"
                            className="w-full px-3 py-4 mb-3 text-center text-2xl tracking-[0.5em] font-bold bg-black/30 border border-gray-600 rounded-xl text-white focus:border-[#32CD32] focus:outline-none focus:ring-2 focus:ring-[#32CD32]/20 transition-all"
                          />
                          {verificationError && (
                            <p className="text-red-500 text-sm mb-2 animate-pulse">
                              {verificationError}
                            </p>
                          )}
                          <button
                            type="button"
                            onClick={handleVerifySubmit}
                            disabled={isLoading || enteredPin.length !== 4}
                            className="w-full py-3 bg-[#32CD32] text-black font-semibold rounded-xl disabled:opacity-50 hover:shadow-lg hover:shadow-[#32CD32]/30 transition-all"
                          >
                            {isLoading ? (
                              <span className="flex items-center justify-center gap-2">
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Verifying...
                              </span>
                            ) : (
                              "Verify"
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setShowModal(false);
                              setEnteredPin("");
                              setVerificationError("");
                            }}
                            className="mt-3 w-full py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-xl transition-colors"
                          >
                            Cancel
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </form>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] text-gray-400">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="text-[#32CD32] font-semibold hover:text-[#32CD32]/10 transition-all duration-300"
                    >
                      Sign In
                    </Link>
                  </span>
                </div>
              </div>

              {/* Sign In Link */}
            </div>
          </div>

          {/* Trust Badge */}
          <p className="text-center text-gray-500 text-sm mt-6">
            🔒 Your data is secure and encrypted
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
