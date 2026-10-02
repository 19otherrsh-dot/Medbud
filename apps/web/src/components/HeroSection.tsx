"use client";

import { motion } from "framer-motion";
import { Play, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden pt-10">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full w-fit shadow-sm">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
              AI-Powered Medical Tourism Platform
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tighter text-gray-900">
              World-Class Indian
              <br />
              Healthcare,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Made Accessible</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-500 max-w-xl leading-relaxed">
              From your first symptom to full recovery — MedBud connects you
              with verified hospitals, transparent pricing, and a dedicated care
              coordinator. No middlemen. No hidden fees.
            </p>

            {/* CTA group */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl shadow-blue-500/20 text-base"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center">
                  Find Your Treatment
                  <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 font-medium transition-colors text-base"
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600 group-hover:shadow-lg transition-shadow">
                  <Play className="w-4 h-4 ml-1 fill-current" />
                </div>
                Watch How It Works
              </motion.button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-gray-100">
              <div className="flex -space-x-3">
                {["bg-blue-400", "bg-emerald-400", "bg-violet-400", "bg-amber-400"].map((color, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm`}
                  >
                    {["A", "G", "P", "D"][i]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Trusted by 7,300+ patients</p>
                <div className="flex items-center gap-1 mt-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs font-medium text-gray-500 ml-1">4.9/5 avg rating</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Visual showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Main card */}
            <div className="relative z-10 glass-card rounded-3xl p-8 shadow-2xl shadow-blue-500/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center shadow-md">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">AI Treatment Match</p>
                  <p className="text-xs text-gray-400 font-medium">Finding best options...</p>
                </div>
                <div className="ml-auto flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-semibold">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  Live Match
                </div>
              </div>

              {/* Mock results */}
              <div className="flex flex-col gap-3">
                {[
                  { name: "Apollo Hospitals, Chennai", match: "97%", specialty: "Cardiac Bypass", cost: "$5,200", accred: "JCI" },
                  { name: "Medanta, Gurugram", match: "94%", specialty: "Cardiac Bypass", cost: "$5,800", accred: "NABH" },
                  { name: "Fortis Memorial, Delhi", match: "91%", specialty: "Cardiac Bypass", cost: "$4,900", accred: "JCI" },
                ].map((h, i) => (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    key={i}
                    className={`relative overflow-hidden flex items-center gap-4 p-4 rounded-2xl transition-all cursor-pointer group ${
                      i === 0
                        ? "bg-gradient-to-r from-blue-50 to-white border border-blue-200 shadow-sm"
                        : "bg-white border border-gray-100 hover:border-blue-100"
                    }`}
                  >
                    {/* Hover reveal button */}
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-end pr-4">
                      <span className="text-xs font-bold text-blue-600">View →</span>
                    </div>

                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold shadow-sm ${
                      i === 0 ? "bg-gradient-to-br from-blue-600 to-blue-500 text-white" : "bg-gray-50 text-gray-500 border border-gray-100"
                    }`}>
                      {i === 0 ? "★" : `#${i + 1}`}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-gray-900 truncate">{h.name}</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[11px] font-medium text-gray-500">{h.specialty}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 rounded">{h.accred}</span>
                      </div>
                    </div>
                    <div className="text-right group-hover:opacity-0 transition-opacity">
                      <p className={`text-sm font-extrabold ${i === 0 ? "text-blue-600" : "text-gray-900"}`}>{h.match}</p>
                      <p className="text-xs text-gray-500 font-medium">Match</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-100">
                <p className="text-xs text-gray-500 font-medium">Save up to <span className="font-bold text-emerald-600">90%</span> vs US pricing</p>
                <button className="text-xs font-bold text-blue-600 hover:text-blue-700">View All Matches →</button>
              </div>
            </div>

            {/* Floating accent card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-8 z-20 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Visa Approved</p>
                  <p className="text-[10px] font-medium text-gray-500 uppercase tracking-wider mt-0.5">E-Medical Visa · 48hrs</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
