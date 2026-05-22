"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post("http://localhost:5000/api/contact", form);

      alert("Inquiry submitted successfully.");

      setForm({
        name: "",
        email: "",
        project: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 px-6 md:px-10 bg-[#0A0A0A] overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C8A15A]/5 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#C8A15A]" />

              <p className="uppercase tracking-[0.35em] text-[#C8A15A] text-xs">
                Contact
              </p>
            </div>

            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-[0.06em] text-[#F5F2EC] leading-tight">
              Start Your
              <br />
              Next Project
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-white/55 leading-8 text-sm md:text-base border-l border-[#C8A15A]/30 pl-6">
              Luxury cinematic media tailored for modern real estate, automotive
              brands, and premium visual positioning.
            </p>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            onSubmit={submit}
            className="rounded-[2.5rem] border border-white/10 bg-[#111111] p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* NAME */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.25em] text-white/40 mb-4">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Carter"
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-5 text-white placeholder:text-white/25 outline-none focus:border-[#C8A15A]/40 transition-all duration-500"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.25em] text-white/40 mb-4">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="hello@brand.com"
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-5 text-white placeholder:text-white/25 outline-none focus:border-[#C8A15A]/40 transition-all duration-500"
                />
              </div>
            </div>

            {/* PROJECT TYPE */}
            <div className="mt-6">
              <label className="block text-[11px] uppercase tracking-[0.25em] text-white/40 mb-4">
                Project Type
              </label>

              <select
                name="project"
                value={form.project}
                onChange={handleChange}
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-5 text-white outline-none focus:border-[#C8A15A]/40 transition-all duration-500"
              >
                <option value="">Select Service</option>
                <option>Luxury Real Estate</option>
                <option>Automotive Cinematics</option>
                <option>Drone / Aerial</option>
                <option>Branding Content</option>
                <option>Social Media Reels</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div className="mt-6">
              <label className="block text-[11px] uppercase tracking-[0.25em] text-white/40 mb-4">
                Project Details
              </label>

              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project..."
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-5 text-white placeholder:text-white/25 outline-none resize-none focus:border-[#C8A15A]/40 transition-all duration-500"
              />
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              className="group mt-8 bg-[#C8A15A] text-black px-8 py-5 rounded-full uppercase tracking-[0.18em] text-xs font-bold"
            >
              <span className="flex items-center gap-3">
                {loading ? "Submitting..." : "Submit Inquiry"}

                <ArrowUpRight size={16} />
              </span>
            </motion.button>
          </motion.form>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#111111] flex flex-col"
          >
            {/* IMAGE */}
            <div className="relative h-[320px]">
              <img
                src="/images/logo.png"
                alt="Luxury Media"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
              <div>
                <p className="uppercase tracking-[0.3em] text-[#C8A15A] text-[10px] mb-5">
                  HIGH DESERT MEDIA
                </p>

                <p className="text-white/60 leading-8 text-sm md:text-base">
                  Cinematic visual systems crafted for luxury real estate,
                  automotive brands, and premium digital presence.
                </p>

                {/* INFO */}
                <div className="space-y-6 mt-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl border border-white/10 bg-black flex items-center justify-center">
                      <Mail size={18} className="text-[#C8A15A]" />
                    </div>

                    <div>
                      <p className="uppercase tracking-[0.2em] text-[10px] text-white/35 mb-2">
                        Email
                      </p>

                      <p className="text-white/70 text-sm">
                        hello@highdesertmedia.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl border border-white/10 bg-black flex items-center justify-center">
                      <Phone size={18} className="text-[#C8A15A]" />
                    </div>

                    <div>
                      <p className="uppercase tracking-[0.2em] text-[10px] text-white/35 mb-2">
                        Phone
                      </p>

                      <p className="text-white/70 text-sm">+1 (555) 000-0000</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl border border-white/10 bg-black flex items-center justify-center">
                      <MapPin size={18} className="text-[#C8A15A]" />
                    </div>

                    <div>
                      <p className="uppercase tracking-[0.2em] text-[10px] text-white/35 mb-2">
                        Location
                      </p>

                      <p className="text-white/70 text-sm">
                        Florida, United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <div className="pt-8 mt-10 border-t border-white/10">
                <p className="uppercase tracking-[0.25em] text-[10px] text-white/35">
                  Cinematic Authority
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
