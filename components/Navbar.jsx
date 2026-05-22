"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-2xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">
          {/* LOGO */}

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer flex items-center"
          >
            <img
              src="/images/logo.png"
              alt="High Desert Media"
              width={180}
              height={60}
              priority
              className="w-[140px] md:w-[180px] object-contain"
            />
          </motion.div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-[12px] uppercase tracking-[0.25em] text-white/70 hover:text-white transition-all duration-300 group"
              >
                {item.name}

                <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-[#C8A15A] transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* RIGHT CTA */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="relative overflow-hidden border border-[#C8A15A]/50 px-7 py-3 rounded-full uppercase tracking-[0.18em] text-[11px] font-semibold text-[#F5F2EC] group"
            >
              <span className="absolute inset-0 bg-[#C8A15A] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

              <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                Book Strategy Call
              </span>
            </motion.button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-[#F5F2EC]"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-black"
          >
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
              <div>
                <h1 className="text-xl font-black tracking-[0.4em] text-[#F5F2EC]">
                  HDM
                </h1>

                <p className="text-[10px] uppercase tracking-[0.3em] text-[#C8A15A] mt-1">
                  High Desert Media
                </p>
              </div>

              <button onClick={() => setOpen(false)} className="text-[#F5F2EC]">
                <X size={30} />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center h-[80vh] gap-10">
              {navLinks.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setOpen(false)}
                  className="text-3xl uppercase tracking-[0.25em] text-[#F5F2EC] hover:text-[#C8A15A] transition-all duration-300"
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="mt-8 border border-[#C8A15A] px-8 py-4 rounded-full uppercase tracking-[0.2em] text-sm text-[#F5F2EC]"
              >
                Book Strategy Call
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
