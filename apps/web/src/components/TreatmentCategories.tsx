"use client";

import { motion } from "framer-motion";
import { Activity, Microscope, Bone, HeartPulse, Baby, Sparkles, Smile, BrainCircuit } from "lucide-react";

const treatments = [
  { name: "Cardiac Surgery", procedures: "Bypass, Valve Replacement, Stents", usCost: "$100,000+", indiaCost: "$5,000", savings: "95%", icon: Activity, popular: true, color: "text-rose-500" },
  { name: "Oncology", procedures: "CAR-T Therapy, Chemotherapy, Proton Beam", usCost: "$150,000+", indiaCost: "$12,000", savings: "92%", icon: Microscope, popular: true, color: "text-violet-500" },
  { name: "Orthopedics", procedures: "Knee/Hip Replacement, Spine Surgery", usCost: "$50,000+", indiaCost: "$4,500", savings: "91%", icon: Bone, popular: false, color: "text-amber-500" },
  { name: "Organ Transplant", procedures: "Kidney, Liver Transplant", usCost: "$300,000+", indiaCost: "$25,000", savings: "92%", icon: HeartPulse, popular: false, color: "text-red-500" },
  { name: "IVF & Fertility", procedures: "IVF, ICSI, Egg Freezing", usCost: "$20,000+", indiaCost: "$3,000", savings: "85%", icon: Baby, popular: false, color: "text-pink-500" },
  { name: "Cosmetic Surgery", procedures: "Rhinoplasty, Liposuction, Hair Transplant", usCost: "$15,000+", indiaCost: "$2,500", savings: "83%", icon: Sparkles, popular: false, color: "text-fuchsia-500" },
  { name: "Dental", procedures: "Implants, Veneers, Root Canal", usCost: "$10,000+", indiaCost: "$800", savings: "92%", icon: Smile, popular: false, color: "text-cyan-500" },
  { name: "Neurosurgery", procedures: "Brain Tumor, Deep Brain Stimulation", usCost: "$120,000+", indiaCost: "$10,000", savings: "92%", icon: BrainCircuit, popular: false, color: "text-indigo-500" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function TreatmentCategories() {
  return (
    <section id="treatments" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
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
            Treatment Categories
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            Save Up to <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">95%</span> on World-Class Treatment
          </h2>
          <p className="mt-4 text-lg text-gray-500 font-medium leading-relaxed">
            India offers the same quality of care as the US and UK — at a fraction of the cost. All prices are transparent and guaranteed for 30 days.
          </p>
        </motion.div>

        {/* Treatment grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {treatments.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -5 }}
                key={i}
                className="group relative bg-white rounded-2xl border border-gray-100 p-6 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Background radial glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {t.popular && (
                  <span className="absolute -top-2.5 right-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Popular
                  </span>
                )}

                <div className={`mb-5 p-3 rounded-xl bg-gray-50 inline-block group-hover:scale-110 transition-transform duration-300 ${t.color} relative z-10`}>
                  <Icon className="w-7 h-7" strokeWidth={2} />
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-1 relative z-10">{t.name}</h3>
                <p className="text-xs font-medium text-gray-500 mb-5 leading-relaxed relative z-10">{t.procedures}</p>

                <div className="flex items-end justify-between pt-4 border-t border-gray-50 relative z-10">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">US Cost</p>
                    <p className="text-xs text-gray-400 line-through mb-1">{t.usCost}</p>
                    
                    <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mt-1">India Cost</p>
                    <p className="text-xl font-black text-emerald-600">{t.indiaCost}</p>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-black px-3 py-1.5 rounded-lg shadow-sm">
                    -{t.savings}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group">
            Explore All 45+ Specialties 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
