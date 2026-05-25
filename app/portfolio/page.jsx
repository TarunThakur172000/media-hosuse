"use client";

import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { useRef, useState } from "react";

import StrategyCallModal from "../../sections/StrategyCallModal";
const categories = [
  {
    title: "Drone",
    slug: "drone",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Aerial Cinema",
    desc: "High-impact aerial cinematography designed to create scale, luxury, and emotional depth.",
  },
  {
    title: "Landscape",
    slug: "landscape",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Visual Atmosphere",
    desc: "Immersive natural compositions crafted with cinematic precision and timeless aesthetics.",
  },
  {
    title: "Real Estate",
    slug: "real-estate",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Luxury Properties",
    desc: "Premium real estate visuals engineered to increase buyer desire and perceived value.",
  },
  {
    title: "Automotive",
    slug: "automotive",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Performance Films",
    desc: "Bold cinematic visuals built for high-performance automotive brands and campaigns.",
  },
];

export default function Premium3DPortfolio() {
  const sectionRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.8,
  });

  const rotateY = useTransform(smoothProgress, [0, 1], [0, -270]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black pt-[20vh]"
      style={{
        height: "320vh",
      }}
    >
      {/* BACK BUTTON */}
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
    fixed
    top-5
    left-5
    md:top-8
    md:left-8
    z-50
  "
      >
        <Link href="/">
          <button
            className="
        group
        flex items-center gap-3

        px-5
        py-3

        rounded-full

        border border-white/10
        bg-black/30
        backdrop-blur-2xl

        hover:border-[#C8A15A]/50
        hover:bg-[#C8A15A]/10

        transition-all
        duration-500

        shadow-[0_0_40px_rgba(0,0,0,0.35)]
      "
          >
            <ArrowLeft
              size={16}
              className="
          text-[#F5F2EC]
          group-hover:-translate-x-1
          transition-transform
          duration-500
        "
            />

            <span
              className="
          uppercase
          tracking-[0.25em]
          text-[10px]
          md:text-xs
          text-[#F5F2EC]
        "
            >
              Back
            </span>
          </button>
        </Link>
      </motion.div>
      {/* STICKY CONTAINER */}
      <div className="sticky top-0 h-screen overflow-visible flex items-center justify-center">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-black" />

        {/* GOLD AMBIENT */}
        <div className="absolute left-1/2 top-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A15A]/10 blur-[160px]" />

        {/* NOISE */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* CONTENT */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen py-16">
          {/* HEADER */}
          <div className="text-center mb-10 px-6">
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="uppercase tracking-[0.45em] text-[#C8A15A] text-xs mb-5"
            >
              Visual Excellence
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="text-5xl md:text-7xl font-black uppercase leading-[0.9] text-white"
            >
              Cinematic
              <br />
              Storytelling
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              className="mt-6 text-white/50 max-w-xl text-sm md:text-base leading-7 mx-auto"
            >
              Crafted visuals engineered to elevate perception, emotion, and
              brand authority.
            </motion.p>

            {/* CTA */}
            <motion.button
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                duration: 0.4,
              }}
              onClick={() => setOpenModal(true)}
              className="
                mt-8
                border border-[#C8A15A]/50
                bg-[#C8A15A]/5
                hover:bg-[#C8A15A]/10
                px-8 py-4
                rounded-full
                uppercase
                tracking-[0.2em]
                text-sm
                text-[#F5F2EC]
                transition-all
                duration-500
                shadow-[0_0_40px_rgba(200,161,90,0.12)]
              "
            >
              Book Strategy Call
            </motion.button>
          </div>

          {/* 3D SCENE */}
          <div
            className="relative flex items-center justify-center"
            style={{
              width: "100%",
              perspective: "2400px",
            }}
          >
            {/* ROTATING WRAPPER */}
            <motion.div
              style={{
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-[900px] h-[650px]"
            >
              {categories.map((item, index) => {
                const angle = index * 90;

                return (
                  <div
                    key={item.title}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `
                        translate(-50%, -50%)
                        rotateY(${angle}deg)
                        translateZ(360px)
                      `,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <Link href={`/portfolio/${item.slug}`}>
                      {/* CARD */}
                      <motion.div
                        whileHover={{
                          y: -12,
                          scale: 1.035,
                        }}
                        transition={{
                          duration: 0.45,
                          ease: "easeOut",
                        }}
                        className="
                          group
                          relative
                          w-[280px]
                          md:w-[320px]
                          h-[420px]
                          rounded-[2rem]
                          overflow-visible
                          cursor-pointer
                          will-change-transform
                          hover:z-50
                        "
                        style={{
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                          transformStyle: "preserve-3d",
                          transformPerspective: 2000,
                        }}
                      >
                        {/* MAIN CARD */}
                        <div
                          className="
                            relative
                            w-full
                            h-full
                            rounded-[2rem]
                            overflow-hidden
                            border border-white/10
                            bg-black
                          "
                        >
                          {/* IMAGE */}
                          <img
                            src={item.image}
                            alt={item.title}
                            className="
                              absolute
                              inset-0
                              w-full
                              h-full
                              object-cover
                              scale-100
                              group-hover:scale-110
                              transition-transform
                              duration-[2200ms]
                              ease-out
                            "
                          />

                          {/* OVERLAY */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/5" />

                          {/* GOLD LIGHT */}
                          <div
                            className="
                              absolute
                              inset-0
                              opacity-0
                              group-hover:opacity-100
                              transition-opacity
                              duration-700
                              bg-[radial-gradient(circle_at_top,rgba(200,161,90,0.28),transparent_60%)]
                            "
                          />

                          {/* GLASS SHINE */}
                          <div
                            className="
                              absolute
                              inset-0
                              opacity-0
                              group-hover:opacity-100
                              transition-opacity
                              duration-700
                              bg-gradient-to-br
                              from-white/[0.14]
                              via-transparent
                              to-transparent
                            "
                          />

                          {/* CONTENT */}
                          <motion.div
                            className="absolute bottom-0 left-0 p-7 z-20"
                            whileHover={{
                              y: -4,
                            }}
                            transition={{
                              duration: 0.4,
                            }}
                          >
                            <p className="uppercase tracking-[0.35em] text-[#C8A15A] text-[10px] mb-3">
                              {item.subtitle}
                            </p>

                            <h2 className="text-3xl font-black uppercase text-white mb-4">
                              {item.title}
                            </h2>

                            <p className="text-white/55 text-sm leading-6 max-w-[240px]">
                              {item.desc}
                            </p>

                            {/* BUTTON */}
                            <div className="mt-6 flex items-center gap-2 text-[#C8A15A] uppercase tracking-[0.25em] text-[10px]">
                              Explore Work
                              <ArrowUpRight
                                size={14}
                                className="
                                  group-hover:rotate-45
                                  group-hover:translate-x-1
                                  transition-all
                                  duration-500
                                "
                              />
                            </div>
                          </motion.div>

                          {/* PREMIUM BORDER */}
                          <div
                            className="
                              absolute
                              inset-0
                              rounded-[2rem]
                              border
                              border-white/10
                              group-hover:border-[#C8A15A]/50
                              transition-all
                              duration-700
                            "
                          />

                          {/* BOTTOM GOLD LINE */}
                          <div
                            className="
                              absolute
                              bottom-0
                              left-0
                              h-[2px]
                              w-0
                              bg-[#C8A15A]
                              group-hover:w-full
                              transition-all
                              duration-700
                            "
                          />
                        </div>

                        {/* SHADOW */}
                        <div
                          className="
                            absolute
                            inset-0
                            rounded-[2rem]
                            pointer-events-none
                            shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                            group-hover:shadow-[0_40px_120px_rgba(0,0,0,0.9)]
                            transition-all
                            duration-700
                          "
                        />

                        {/* GOLD OUTER GLOW */}
                        <div
                          className="
                            absolute
                            -inset-[1px]
                            rounded-[2rem]
                            opacity-0
                            pointer-events-none
                            group-hover:opacity-100
                            transition-opacity
                            duration-700
                            shadow-[0_0_80px_rgba(200,161,90,0.28)]
                          "
                        />
                      </motion.div>
                    </Link>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
      <StrategyCallModal open={openModal} setOpen={setOpenModal} />
    </section>
  );
}
