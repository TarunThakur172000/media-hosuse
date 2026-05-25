"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Crown, Diamond, Clapperboard } from "lucide-react";

const features = [
  {
    icon: Clapperboard,
    title: "Cinematic Production",
    desc: "Luxury visuals crafted to capture attention, emotion, and premium brand perception.",
  },
  {
    icon: Crown,
    title: "Elite Brand Positioning",
    desc: "Content strategically designed to position your business above the competition.",
  },
  {
    icon: Diamond,
    title: "Authority & Influence",
    desc: "Visual storytelling engineered to build trust, credibility, and market dominance.",
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
          {/* BACKGROUND GLOW */}
          <div className="absolute -left-20 top-20 w-[300px] h-[300px] bg-[#C8A15A]/10 blur-[120px] rounded-full" />

          {/* GOLD FRAME */}
          <div className="absolute -inset-5 rounded-[2.5rem] border border-[#C8A15A]/20" />

          {/* MAIN IMAGE */}
          <div className="relative overflow-hidden rounded-[2.5rem]">
            <img
              src="/images/founder.png"
              alt="HIGH DESERT MEDIA"
              className="w-full h-[780px] object-cover hover:scale-105 transition-transform duration-[1800ms]"
            />

            {/* CINEMATIC OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* DARK VIGNETTE */}
            <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.9)]" />
          </div>

          {/* TOP FLOATING CARD */}

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden md:block absolute top-8 -right-10 backdrop-blur-xl bg-black/50 border border-white/10 rounded-2xl px-6 py-5 w-[240px]"
          >
            <p className="uppercase tracking-[0.25em] text-[#C8A15A] text-[10px] mb-2">
              Founder • HDM
            </p>

            <h4 className="text-white text-lg font-semibold leading-snug">
              Building modern cinematic branding for real estate.
            </h4>
          </motion.div>

          {/* BOTTOM FLOATING CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 left-8 backdrop-blur-xl bg-black/40 border border-white/10 px-6 py-5 rounded-2xl"
          >
            <p className="uppercase tracking-[0.25em] text-[#C8A15A] text-[10px] mb-3">
              Creative Direction
            </p>

            <div className="space-y-2">
              <h4 className="text-white text-2xl font-black">
                Cinematic
                <br />
                Storytelling
              </h4>

              <p className="text-white/50 text-xs uppercase tracking-[0.15em]">
                Luxury Real Estate Media
              </p>
            </div>
          </motion.div>

          {/* SIDE VERTICAL TEXT */}
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden xl:block">
            <p className="rotate-[-90deg] text-white/20 uppercase tracking-[0.6em] text-xs">
              HIGH DESERT MEDIA
            </p>
          </div>
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
            <span className="text-[#C8A15A] italic font-medium normal-case tracking-normal">
              AUTHORITY
            </span>
          </h2>

          {/* DESCRIPTION */}
          <div className="mt-10 max-w-2xl space-y-6">
            <p className="text-white/70 text-lg leading-9">
              HIGH DESERT MEDIA is built for brands that understand perception
              is everything.
            </p>

            <p className="text-white/65 text-lg leading-9">
              We create cinematic visuals and strategic content designed to
              elevate your image, capture attention, and position your brand at
              the highest level of your industry.
            </p>

            <p className="text-white/60 text-lg leading-9">
              Our team combines luxury filmmaking, premium branding, and
              social-first marketing to transform ordinary businesses into
              authority-driven brands people instantly trust.
            </p>

            <p className="text-white/60 text-lg leading-9">
              From luxury real estate and automotive brands to high-end
              companies and entrepreneurs, every project is crafted with one
              purpose — making your business look world-class.
            </p>

            <p className="text-white/70 text-lg leading-9">
              Because in today’s market, attention is currency —
              <br />
              and cinematic branding wins.
            </p>
          </div>

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
          <Link href="/portfolio">
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
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
