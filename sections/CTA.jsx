"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-32 md:py-40 px-6 md:px-10 bg-black overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C8A15A]/10 blur-[180px] rounded-full" />

      {/* TOP BORDER */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-gradient-to-r from-transparent via-[#C8A15A]/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        {/* LABEL */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-10 h-[1px] bg-[#C8A15A]" />

          <p className="uppercase tracking-[0.35em] text-[#C8A15A] text-xs">
            Start Your Project
          </p>

          <div className="w-10 h-[1px] bg-[#C8A15A]" />
        </div>

        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-[0.08em] text-[#F5F2EC] leading-tight max-w-4xl mx-auto">
          Cinematic Media
          <br />
          For Brands That
          <span className="text-[#C8A15A] italic font-medium normal-case tracking-normal">
            {" "}
            Value Perception
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-8 text-white/55 leading-8 text-sm md:text-base max-w-2xl mx-auto">
          Strategic visual storytelling engineered to elevate positioning,
          strengthen digital presence, and create premium brand perception.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-14">
          {/* PRIMARY */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative overflow-hidden bg-[#C8A15A] text-black px-8 py-5 rounded-full uppercase tracking-[0.2em] text-xs font-bold min-w-[240px]"
          >
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

            <span className="relative z-10 flex items-center justify-center gap-3">
              Schedule Consultation
              <ArrowUpRight size={16} />
            </span>
          </motion.button>

          {/* SECONDARY */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="border border-white/15 hover:border-[#C8A15A]/50 hover:bg-white/5 transition-all duration-500 text-[#F5F2EC] px-8 py-5 rounded-full uppercase tracking-[0.2em] text-xs font-semibold min-w-[240px]"
          >
            Get Custom Quote
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
