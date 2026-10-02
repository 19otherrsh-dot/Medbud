"use client";

import { motion } from "framer-motion";
import { Building2, Users, Globe2, PiggyBank } from "lucide-react";

const stats = [
  { value: "500+", label: "Verified Hospitals", icon: Building2 },
  { value: "1,000+", label: "Specialist Doctors", icon: Users },
  { value: "171", label: "Countries Served", icon: Globe2 },
  { value: "90%", label: "Cost Savings vs US", icon: PiggyBank },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function StatsBar() {
  return (
    <section className="relative -mt-10 lg:-mt-16 z-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                key={i}
                className="stat-card bg-white rounded-2xl p-6 lg:p-8 shadow-xl shadow-gray-200/50 text-center border border-gray-50 flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                  <Icon className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <p className="text-3xl lg:text-4xl font-black bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 mt-1 font-semibold">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
