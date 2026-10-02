"use client";

import { motion } from "framer-motion";
import { MessageSquareText, ShieldCheck, PlaneTakeoff, HeartHandshake } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Tell Us Your Needs",
    description:
      "Describe your symptoms or upload medical reports in any language. Our AI triages your condition and recommends specialties.",
    icon: MessageSquareText,
    color: "from-blue-500 to-blue-600",
    shadow: "shadow-blue-500/20",
  },
  {
    step: "02",
    title: "Get Matched with the Best",
    description:
      "Our AI ranks hospitals and doctors based on your condition, budget, language, and outcomes. Compare side-by-side with transparent pricing.",
    icon: ShieldCheck,
    color: "from-violet-500 to-violet-600",
    shadow: "shadow-violet-500/20",
  },
  {
    step: "03",
    title: "We Handle Everything",
    description:
      "Visa processing, flight booking, hospital-adjacent accommodation, airport transfers, and a dedicated care coordinator — all in one place.",
    icon: PlaneTakeoff,
    color: "from-emerald-500 to-emerald-600",
    shadow: "shadow-emerald-500/20",
  },
  {
    step: "04",
    title: "Recover with Confidence",
    description:
      "Post-treatment telemedicine follow-ups, recovery tracking, medication guidance, and structured handoff to your home doctor.",
    icon: HeartHandshake,
    color: "from-rose-500 to-rose-600",
    shadow: "shadow-rose-500/20",
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

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Your Healing Journey,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Simplified</span>
          </h2>
          <p className="mt-5 text-lg text-gray-500 font-medium leading-relaxed">
            Four steps from your first question to full recovery. We orchestrate
            the entire experience so you can focus on what matters — getting better.
          </p>
        </motion.div>

        {/* Steps container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              className="h-full bg-gradient-to-r from-blue-500 via-violet-500 to-rose-500"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  variants={cardVariants}
                  key={i}
                  className="group bg-white rounded-3xl border border-gray-100 p-8 hover:border-blue-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center lg:items-start text-center lg:text-left relative overflow-hidden"
                >
                  {/* Step number background watermark */}
                  <span className="absolute -top-4 -right-4 text-9xl font-black text-gray-50/50 group-hover:text-blue-50/50 transition-colors pointer-events-none">
                    {item.step}
                  </span>

                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-8 shadow-xl ${item.shadow} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10`}>
                    <Icon className="w-8 h-8" strokeWidth={2} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium relative z-10">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
