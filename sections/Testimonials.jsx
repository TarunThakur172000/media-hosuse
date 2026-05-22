"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Luxury Real Estate Group",
    role: "Real Estate Branding",
    review:
      "The visual quality completely transformed how our listings were perceived online. The cinematic presentation elevated the entire brand experience.",
  },
  {
    name: "Velocity Automotive",
    role: "Automotive Campaign",
    review:
      "HIGH DESERT MEDIA delivered a level of production that felt closer to a luxury commercial than traditional content creation.",
  },
  {
    name: "Modern Stay Collection",
    role: "STR Media",
    review:
      "The content immediately improved engagement across our platforms and gave the properties a far more premium presentation.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-10 bg-black overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C8A15A]/5 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-24">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[#C8A15A]" />

              <p className="uppercase tracking-[0.35em] text-[#C8A15A] text-xs md:text-sm">
                Testimonials
              </p>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[1] tracking-[0.06em] text-[#F5F2EC] max-w-4xl">
              Trusted By
              <br />
              Brands That
              <span className="text-[#C8A15A] italic font-medium normal-case tracking-normal">
                {" "}
                Value
              </span>
              <br />
              Premium Perception.
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="max-w-md">
            <div className="border-l border-[#C8A15A]/30 pl-6">
              <p className="uppercase tracking-[0.3em] text-[#C8A15A] text-[10px] mb-5">
                Client Experience
              </p>

              <p className="text-white/60 leading-8 text-sm md:text-base">
                Strategic cinematic content designed to elevate perception,
                strengthen positioning, and create a luxury digital presence.
              </p>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] p-10 hover:border-[#C8A15A]/30 transition-all duration-700"
            >
              {/* HOVER GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,161,90,0.12),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* QUOTE ICON */}
              <div className="relative z-10 w-14 h-14 rounded-2xl border border-[#C8A15A]/20 bg-black flex items-center justify-center mb-10 group-hover:border-[#C8A15A] transition-all duration-500">
                <Quote size={22} className="text-[#C8A15A]" />
              </div>

              {/* REVIEW */}
              <p className="relative z-10 text-white/65 leading-9 text-[15px]">
                {item.review}
              </p>

              {/* BOTTOM */}
              <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                <h3 className="uppercase tracking-[0.15em] text-[#F5F2EC] text-sm font-semibold mb-3">
                  {item.name}
                </h3>

                <p className="uppercase tracking-[0.25em] text-[10px] text-[#C8A15A]">
                  {item.role}
                </p>
              </div>

              {/* BOTTOM LINE */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C8A15A] group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
