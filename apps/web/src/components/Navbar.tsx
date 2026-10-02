"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Info } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-gray-900 text-white text-xs sm:text-sm font-medium py-2 px-4 relative z-50 flex items-center justify-center overflow-hidden"
          >
            <span className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Rated #1 Medical Tourism Platform 2026 by Global Health Standards
            </span>
            <button 
              onClick={() => setShowBanner(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-800 rounded transition-colors text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
        style={{ top: showBanner ? (scrolled ? "0" : "auto") : "0" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                Med<span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Bud</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/#how-it-works" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                How It Works
              </Link>
              <Link href="/#treatments" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                Treatments
              </Link>
              <Link href="/hospitals" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                Hospitals
              </Link>
              <Link href="/#pricing" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                Pricing
              </Link>
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link href="/auth/login" className="text-sm font-medium text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg transition-colors">
                Sign In
              </Link>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group overflow-hidden text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <Link href="/auth/register" className="relative z-10 text-white no-underline">Get Started Free</Link>
              </motion.button>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-3">
                <Link href="#how-it-works" className="text-sm font-medium text-gray-600 py-2">How It Works</Link>
                <Link href="#treatments" className="text-sm font-medium text-gray-600 py-2">Treatments</Link>
                <Link href="#hospitals" className="text-sm font-medium text-gray-600 py-2">Hospitals</Link>
                <Link href="#pricing" className="text-sm font-medium text-gray-600 py-2">Pricing</Link>
                <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
                  <button className="text-sm font-medium text-gray-700 py-2">Sign In</button>
                  <button className="text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 rounded-xl">Get Started Free</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
