"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const portfolio = [
  {
    image: "/images/p1.jpg",
    category: "Luxury Real Estate",
    title: "Modern Architectural Estate",
  },
  {
    image: "/images/p2.jpg",
    category: "Automotive",
    title: "Exotic Performance Cinematics",
  },
  {
    image: "/images/p3.jpg",
    category: "Luxury Branding",
    title: "Premium Brand Positioning",
  },
  {
    image: "/images/p4.jpg",
    category: "Aerial Cinematics",
    title: "Drone Visual Storytelling",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-28 md:py-36 px-6 md:px-10 bg-[#0A0A0A] overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#C8A15A]/5 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-24">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[#C8A15A]" />

              <p className="uppercase tracking-[0.35em] text-[#C8A15A] text-xs md:text-sm">
                Portfolio
              </p>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[1] tracking-[0.06em] text-[#F5F2EC] max-w-5xl">
              Cinematic
              <br />
              <span className="text-[#C8A15A] italic font-medium normal-case tracking-normal">
                {" "}
                STORYTELLING
              </span>
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="max-w-md">
            <div className="border-l border-[#C8A15A]/30 pl-6">
              <p className="uppercase tracking-[0.3em] text-[#C8A15A] text-[10px] mb-5">
                Selected Work
              </p>

              <p className="text-white/60 leading-8 text-sm md:text-base">
                A curated collection of cinematic visuals crafted for luxury
                real estate, automotive brands, and modern premium businesses.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-10">
              {[
                "Real Estate",
                "Automotive",
                "Drone",
                "Branding",
                "Commercial",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full border border-white/10 text-[11px] uppercase tracking-[0.2em] text-white/45"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* PORTFOLIO GRID */}
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {portfolio.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2rem]"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-[1400ms]"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

                {/* GOLD GLOW */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,161,90,0.18),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <p className="uppercase tracking-[0.3em] text-[#C8A15A] text-[10px] md:text-xs mb-4">
                      {item.category}
                    </p>

                    <h3 className="text-2xl md:text-4xl font-black uppercase text-[#F5F2EC] leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* BUTTON */}
                  <div className="w-14 h-14 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-center group-hover:bg-[#C8A15A] group-hover:border-[#C8A15A] transition-all duration-500">
                    <ArrowUpRight
                      size={22}
                      className="text-[#F5F2EC] group-hover:text-black transition-colors duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* BOTTOM BORDER */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C8A15A] group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
      {/* VIEW MORE BUTTON */}
      <div className="flex justify-center mt-20">
        <Link href="/portfolio">
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden px-10 py-5 rounded-full border border-[#C8A15A]/30 bg-black/40 backdrop-blur-xl uppercase tracking-[0.3em] text-xs text-[#F5F2EC] hover:border-[#C8A15A] transition-all duration-500"
          >
            {/* GOLD HOVER */}
            <span className="absolute inset-0 bg-[#C8A15A] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

            <span className="relative z-10 flex items-center gap-3 group-hover:text-black transition-colors duration-500">
              View More Projects
              <ArrowUpRight
                size={16}
                className="group-hover:rotate-45 transition-transform duration-500"
              />
            </span>
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
