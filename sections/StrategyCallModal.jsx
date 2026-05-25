"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CalendarDays, Building2, DollarSign } from "lucide-react";
import { useState } from "react";
export default function StrategyCallModal({ open, setOpen }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("Luxury Real Estate");
  const [budget, setBudget] = useState("$500 - $1,500");
  const [preferredDate, setPreferredDate] = useState("");
  const [timezone, setTimezone] = useState("Eastern Time (ET)");
  const [callWindow, setCallWindow] = useState("Morning (8AM - 11AM)");
  const [projectDetails, setProjectDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const formData = {
        fullName,
        email,
        company,
        service,
        budget,
        preferredDate,
        timezone,
        callWindow,
        projectDetails,
      };
      console.log(formData);
      const response = await fetch("/api/schedule-consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // SUCCESS
      setSuccess(true);

      // RESET FORM
      setFullName("");
      setEmail("");
      setCompany("");
      setService("Luxury Real Estate");
      setBudget("$500 - $1,500");
      setPreferredDate("");
      setTimezone("Eastern Time (ET)");
      setCallWindow("Morning (8AM - 11AM)");
      setProjectDetails("");

      // CLOSE MODAL
      setTimeout(() => {
        setOpen(false);
        setSuccess(false);
      }, 2500);
    } catch (error) {
      console.error(error);

      alert(error.message || "Failed to submit consultation request.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md overflow-hidden"
        >
          {/* CONTAINER */}
          <div className="min-h-screen flex items-center justify-center px-4 py-5 md:py-8">
            {/* MODAL */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.4 }}
              className="
  relative
  w-full
  max-w-4xl
  max-h-[95vh]
  overflow-y-auto
  rounded-[2rem]
  border border-white/10
  bg-[#0B0B0B]
  shadow-[0_40px_120px_rgba(0,0,0,0.8)]

  scrollbar-thin
  scrollbar-track-transparent
  scrollbar-thumb-[#C8A15A]/40
  hover:scrollbar-thumb-[#C8A15A]/70
"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen(false)}
                className="
                  absolute
                  top-5
                  right-5
                  z-50
                  w-11
                  h-11
                  rounded-full
                  border border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                  flex items-center justify-center
                  hover:border-[#C8A15A]/40
                  transition-all
                  duration-300
                "
              >
                <X size={18} className="text-white/70" />
              </button>

              {/* GRID */}
              <div className="grid lg:grid-cols-2">
                {/* LEFT SIDE */}
                <div
                  className="
                    relative
                    p-7
                    md:p-10
                    border-b
                    lg:border-b-0
                    lg:border-r
                    border-white/10
                    overflow-hidden
                  "
                >
                  {/* GLOW */}
                  <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#C8A15A]/10 blur-[120px] rounded-full" />

                  <div className="relative z-10">
                    {/* LABEL */}
                    <div className="flex items-center gap-4 mb-7">
                      <div className="w-10 h-[1px] bg-[#C8A15A]" />

                      <p className="uppercase tracking-[0.35em] text-[#C8A15A] text-[10px]">
                        Strategy Call
                      </p>
                    </div>

                    {/* TITLE */}
                    <h2
                      className="
                        text-3xl
                        md:text-5xl
                        font-black
                        uppercase
                        leading-[0.9]
                        tracking-[0.05em]
                        text-[#F5F2EC]
                      "
                    >
                      LET’S BUILD
                      <br />
                      SOMETHING
                      <br />
                      CINEMATIC
                    </h2>

                    {/* DESC */}
                    <p className="mt-7 text-white/60 leading-7 text-sm md:text-base max-w-md">
                      Tell us about your project, goals, and creative vision.
                      We’ll discuss how cinematic content can elevate your brand
                      and digital presence.
                    </p>

                    {/* SERVICES */}
                    <div className="mt-10 space-y-4">
                      {[
                        "Luxury Real Estate",
                        "Automotive Cinematics",
                        "Drone & Aerial",
                        "Branding Content",
                        "Social Media Reels",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-[#C8A15A]" />

                          <p className="text-white/70 uppercase tracking-[0.15em] text-xs">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* SMALL NOTE */}
                    <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5">
                      <h4 className="text-white text-sm font-semibold mb-2">
                        30 Minute Consultation
                      </h4>

                      <p className="text-white/50 text-sm leading-6">
                        We’ll review your project scope, creative direction,
                        scheduling, and content strategy during the call.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FORM SIDE */}
                <div className="p-7 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* NAME */}
                    <div>
                      <label className="block text-white/70 uppercase tracking-[0.2em] text-[10px] mb-3">
                        Full Name
                      </label>

                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="John Carter"
                        className="
        w-full
        h-13
        md:h-14
        rounded-2xl
        bg-white/[0.03]
        border border-white/10
        px-5
        text-white
        placeholder:text-white/25
        outline-none
        focus:border-[#C8A15A]/50
        transition-all
      "
                      />
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label className="block text-white/70 uppercase tracking-[0.2em] text-[10px] mb-3">
                        Email Address
                      </label>

                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="
        w-full
        h-13
        md:h-14
        rounded-2xl
        bg-white/[0.03]
        border border-white/10
        px-5
        text-white
        placeholder:text-white/25
        outline-none
        focus:border-[#C8A15A]/50
        transition-all
      "
                      />
                    </div>

                    {/* COMPANY */}
                    <div>
                      <label className="block text-white/70 uppercase tracking-[0.2em] text-[10px] mb-3">
                        Company / Brand
                      </label>

                      <div className="relative">
                        <Building2
                          size={18}
                          className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30"
                        />

                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Luxury Real Estate Group"
                          className="
          w-full
          h-13
          md:h-14
          rounded-2xl
          bg-white/[0.03]
          border border-white/10
          pl-14
          pr-5
          text-white
          placeholder:text-white/25
          outline-none
          focus:border-[#C8A15A]/50
          transition-all
        "
                        />
                      </div>
                    </div>

                    {/* SERVICE */}
                    <div>
                      <label className="block text-white/70 uppercase tracking-[0.2em] text-[10px] mb-3">
                        Service Needed
                      </label>

                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="
        w-full
        h-13
        md:h-14
        rounded-2xl
        bg-white/[0.03]
        border border-white/10
        px-5
        text-white
        outline-none
        focus:border-[#C8A15A]/50
        transition-all
      "
                      >
                        <option className="bg-black">Luxury Real Estate</option>

                        <option className="bg-black">
                          Automotive Cinematics
                        </option>

                        <option className="bg-black">Drone / Aerial</option>

                        <option className="bg-black">Branding Content</option>

                        <option className="bg-black">Social Media Reels</option>
                      </select>
                    </div>

                    {/* BUDGET */}
                    <div>
                      <label className="block text-white/70 uppercase tracking-[0.2em] text-[10px] mb-3">
                        Estimated Budget
                      </label>

                      <div className="relative">
                        <DollarSign
                          size={18}
                          className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30"
                        />

                        <select
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="
          w-full
          h-13
          md:h-14
          rounded-2xl
          bg-white/[0.03]
          border border-white/10
          pl-14
          pr-5
          text-white
          outline-none
          focus:border-[#C8A15A]/50
          transition-all
        "
                        >
                          <option className="bg-black">$500 - $1,500</option>

                          <option className="bg-black">$1,500 - $3,000</option>

                          <option className="bg-black">$3,000 - $5,000</option>

                          <option className="bg-black">$5,000+</option>
                        </select>
                      </div>
                    </div>

                    {/* DATE + TIMEZONE */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* DATE */}
                      <div>
                        <label className="block text-white/70 uppercase tracking-[0.2em] text-[10px] mb-3">
                          Preferred Date
                        </label>

                        <input
                          type="date"
                          value={preferredDate}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          className="
          w-full
          h-13
          md:h-14
          rounded-2xl
          bg-white/[0.03]
          border border-white/10
          px-5
          text-white
          outline-none
          focus:border-[#C8A15A]/50
          transition-all
        "
                        />
                      </div>

                      {/* TIMEZONE */}
                      <div>
                        <label className="block text-white/70 uppercase tracking-[0.2em] text-[10px] mb-3">
                          Time Zone
                        </label>

                        <select
                          value={timezone}
                          onChange={(e) => setTimezone(e.target.value)}
                          className="
          w-full
          h-13
          md:h-14
          rounded-2xl
          bg-white/[0.03]
          border border-white/10
          px-5
          text-white
          outline-none
          focus:border-[#C8A15A]/50
          transition-all
        "
                        >
                          <option className="bg-black">
                            Eastern Time (ET)
                          </option>

                          <option className="bg-black">
                            Central Time (CT)
                          </option>

                          <option className="bg-black">
                            Mountain Time (MT)
                          </option>

                          <option className="bg-black">
                            Pacific Time (PT)
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* CALL WINDOW */}
                    <div>
                      <label className="block text-white/70 uppercase tracking-[0.2em] text-[10px] mb-3">
                        Preferred Call Window
                      </label>

                      <select
                        value={callWindow}
                        onChange={(e) => setCallWindow(e.target.value)}
                        className="
        w-full
        h-13
        md:h-14
        rounded-2xl
        bg-white/[0.03]
        border border-white/10
        px-5
        text-white
        outline-none
        focus:border-[#C8A15A]/50
        transition-all
      "
                      >
                        <option className="bg-black">
                          Morning (8AM - 11AM)
                        </option>

                        <option className="bg-black">
                          Midday (11AM - 2PM)
                        </option>

                        <option className="bg-black">
                          Afternoon (2PM - 5PM)
                        </option>

                        <option className="bg-black">
                          Evening (5PM - 8PM)
                        </option>
                      </select>
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <label className="block text-white/70 uppercase tracking-[0.2em] text-[10px] mb-3">
                        Project Details
                      </label>

                      <textarea
                        rows={4}
                        value={projectDetails}
                        onChange={(e) => setProjectDetails(e.target.value)}
                        placeholder="Tell us about your project, property, goals, or creative vision..."
                        className="
        w-full
        rounded-2xl
        bg-white/[0.03]
        border border-white/10
        px-5
        py-4
        text-white
        placeholder:text-white/25
        outline-none
        resize-none
        focus:border-[#C8A15A]/50
        transition-all
      "
                      />
                    </div>

                    {/* BUTTON */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{
                        scale: loading ? 1 : 1.01,
                      }}
                      whileTap={{
                        scale: loading ? 1 : 0.98,
                      }}
                      className="
      w-full
      h-13
      md:h-14
      rounded-2xl
      bg-[#C8A15A]
      text-black
      uppercase
      tracking-[0.2em]
      text-[11px]
      font-bold
      hover:bg-[#d6af69]
      transition-all
      duration-300
      disabled:opacity-60
    "
                    >
                      {loading ? "Submitting..." : "Book Strategy Call"}
                    </motion.button>

                    {/* SUCCESS */}
                    {success && (
                      <div
                        className="
        rounded-2xl
        border border-green-500/20
        bg-green-500/10
        px-4
        py-4
        text-center
        text-green-400
        text-sm
      "
                      >
                        Consultation request submitted successfully.
                      </div>
                    )}

                    {/* NOTE */}
                    <p className="text-center text-white/35 text-[11px] leading-6">
                      We’ll review your inquiry and reach out shortly with
                      confirmation details.
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
