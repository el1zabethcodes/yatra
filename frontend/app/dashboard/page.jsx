"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BottomNavBar  from "@/components/dashboard/BottomNavBar";
import DashboardTab  from "@/components/dashboard/DashboardTab";
import RoadmapTab    from "@/components/dashboard/RoadmapTab";
import MentorTab     from "@/components/dashboard/MentorTab";

const TABS = {
  dashboard: DashboardTab,
  roadmap:   RoadmapTab,
  mentor:    MentorTab,
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const ActiveComponent = TABS[activeTab];

  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{ background: "#DFE0BF", color: "#1B3B18" }}
    >
      {/* ── Subtle grid texture ── */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(27,59,24,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(27,59,24,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Ambient colour blobs ── */}
      <div
        className="fixed pointer-events-none z-0"
        style={{
          top: "5%",
          left: "20%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(45,90,39,0.10) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="fixed pointer-events-none z-0"
        style={{
          bottom: "10%",
          right: "5%",
          width: 380,
          height: 380,
          background:
            "radial-gradient(circle, rgba(211,84,0,0.09) 0%, transparent 65%)",
          filter: "blur(70px)",
        }}
      />

      {/* ── Main content ── */}
      <main className="relative z-10 max-w-3xl mx-auto px-4 py-8 md:px-8 md:py-10 pb-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ── Floating pill nav ── */}
      <BottomNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
