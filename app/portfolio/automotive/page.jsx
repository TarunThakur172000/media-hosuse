"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import StrategyCallModal from "../../../sections/StrategyCallModal";
const projects = [
  {
    image:
      "https://lh3.googleusercontent.com/d/1o6Yn769aildeG6bjw1SGx3EaDjdFZnYg",
    title: "Luxury Performance Coupe",
  },
  {
    image:
      "https://lh3.googleusercontent.com/d/1iqeS2S4aJABZxj_9SGSkQ62f3Ulsf24e",
    title: "Supercar Cinematics",
  },
  {
    image:
      "https://lh3.googleusercontent.com/d/1jWLwX0sirBJcvM6-AXH8vyRi-Jy3yx26",
    title: "Exotic Automotive Storytelling",
  },
  {
    image:
      "https://lh3.googleusercontent.com/d/1bwF3-gxiipC73akKUqVlyAyMLms9w8oP",
    title: "Velocity",
  },
  {
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2000&auto=format&fit=crop",
    title: "Track-Focused Visual Campaign",
  },
  {
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2000&auto=format&fit=crop",
    title: "Premium Automotive Branding",
  },
];

export default function AutomotivePortfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-[#F5F2EC]">
      {/* FLOATING STICKY CTA */}
      <motion.button
        initial={{
          opacity: 0,
          y: 40,
        }}
        onClick={() => setOpenModal(true)}
        animate={{
          opacity: 1,
          y: 0,
        }}
        whileHover={{
          scale: 1.04,
          y: -3,
        }}
        whileTap={{
          scale: 0.96,
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
    fixed
    bottom-6
    right-6
    z-50
    cursor-pointer
    px-7
    py-4

    rounded-full

    border border-[#C8A15A]/40
    bg-black/40
    backdrop-blur-2xl

    text-[#F5F2EC]
    uppercase
    tracking-[0.22em]
    text-xs

    shadow-[0_0_50px_rgba(200,161,90,0.18)]

    hover:bg-[#C8A15A]/10
    hover:border-[#C8A15A]/70

    transition-all
    duration-500
  "
      >
        Book Strategy Call
      </motion.button>
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-black" />

      {/* GOLD AMBIENT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-[#C8A15A]/10 blur-[180px]" />

      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* CONTENT */}
      <div className="relative z-10">
        {/* HERO */}
        <section className="px-6 md:px-10 pt-28 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
              {/* LEFT */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                }}
                className="max-w-4xl"
              >
                <p className="uppercase tracking-[0.45em] text-[#C8A15A] text-xs mb-6">
                  Automotive Portfolio
                </p>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.92]">
                  Performance
                  <br />
                  Cinematics
                </h1>

                <p className="mt-8 text-white/50 leading-8 max-w-2xl text-sm md:text-base">
                  Crafted for premium automotive brands seeking cinematic
                  storytelling, emotional depth, and visually powerful brand
                  perception.
                </p>
              </motion.div>

              {/* RIGHT */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1,
                }}
              >
                <Link href="/portfolio">
                  <button
                    className="
                      group
                      flex items-center gap-4
                      px-7 py-4
                      rounded-full
                      border border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      hover:border-[#C8A15A]/50
                      transition-all duration-500
                    "
                  >
                    <ArrowLeft
                      size={18}
                      className="
                        group-hover:-translate-x-1
                        transition-transform duration-500
                      "
                    />

                    <span className="uppercase tracking-[0.3em] text-xs">
                      Back
                    </span>
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CINEMATIC SPIRAL SECTION */}
        <section className="relative px-6 md:px-10 pb-40 overflow-hidden">
          {/* GLOW */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[1000px] h-[1000px] rounded-full bg-[#C8A15A]/10 blur-[180px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto space-y-40">
            {projects.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 200,
                  rotate: index % 2 === 0 ? -8 : 8,
                  scale: 0.85,
                  filter: "blur(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                onClick={() => setSelectedImage(item)}
                className={`
                  group
                  relative
                  cursor-pointer
                  ${index % 2 === 0 ? "ml-auto" : "mr-auto"}
                  w-[92vw]
                  md:w-[75vw]
                  lg:w-[65vw]
                  h-[60vh]
                  rounded-[2.8rem]
                  overflow-hidden
                `}
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    absolute inset-0
                    w-full h-full
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-[2200ms]
                  "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* GOLD LIGHT */}
                <div
                  className="
                    absolute inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-700
                    bg-[radial-gradient(circle_at_top,rgba(200,161,90,0.22),transparent_55%)]
                  "
                />

                {/* GLASS */}
                <div
                  className="
                    absolute inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-700
                    bg-gradient-to-br
                    from-white/[0.10]
                    via-transparent
                    to-transparent
                  "
                />

                {/* SHADOW */}
                <div
                  className="
                    absolute inset-0
                    rounded-[2.8rem]
                    shadow-[0_40px_120px_rgba(0,0,0,0.7)]
                    group-hover:shadow-[0_60px_180px_rgba(0,0,0,0.95)]
                    transition-all
                    duration-700
                  "
                />

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20">
                  <p className="uppercase tracking-[0.35em] text-[#C8A15A] text-xs mb-5">
                    Automotive Cinema
                  </p>

                  <h2 className="text-3xl md:text-6xl font-black uppercase leading-none max-w-2xl text-white">
                    {item.title}
                  </h2>

                  <div className="mt-8 flex items-center gap-3 text-[#C8A15A] uppercase tracking-[0.3em] text-xs">
                    Explore Showcase
                    <ArrowUpRight
                      size={16}
                      className="
                        group-hover:rotate-45
                        group-hover:translate-x-1
                        transition-all duration-500
                      "
                    />
                  </div>
                </div>

                {/* BORDER */}
                <div
                  className="
                    absolute inset-0
                    rounded-[2.8rem]
                    border border-white/10
                    group-hover:border-[#C8A15A]/40
                    transition-all duration-700
                  "
                />

                {/* GOLD LINE */}
                <div
                  className="
                    absolute bottom-0 left-0
                    h-[2px]
                    w-0
                    bg-[#C8A15A]
                    group-hover:w-full
                    transition-all duration-700
                  "
                />
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* FULLSCREEN MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setSelectedImage(null)}
            className="
              fixed inset-0 z-50
              bg-black/95
              backdrop-blur-2xl
              flex items-center justify-center
              p-6
            "
          >
            {/* CLOSE */}
            <button
              onClick={() => setSelectedImage(null)}
              className="
                absolute top-6 right-6
                w-14 h-14
                rounded-full
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                flex items-center justify-center
                hover:border-[#C8A15A]/50
                transition-all duration-500
              "
            >
              <X size={20} />
            </button>

            {/* IMAGE */}
            <motion.div
              initial={{
                scale: 0.92,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.92,
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
              }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-7xl w-full"
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="
                  w-full
                  max-h-[88vh]
                  object-contain
                  rounded-[2rem]
                "
              />

              <div className="mt-8 text-center">
                <p className="uppercase tracking-[0.35em] text-[#C8A15A] text-xs mb-4">
                  Cinematic Showcase
                </p>

                <h2 className="text-3xl md:text-5xl font-black uppercase">
                  {selectedImage.title}
                </h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <StrategyCallModal open={openModal} setOpen={setOpenModal} />
    </main>
  );
}
