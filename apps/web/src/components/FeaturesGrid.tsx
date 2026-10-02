"use client";

import { motion } from "framer-motion";
import { Brain, FileCheck2, Globe, Languages, HeartPulse, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "AI-Powered Doctor Matching",
    description: "Our ML engine ranks hospitals and doctors based on your condition, budget, language, and verified outcome data — not ad spend.",
    icon: Brain,
    color: "from-blue-500 to-violet-500",
  },
  {
    title: "Transparent, Guaranteed Pricing",
    description: "Itemized cost estimates locked for 30 days. No hidden fees. Multi-currency billing. Escrow model protects your payment.",
    icon: FileCheck2,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Visa & Travel Handled",
    description: "E-Medical Visa automation for 171 countries, flight booking, hospital-adjacent accommodation, airport transfers, and a personal city concierge.",
    icon: Globe,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "20+ Language Support",
    description: "AI real-time translation during video consultations. Medical reports explained in your language. Consent forms you can actually understand.",
    icon: Languages,
    color: "from-rose-500 to-pink-500",
  },
  {
    title: "Post-Treatment Home Recovery",
    description: "Recovery tracking, AI symptom check-ins, telemedicine follow-ups with your Indian surgeon, and structured handoff to your home doctor.",
    icon: HeartPulse,
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Embedded Travel Insurance",
    description: "Medical complication coverage, trip cancellation, emergency evacuation, and repatriation — purchased in one click at booking. No competitor offers this.",
    icon: ShieldCheck,
    color: "from-cyan-500 to-blue-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function FeaturesGrid() {
  return (
    <section className="py-24 lg:py-32 bg-white relative">
      {/* Background dot pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">
            Why MedBud
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            The Only <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Full-Stack</span> Medical Tourism Platform
          </h2>
          <p className="mt-4 text-lg text-gray-500 font-medium leading-relaxed">
            Every competitor handles part of your journey. MedBud handles all of it — from first question to full recovery.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -5 }}
                key={i}
                className="group bg-white rounded-2xl border border-gray-100 p-8 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-7 h-7" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-sm font-medium text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
