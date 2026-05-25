"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero({ setOpenModal }) {
  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center bg-black">
      {/* CINEMATIC VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/70 z-[1]" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black z-[2]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,161,90,0.18),transparent_45%)] z-[2]" />

      {/* GRAIN */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] z-[3]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="max-w-5xl">
          {/* SMALL LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-[#C8A15A]" />

            <p className="uppercase tracking-[0.35em] text-[#C8A15A] text-xs md:text-sm">
              HIGH DESERT MEDIA
            </p>
          </motion.div>

          {/* MAIN TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black uppercase leading-[0.9] tracking-[0.08em] text-[#F5F2EC]"
          >
            VISUAL
            <br />
            AUTHORITY
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10 max-w-2xl text-base md:text-xl text-white/70 leading-8 md:leading-9"
          >
            Luxury cinematic media for real estate brands, agents, developers,
            and properties built to stand out.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-5 mt-14"
          >
            {/* PRIMARY */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setOpenModal(true)}
              className="group relative overflow-hidden bg-[#C8A15A] text-black px-9 py-5 rounded-full uppercase tracking-[0.2em] text-xs md:text-sm font-bold"
            >
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

              <span className="relative z-10">Book Strategy Call</span>
            </motion.button>

            {/* SECONDARY */}
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="border border-white/20 hover:border-[#C8A15A] hover:bg-white/5 transition-all duration-500 text-[#F5F2EC] px-9 py-5 rounded-full uppercase tracking-[0.2em] text-xs md:text-sm font-semibold"
              >
                View Portfolio
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 12, 0] }}
        transition={{
          delay: 1.5,
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <p className="uppercase tracking-[0.3em] text-[10px] text-white/40 mb-3">
          Scroll
        </p>

        <ChevronDown size={20} className="text-[#C8A15A]" />
      </motion.div>
    </section>
  );
}
