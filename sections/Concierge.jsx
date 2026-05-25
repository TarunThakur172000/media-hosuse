"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, ArrowRight, CalendarDays, Phone } from "lucide-react";

const flows = {
  // MAIN MENU
  main: {
    message: "What can we help you with today?",
    options: [
      {
        label: "📅 Book a Shoot / Check Availability",
        next: "booking",
      },
      {
        label: "💰 View Pricing & Media Packages",
        next: "pricing",
      },
      {
        label: "📁 See Agent Brand Video Examples",
        next: "brandVideos",
      },
      {
        label: "📞 Chat With a Human",
        next: "human",
      },
      {
        label: "⚡ Speed & Logistics",
        next: "logistics",
      },

      {
        label: "🤝 Getting Started & ROI",
        next: "roi",
      },
    ],
  },

  // BOOKING FLOW
  booking: {
    message:
      "HDM creates cinematic media for modern real estate professionals, luxury listings, and personal branding. What type of shoot are you interested in?",
    options: [
      {
        label: "Personal Branding Shoot",
        response:
          "Personal branding shoots are designed to position agents with a premium modern presence through cinematic storytelling, lifestyle visuals, and social-first content.",
      },

      {
        label: "Luxury Listing Media",
        response:
          "HDM creates cinematic listing walkthroughs, aerial coverage, social edits, and premium visuals tailored for luxury real estate marketing.",
      },

      {
        label: "Monthly Content Retainer",
        response:
          "Monthly retainer packages help agents stay consistent with short-form content, personal branding, listing media, and social media storytelling.",
      },

      {
        label: "Check Availability",
        consultation: true,
      },
    ],
  },

  // PRICING FLOW
  pricing: {
    message:
      "Pricing depends on production scope, property size, travel, deliverables, and editing requirements.",
    options: [
      {
        label: "Personal Branding Packages",
        response:
          "Branding packages typically include cinematic filming, multiple short-form edits, social content, lifestyle visuals, and creative direction.",
      },

      {
        label: "Luxury Listing Packages",
        response:
          "Listing packages can include cinematic walkthroughs, aerial footage, photography, social media edits, and premium color grading.",
      },

      {
        label: "Monthly Content Packages",
        response:
          "Monthly content retainers are built for agents who want consistent social media content and ongoing personal brand growth.",
      },

      {
        label: "Request Custom Quote",
        consultation: true,
      },
    ],
  },

  // BRAND VIDEO FLOW
  brandVideos: {
    message:
      "HDM creates cinematic content designed to make agents look like the authority in their market.",
    options: [
      {
        label: "What is included in an Agent Brand Video shoot?",
        response:
          "Agent branding shoots typically include cinematic filming, lifestyle visuals, social media edits, creative direction, and premium post-production tailored for modern real estate marketing.",
      },

      {
        label:
          "Do you create short-form content for Instagram Reels and TikTok?",
        response:
          "Yes — HDM creates short-form cinematic content optimized for Instagram Reels, TikTok, YouTube Shorts, and social engagement.",
      },

      {
        label: "Can you help me script or plan my videos?",
        response:
          "Absolutely. HDM helps agents with creative direction, talking points, scene planning, scripting guidance, and natural on-camera flow.",
      },

      {
        label: "Do you offer day-in-the-life or monthly content packages?",
        response:
          "Yes — HDM offers ongoing monthly content systems and lifestyle-focused shoots designed to keep your brand active consistently.",
      },

      {
        label: "How long does a personal branding shoot take?",
        response:
          "Most branding shoots range from 2–6 hours depending on locations, deliverables, outfit changes, and content complexity.",
      },
    ],
  },

  // LISTING MEDIA FLOW
  listingMedia: {
    message:
      "HDM provides both cinematic personal branding and luxury listing media.",
    options: [
      {
        label: "Do you shoot property walkthroughs and listing photos?",
        response:
          "Yes — HDM provides cinematic walkthrough videos, listing photography, aerial media, social edits, and branding-focused property content.",
      },

      {
        label: "Do you offer drone/aerial footage for luxury properties?",
        response:
          "Yes — FAA-compliant aerial cinematography is available for luxury properties, architecture, landscapes, and large estates.",
      },

      {
        label: "Can you create a video that highlights both me and my listing?",
        response:
          "Absolutely. Hybrid branding + listing videos are one of the most effective ways to market both the property and the agent together.",
      },
    ],
  },

  // LOGISTICS FLOW
  logistics: {
    message:
      "Real estate moves fast — HDM is built around rapid production workflows and flexible scheduling.",
    options: [
      {
        label: "What is your turnaround time for edited content?",
        response:
          "Most projects are delivered within 24–72 hours depending on production scope and editing requirements.",
      },

      {
        label: "What should I wear or bring to a branding shoot?",
        response:
          "We recommend neutral luxury styling, clean wardrobe choices, and a few outfit variations that match your market and personal brand.",
      },

      {
        label: "Do you travel outside the local area for shoots?",
        response:
          "Yes — HDM travels for select luxury projects, branding campaigns, and premium listing productions.",
      },

      {
        label: "What happens if weather affects the shoot?",
        response:
          "Weather reschedules are handled flexibly. HDM works with clients to quickly secure the next available production date.",
      },
    ],
  },

  // ROI / GETTING STARTED
  roi: {
    message:
      "HDM helps agents build stronger digital presence, visibility, and long-term brand authority.",
    options: [
      {
        label: "How does onboarding work for new agents?",
        response:
          "The onboarding process includes a discovery call, creative planning, scheduling, content strategy, and production coordination.",
      },

      {
        label: "I’m awkward on camera — can you help?",
        response:
          "Absolutely. Most agents are not professional presenters. HDM guides posture, movement, pacing, talking flow, and natural delivery throughout filming.",
      },

      {
        label: "Do you offer monthly packages for social media?",
        response:
          "Yes — monthly content retainers are designed specifically for agents who want consistent visibility and ongoing content production.",
      },

      {
        label: "Book Consultation",
        consultation: true,
      },
    ],
  },

  // HUMAN FLOW
  human: {
    message:
      "Our team can help you with scheduling, pricing, project planning, and creative direction.",
    options: [
      {
        label: "Schedule Consultation",
        consultation: true,
      },
    ],
  },
};
export default function Concierge({ setOpenModal }) {
  const [open, setOpen] = useState(false);

  const [chat, setChat] = useState(flows.main);

  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: flows.main.message,
    },
  ]);

  // PREVENT BODY SCROLL ON MOBILE
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleOptionClick = (option) => {
    // USER MESSAGE
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: option.label,
      },
    ]);

    // CONSULTATION BUTTON
    if (option.consultation) {
      setTimeout(() => {
        setOpen(false);
        setOpenModal(true);
      }, 400);

      return;
    }

    // RESPONSE FLOW
    if (option.response) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            text: option.response,
          },
        ]);
      }, 500);

      return;
    }

    // NEXT FLOW
    if (option.next) {
      const nextFlow = flows[option.next];

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            text: nextFlow.message,
          },
        ]);

        setChat(nextFlow);
      }, 500);
    }
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      <motion.button
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1,
        }}
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-5 right-5 z-[999]"
      >
        <div
          className="
            relative
            flex
            items-center
            gap-3
            rounded-full
            border border-[#C8A15A]/30
            bg-[#111111]
            px-4 md:px-5
            py-3
            shadow-2xl
            backdrop-blur-xl
            overflow-hidden
            group
          "
        >
          {/* GLOW */}
          <div className="absolute inset-0 bg-[#C8A15A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* ICON */}
          <div className="relative w-11 h-11 rounded-full bg-[#C8A15A] flex items-center justify-center">
            <Bot className="text-black" size={22} />
          </div>

          {/* TEXT */}
          <div className="hidden sm:block text-left">
            <p className="text-white text-sm font-semibold">HDM Concierge</p>

            <p className="text-white/50 text-xs">Quick answers & booking</p>
          </div>

          {/* ONLINE */}
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-400 animate-ping" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-400" />
        </div>
      </motion.button>

      {/* CHAT WINDOW */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.96,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              fixed
              bottom-24
              right-4
              md:right-6
              z-[999]
              w-[calc(100vw-32px)]
              sm:w-[420px]
              h-[78vh]
              sm:h-[700px]
              max-h-[700px]
              rounded-[32px]
              border border-white/10
              bg-black/95
              backdrop-blur-2xl
              shadow-[0_0_60px_rgba(0,0,0,0.8)]
              overflow-hidden
              flex
              flex-col
            "
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-5 py-5 border-b border-white/10 bg-[#0B0B0B]">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#C8A15A] flex items-center justify-center">
                  <Bot className="text-black" size={20} />
                </div>

                <div>
                  <h3 className="text-white font-semibold">HDM Concierge</h3>

                  <p className="text-green-400 text-xs">Online now</p>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-white/50 hover:text-white transition"
              >
                <X size={22} />
              </button>
            </div>

            {/* CHAT BODY */}
            <div
              className="
                flex-1
                overflow-y-auto
                px-4
                py-5
                space-y-5

                scrollbar-thin
                scrollbar-track-transparent
                scrollbar-thumb-[#C8A15A]/30
              "
            >
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`
                      max-w-[85%]
                      rounded-[24px]
                      px-4
                      py-3
                      text-sm
                      leading-7

                      ${
                        msg.role === "user"
                          ? "bg-[#C8A15A] text-black"
                          : "bg-[#141414] text-white border border-white/10"
                      }
                    `}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* OPTIONS */}
              <div className="space-y-3 pt-2">
                {chat.options.map((option, index) => (
                  <motion.button
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    onClick={() => handleOptionClick(option)}
                    className="
                      w-full
                      flex
                      items-center
                      justify-between
                      gap-4
                      rounded-2xl
                      border border-white/10
                      bg-[#121212]
                      px-4
                      py-4
                      text-left
                      hover:border-[#C8A15A]/40
                      hover:bg-[#181818]
                      transition-all
                      duration-300
                      group
                    "
                  >
                    <span className="text-white/80 text-sm leading-6">
                      {option.label}
                    </span>

                    {option.consultation ? (
                      <CalendarDays size={18} className="text-[#C8A15A]" />
                    ) : (
                      <ArrowRight
                        size={18}
                        className="
                          text-[#C8A15A]
                          group-hover:translate-x-1
                          transition-transform
                        "
                      />
                    )}
                  </motion.button>
                ))}

                {/* HUMAN CTA */}
                <button
                  onClick={() => setOpenModal(true)}
                  className="
                    w-full
                    mt-2
                    rounded-2xl
                    border border-[#C8A15A]/40
                    bg-[#C8A15A]/10
                    px-4
                    py-4
                    text-[#F5F2EC]
                    text-sm
                    font-medium
                    flex
                    items-center
                    justify-center
                    gap-3
                    hover:bg-[#C8A15A]/20
                    transition-all
                  "
                >
                  <Phone size={18} />
                  Schedule Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
