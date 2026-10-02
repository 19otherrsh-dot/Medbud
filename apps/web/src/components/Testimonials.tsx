"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Al-Rashidi",
    country: "Iraq",
    flag: "🇮🇶",
    procedure: "Cardiac Bypass Surgery",
    hospital: "Apollo Hospitals, Chennai",
    quote: "MedBud found me the best cardiac surgeon within 24 hours. They handled my visa, flights, halal accommodation, and even had an Arabic-speaking coordinator. I saved $95,000 compared to going to Germany.",
    rating: 5,
    savings: "$95,000",
  },
  {
    name: "Grace Okonkwo",
    country: "Nigeria",
    flag: "🇳🇬",
    procedure: "Breast Cancer Treatment",
    hospital: "Tata Memorial, Mumbai",
    quote: "As a cancer patient, I was terrified of traveling abroad for treatment. MedBud's care coordinator was with me every step. The post-treatment follow-ups with my surgeon via video call gave me so much peace of mind.",
    rating: 5,
    savings: "$120,000",
  },
  {
    name: "Dmitri Volkov",
    country: "Russia",
    flag: "🇷🇺",
    procedure: "Knee Replacement + Ayurveda",
    hospital: "Fortis, Delhi + Kerala Retreat",
    quote: "I combined a knee replacement with a 2-week Ayurveda recovery program. MedBud packaged the whole thing — multi-city itinerary, single payment, recovery tracking. Incredible experience.",
    rating: 5,
    savings: "$38,000",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">
            Patient Stories
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            Trusted by Patients from{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">40+ Countries</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 font-medium leading-relaxed">
            Real stories from real patients. Every review is verified and comes from a confirmed booking.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5 }}
              key={i}
              className="relative bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col z-10 overflow-hidden group"
            >
              {/* Decorative Quote Mark */}
              <Quote className="absolute top-6 right-6 w-16 h-16 text-gray-50 -z-10 group-hover:text-blue-50 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-base text-gray-600 font-medium leading-relaxed flex-1 mb-6 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Treatment tag */}
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="inline-block text-[11px] font-bold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 shadow-sm">
                  {t.procedure}
                </span>
                <span className="inline-block text-[11px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100 shadow-sm">
                  Saved {t.savings}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-5 border-t border-gray-50">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white text-base font-bold shadow-md ring-2 ring-white">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs font-medium text-gray-500 mt-0.5">
                    {t.flag} {t.country} · {t.hospital}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
