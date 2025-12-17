"use client";

import "./globals.css";
import Header from "./components/Header";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideHeader =
    pathname.startsWith("/auth") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/register");
  return (
    <html lang="en">
      <body className="bg-[#0A0A0A] text-white">
        {!hideHeader && <Header />}
        {children}
      </body>
    </html>
  );
}
