"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";

export default function MentorTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4"
    >
      {/* Lighthouse illustration */}
      <motion.div
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-44 h-44 md:w-60 md:h-60 mb-8"
        style={{ filter: "drop-shadow(0 0 32px rgba(211,84,0,0.22))" }}
      >
        <Image
          src="/assets/маяк.png"
          alt="A lighthouse shining through soft clouds"
          fill
          className="object-contain"
          sizes="240px"
        />
      </motion.div>

      {/* Card */}
      <div
        className="rounded-[28px] px-8 py-7 max-w-md"
        style={{
          background: "rgba(255,255,255,0.28)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.40)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.65)",
        }}
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <MessageCircle size={18} className="text-[#2D5A27]" />
          <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#2D5A27]">
            AI Mentor
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1B3B18] mb-2">
          Your Beacon Awaits
        </h2>
        <p className="text-sm text-[#1B3B18]/55 font-medium leading-relaxed">
          Kavi, your AI mentor, is warming up the lighthouse. Soon you&apos;ll
          have a private space to ask questions, get feedback, and find your
          current.
        </p>

        {/* Mock chat preview */}
        <div className="mt-5 space-y-2 text-left">
          {[
            { from: "kavi", text: "Hello, Captain. Ready to chart today's course?" },
            { from: "user", text: "Yes! What should I focus on this week?" },
          ].map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: msg.from === "kavi" ? -12 : 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.2 }}
              className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className="px-3.5 py-2.5 rounded-2xl text-xs font-medium max-w-[80%]"
                style={{
                  background:
                    msg.from === "kavi"
                      ? "rgba(45,90,39,0.12)"
                      : "rgba(211,84,0,0.12)",
                  color: "#1B3B18",
                  border:
                    msg.from === "kavi"
                      ? "1px solid rgba(45,90,39,0.18)"
                      : "1px solid rgba(211,84,0,0.18)",
                }}
              >
                {msg.from === "kavi" && (
                  <span className="font-black text-[#2D5A27] mr-1">Kavi:</span>
                )}
                {msg.text}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-sm uppercase tracking-wider text-white"
          style={{
            background: "#2D5A27",
            boxShadow: "0 4px 0 #1B3B18, 0 6px 16px rgba(45,90,39,0.28)",
          }}
        >
          <Sparkles size={15} />
          Notify Me
        </motion.button>
      </div>

      <p className="text-[10px] font-bold text-[#1B3B18]/30 uppercase tracking-widest mt-6">
        Coming Soon
      </p>
    </motion.div>
  );
}
