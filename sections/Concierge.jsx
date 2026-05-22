"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, X } from "lucide-react";

const aiResponses = {
  pricing:
    "HDM pricing depends on property scale, deliverables, drone coverage, and production complexity. Luxury cinematic packages are customized per project.",

  drone:
    "Yes — HDM provides FAA-compliant aerial cinematography with cinematic drone movement engineered for luxury real estate and automotive visuals.",

  booking:
    "You can schedule a strategy consultation directly with HDM. Most projects are onboarded within a rapid deployment workflow.",

  automotive:
    "HDM specializes in cinematic automotive storytelling including launch visuals, rolling shots, luxury dealership media, and high-performance branding.",

  default:
    "HDM AI is here to assist you with media strategy, pricing, production planning, and luxury content consultation.",
};

export default function Concierge() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hi — I’m HDM AI Concierge. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const lower = input.toLowerCase();

    let reply = aiResponses.default;

    if (lower.includes("price")) reply = aiResponses.pricing;
    else if (lower.includes("drone")) reply = aiResponses.drone;
    else if (lower.includes("book")) reply = aiResponses.booking;
    else if (lower.includes("car") || lower.includes("automotive"))
      reply = aiResponses.automotive;

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: reply,
        },
      ]);
    }, 900);

    setInput("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <>
      {/* FLOATING AI BUTTON */}
      <motion.button
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-[999] group"
      >
        <div className="relative flex items-center gap-3 bg-[#111111] border border-[#C8A15A]/40 rounded-full px-5 py-3 shadow-2xl backdrop-blur-xl overflow-hidden">
          {/* GLOW */}
          <div className="absolute inset-0 bg-[#C8A15A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* FACE */}
          <div className="relative w-11 h-11 rounded-full bg-[#C8A15A] flex items-center justify-center">
            <Bot className="text-black" size={22} />
          </div>

          {/* TEXT */}
          <div className="text-left hidden sm:block">
            <p className="text-white text-sm font-semibold">HDM AI Concierge</p>

            <span className="text-white/50 text-xs">Ask anything...</span>
          </div>

          {/* PING */}
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-400 animate-ping" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-400" />
        </div>
      </motion.button>

      {/* CHAT WINDOW */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.35 }}
            className="fixed bottom-24 right-6 z-[999] w-[92vw] sm:w-[420px] h-[650px] rounded-[32px] overflow-hidden border border-white/10 bg-black/95 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.8)]"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#0b0b0b]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C8A15A] flex items-center justify-center">
                  <Bot className="text-black" size={24} />
                </div>

                <div>
                  <h3 className="text-white font-bold tracking-wide">
                    HDM AI Concierge
                  </h3>

                  <p className="text-green-400 text-xs">Online now</p>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-white/60 hover:text-white transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* CHAT BODY */}
            <div className="flex-1 overflow-y-auto no-scrollbar px-5 py-6 space-y-5 h-[470px]">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-3xl px-5 py-4 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#C8A15A] text-black"
                        : "bg-[#151515] text-white border border-white/10"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              <div ref={messagesEndRef} />
            </div>

            {/* QUICK ACTIONS */}
            {/* QUICK ACTIONS */}
            <div className="px-4 flex flex-wrap gap-3 pb-4">
              {[
                {
                  label: "Pricing",
                  value: "pricing",
                },
                {
                  label: "Drone Coverage",
                  value: "drone",
                },
                {
                  label: "Booking",
                  value: "booking",
                },
                {
                  label: "Automotive",
                  value: "automotive",
                },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    const userMessage = {
                      role: "user",
                      text: item.label,
                    };

                    setMessages((prev) => [...prev, userMessage]);

                    setTimeout(() => {
                      setMessages((prev) => [
                        ...prev,
                        {
                          role: "ai",
                          text: aiResponses[item.value] || aiResponses.default,
                        },
                      ]);
                    }, 700);
                  }}
                  className="px-4 py-2 rounded-full bg-[#151515] border border-white/10 text-white/70 text-xs hover:border-[#C8A15A]/40 hover:text-white transition-all"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* INPUT */}
            <div className="border-t border-white/10 p-4 bg-[#0b0b0b]">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Ask HDM AI..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-1 bg-[#151515] border border-white/10 rounded-full px-5 py-4 text-white outline-none focus:border-[#C8A15A]/50"
                />

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={sendMessage}
                  className="w-14 h-14 rounded-full bg-[#C8A15A] flex items-center justify-center text-black"
                >
                  <Send size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
