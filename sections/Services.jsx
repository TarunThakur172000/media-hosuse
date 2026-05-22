"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Hotel,
  Plane,
  CarFront,
  Clapperboard,
  Instagram,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Luxury Real Estate",
    desc: "Cinematic property visuals engineered to elevate perceived value and attract premium buyers.",
    icon: Building2,
  },
  {
    title: "STR Media",
    desc: "Luxury Airbnb and vacation rental content optimized for bookings and platform authority.",
    icon: Hotel,
  },
  {
    title: "Drone / Aerial",
    desc: "FAA-compliant aerial cinematics delivering premium scale, perspective, and motion.",
    icon: Plane,
  },
  {
    title: "Automotive Cinematics",
    desc: "Luxury automotive storytelling designed for dealerships, launches, and exotic brands.",
    icon: CarFront,
  },
  {
    title: "Branding Content",
    desc: "Strategic content systems built to position brands with authority and prestige.",
    icon: Clapperboard,
  },
  {
    title: "Social Media Reels",
    desc: "Short-form cinematic edits engineered for engagement, reach, and premium perception.",
    icon: Instagram,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 md:py-36 px-6 md:px-10 bg-black overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#C8A15A]/5 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-24">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[#C8A15A]" />

              <p className="uppercase tracking-[0.35em] text-[#C8A15A] text-xs md:text-sm">
                Services
              </p>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[1] tracking-[0.06em] text-[#F5F2EC] max-w-4xl">
              Cinematic Media
              <br />
              Built For
              <span className="text-[#C8A15A] italic font-medium normal-case tracking-normal">
                {" "}
                Premium
              </span>
              <br />
              Brand Authority.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-5 max-w-xl">
            {/* CARD 1 */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,161,90,0.12),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <h3 className="text-5xl font-black text-[#F5F2EC] mb-3">250+</h3>

              <p className="uppercase tracking-[0.2em] text-[11px] text-white/50 leading-6">
                Luxury Projects Delivered
              </p>
            </div>

            {/* CARD 2 */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,161,90,0.12),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <h3 className="text-5xl font-black text-[#C8A15A] mb-3">4K</h3>

              <p className="uppercase tracking-[0.2em] text-[11px] text-white/50 leading-6">
                Cinematic Production Quality
              </p>
            </div>

            {/* CARD 3 */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] p-7 col-span-2">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(200,161,90,0.10),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <p className="uppercase tracking-[0.3em] text-[#C8A15A] text-[10px] mb-4">
                Strategic Positioning
              </p>

              <p className="text-white/65 leading-8 text-sm md:text-base">
                Every service is engineered to increase perceived value,
                strengthen brand positioning, and create premium authority
                across digital platforms.
              </p>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] p-10 hover:border-[#C8A15A]/40 transition-all duration-700"
              >
                {/* HOVER GLOW */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,161,90,0.12),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* ICON */}
                <div className="relative z-10 w-16 h-16 rounded-2xl border border-[#C8A15A]/20 bg-black flex items-center justify-center mb-8 group-hover:border-[#C8A15A] transition-all duration-500">
                  <Icon size={28} className="text-[#C8A15A]" />
                </div>

                {/* TITLE */}
                <h3 className="relative z-10 text-2xl font-bold uppercase tracking-[0.08em] text-[#F5F2EC] leading-snug mb-5">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="relative z-10 text-white/55 leading-8 text-[15px]">
                  {service.desc}
                </p>

                {/* BOTTOM */}
                <div className="relative z-10 flex items-center justify-between mt-12">
                  <span className="uppercase tracking-[0.25em] text-[11px] text-white/35">
                    Premium Service
                  </span>

                  <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#C8A15A] group-hover:border-[#C8A15A] transition-all duration-500">
                    <ArrowUpRight
                      size={18}
                      className="text-[#F5F2EC] group-hover:text-black transition-colors duration-500"
                    />
                  </div>
                </div>

                {/* BORDER LINE */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C8A15A] group-hover:w-full transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
