"use client";

import { ArrowUpRight } from "lucide-react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
const links = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Portfolio",
    href: "#portfolio",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Footer({ setOpenModal }) {
  return (
    <footer className="relative overflow-hidden bg-black border-t border-white/10">
      {/* TOP GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C8A15A]/5 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20">
        {/* TOP */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 pb-16 border-b border-white/10">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-[1px] bg-[#C8A15A]" />

              <p className="uppercase tracking-[0.35em] text-[#C8A15A] text-xs">
                HIGH DESERT MEDIA
              </p>
            </div>

            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-[0.06em] text-[#F5F2EC] leading-tight max-w-2xl">
              Cinematic Visuals
              <br />
              Built For Modern
              <br />
              Luxury Brands.
            </h2>

            <p className="mt-8 text-white/55 leading-8 text-sm md:text-base max-w-xl">
              Strategic cinematic media for luxury real estate, automotive
              brands, and premium digital positioning.
            </p>

            {/* CTA */}
            <button
              onClick={() => setOpenModal(true)}
              className="group mt-10 bg-[#C8A15A] text-black px-8 py-5 rounded-full uppercase tracking-[0.18em] text-xs font-bold"
            >
              <span className="flex items-center gap-3">
                Start A Project
                <ArrowUpRight size={16} />
              </span>
            </button>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-10">
            {/* NAVIGATION */}
            <div>
              <p className="uppercase tracking-[0.25em] text-[10px] text-[#C8A15A] mb-6">
                Navigation
              </p>

              <div className="space-y-5">
                {links.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    className="block text-white/60 hover:text-[#F5F2EC] transition-all duration-300 text-sm uppercase tracking-[0.12em]"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>

            {/* SOCIAL */}
            <div>
              <p className="uppercase tracking-[0.25em] text-[10px] text-[#C8A15A] mb-6">
                Social
              </p>

              <div className="flex flex-col gap-5">
              <a
  href="https://www.instagram.com/highdesertmediaaz/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 text-white/60 hover:text-[#F5F2EC] transition-all duration-300 text-sm uppercase tracking-[0.12em]"
>
  <FaInstagram size={20} />
  Instagram
</a>

                <a href="https://www.youtube.com/@HighDesertMediaAZ" target="_blank" className="flex items-center pointer gap-3 text-white/60 hover:text-[#F5F2EC] transition-all duration-300 text-sm uppercase tracking-[0.12em]">
                  <FaYoutube size={20} />
                  YouTube
                </a>

                <a className="flex items-center gap-3 text-white/60 hover:text-[#F5F2EC] transition-all duration-300 text-sm uppercase tracking-[0.12em]">
                  <FaLinkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10">
          <p className="uppercase tracking-[0.2em] text-[10px] text-white/35 text-center md:text-left">
            © 2026 HIGH DESERT MEDIA — All Rights Reserved
          </p>

          <p className="uppercase tracking-[0.25em] text-[10px] text-[#C8A15A]">
            Cinematic Authority
          </p>
        </div>
      </div>
    </footer>
  );
}
