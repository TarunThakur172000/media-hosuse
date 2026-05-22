"use client";

import { motion } from "framer-motion";
import { Crown, Diamond, Clapperboard } from "lucide-react";

const features = [
  {
    icon: Clapperboard,
    title: "Cinematic Storytelling",
    desc: "Every frame is engineered to elevate perception and emotional impact.",
  },
  {
    icon: Crown,
    title: "Premium Positioning",
    desc: "Luxury visuals designed to position your brand above the competition.",
  },
  {
    icon: Diamond,
    title: "Authority Driven",
    desc: "Content systems built to create trust, prestige, and market authority.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 md:py-36 px-6 md:px-10 bg-[#0A0A0A] overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C8A15A]/10 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 lg:gap-28 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* GOLD BORDER */}
          <div className="absolute -inset-4 border border-[#C8A15A]/20 rounded-[2rem]" />

          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src="/images/founder.png"
              alt="HIGH DESERT MEDIA"
              className="w-full h-[650px] object-cover hover:scale-105 transition-transform duration-1000"
            />

            {/* IMAGE OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
          </div>

          {/* FLOATING BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-8 left-8 backdrop-blur-xl bg-black/40 border border-white/10 px-6 py-4 rounded-2xl"
          >
            <p className="uppercase tracking-[0.25em] text-[#C8A15A] text-[10px] mb-2">
              Cinematic Luxury
            </p>

            <h4 className="text-white text-lg font-semibold">
              Premium Visual Authority
            </h4>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* SMALL LABEL */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-[#C8A15A]" />

            <p className="uppercase tracking-[0.35em] text-[#C8A15A] text-xs md:text-sm">
              About HDM
            </p>
          </div>

          {/* TITLE */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.05] tracking-[0.06em] text-[#F5F2EC]">
            Cinematic
            <br />
            Branding
            <br />
            <span className="text-[#C8A15A] italic font-medium normal-case tracking-normal">
              Engineered For
            </span>
            <br />
            Premium Perception.
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-10 text-white/65 text-lg leading-9 max-w-2xl">
            HIGH DESERT MEDIA creates cinematic visuals for luxury real estate,
            automotive brands, and premium businesses seeking authority-driven
            branding and elite market positioning.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-3 gap-8 mt-16">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="w-14 h-14 rounded-2xl border border-[#C8A15A]/20 bg-[#111111] flex items-center justify-center mb-5 group-hover:border-[#C8A15A] transition-all duration-500">
                    <Icon size={24} className="text-[#C8A15A]" />
                  </div>

                  <h3 className="text-[#F5F2EC] uppercase tracking-[0.12em] text-sm font-semibold mb-4 leading-6">
                    {item.title}
                  </h3>

                  <p className="text-white/50 text-sm leading-7">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-16 group relative overflow-hidden border border-[#C8A15A]/40 px-8 py-5 rounded-full uppercase tracking-[0.2em] text-xs font-semibold text-[#F5F2EC]"
          >
            <span className="absolute inset-0 bg-[#C8A15A] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
              Explore Our Work
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
