"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center px-6">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-black" />

      {/* GOLD GLOW */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-[#C8A15A]/10 blur-[160px] rounded-full" />

      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* FLOATING ORBS */}
      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 w-32 h-32 rounded-full bg-[#C8A15A]/10 blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-white/[0.04] blur-3xl"
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* SMALL LABEL */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="w-12 h-[1px] bg-[#C8A15A]" />

          <p className="uppercase tracking-[0.35em] text-[#C8A15A] text-[10px] md:text-xs">
            HIGH DESERT MEDIA
          </p>

          <div className="w-12 h-[1px] bg-[#C8A15A]" />
        </motion.div>

        {/* 404 */}
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="
            text-[7rem]
            sm:text-[9rem]
            md:text-[14rem]
            font-black
            leading-none
            tracking-[-0.08em]
            text-[#F5F2EC]
            relative
          "
        >
          404
          {/* OUTLINE */}
          <span
            className="
              absolute
              inset-0
              text-transparent
              [-webkit-text-stroke:1px_rgba(200,161,90,0.25)]
            "
          >
            404
          </span>
        </motion.h1>

        {/* TITLE */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="
            mt-2
            text-3xl
            md:text-5xl
            font-black
            uppercase
            tracking-[0.06em]
            text-[#F5F2EC]
            leading-tight
          "
        >
          Lost In The
          <br />
          Cinematic Void
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.35,
            duration: 0.8,
          }}
          className="
            mt-8
            max-w-2xl
            mx-auto
            text-white/50
            text-sm
            md:text-lg
            leading-8
            px-2
          "
        >
          The page you’re looking for doesn’t exist, was moved, or never made it
          into production. Let’s get you back to cinematic storytelling.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="
            mt-12
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-5
          "
        >
          {/* HOME */}
          <Link href="/">
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                relative
                overflow-hidden
                bg-[#C8A15A]
                px-8
                py-5
                rounded-full
                uppercase
                tracking-[0.2em]
                text-[11px]
                font-bold
                text-black
              "
            >
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

              <span className="relative z-10 flex items-center gap-3">
                Return Home
                <ArrowUpRight
                  size={16}
                  className="group-hover:rotate-45 transition-transform duration-500"
                />
              </span>
            </motion.button>
          </Link>

          {/* CONTACT */}
          <Link href="/#contact">
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                border
                border-white/10
                hover:border-[#C8A15A]/40
                bg-white/[0.03]
                backdrop-blur-xl
                px-8
                py-5
                rounded-full
                uppercase
                tracking-[0.2em]
                text-[11px]
                font-semibold
                text-[#F5F2EC]
                transition-all
                duration-500
              "
            >
              Contact HDM
            </motion.button>
          </Link>
        </motion.div>

        {/* FLOATING TEXT */}
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="
            mt-16
            uppercase
            tracking-[0.5em]
            text-[10px]
            text-white/20
          "
        >
          CINEMATIC AUTHORITY
        </motion.div>
      </div>
    </main>
  );
}
