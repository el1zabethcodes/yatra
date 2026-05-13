"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* ─── Fade-in helper ─── */
const Fade = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.75, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── 3D CTA Button ─── */
function GetStartedButton() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      whileTap={{ y: 3 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="inline-block cursor-pointer select-none"
    >
      <Link
        href="/login"
        className="relative inline-block px-16 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-lg transition-all duration-100"
        style={{
          background: "linear-gradient(180deg, #7a8f63 0%, #6B7D56 60%)",
          color: "#E6E4C5",
          boxShadow:
            "0 7px 0 #4a5a3a, 0 9px 0 #3a4a2a, 0 12px 24px rgba(74,90,58,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
        }}
      >
        <span
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 100%)",
          }}
        />
        GET STARTED
      </Link>
    </motion.div>
  );
}

/* ─── Divider ─── */
const Divider = () => (
  <div className="w-full h-px" style={{ background: "rgba(45,45,45,0.12)" }} />
);

/* ─── Glassmorphism card styles ─── */
const glassMain = {
  background: "rgba(255, 255, 255, 0.30)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.50)",
  boxShadow:
    "0 8px 32px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.65)",
  borderRadius: "28px",
};

const glassSub = {
  background: "rgba(255, 255, 255, 0.25)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.40)",
  boxShadow:
    "0 4px 16px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.55)",
  borderRadius: "20px",
};

export default function HomePage() {
  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{ background: "#F2F0D8", color: "#2D2D2D" }}
    >
      {/* ── Grid background ── */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(#E2E0C8 1px, transparent 1px),
            linear-gradient(90deg, #E2E0C8 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          opacity: 0.7,
        }}
      />

      {/* ── Plants — left ── */}
      <div className="fixed left-0 top-0 w-[160px] xl:w-[210px] h-full pointer-events-none z-10 hidden lg:block">
        <Image
          src="/assets/main/plants_back.png"
          alt=""
          fill
          className="object-cover object-right"
          sizes="210px"
        />
      </div>

      {/* ── Plants — right (mirrored) ── */}
      <div className="fixed right-0 top-0 w-[160px] xl:w-[210px] h-full pointer-events-none z-10 hidden lg:block scale-x-[-1]">
        <Image
          src="/assets/main/plants_back.png"
          alt=""
          fill
          className="object-cover object-right"
          sizes="210px"
        />
      </div>

      {/* ══════════════════════════════════════════════
          NAV — narrow strip
      ══════════════════════════════════════════════ */}
      <div className="relative z-20 max-w-5xl mx-auto px-6">
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between py-7"
        >
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 shrink-0">
              <Image
                src="/assets/main/logo.png"
                alt="Yatra"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span
              className="text-2xl font-black tracking-tight"
              style={{ color: "#2D2D2D" }}
            >
              Yatra
            </span>
          </div>

          <nav
            className="flex items-center gap-6 text-sm font-semibold"
            style={{ color: "#2D2D2D" }}
          >
            <Link
              href="/features"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              Pricing
            </Link>
            <Link
              href="/login"
              className="px-5 py-2 rounded-full font-black uppercase tracking-wider text-xs transition-all hover:opacity-90"
              style={{
                background: "#6B7D56",
                color: "#E6E4C5",
                boxShadow: "0 3px 0 #4a5a3a, 0 5px 10px rgba(74,90,58,0.25)",
              }}
            >
              Log in
            </Link>
          </nav>
        </motion.header>
      </div>

      {/* ══════════════════════════════════════════════
          HERO — wide layout
          Octopus left (z-20) overlaps glass cards (z-10)
      ══════════════════════════════════════════════ */}
      <section className="relative z-20 w-full max-w-5xl mx-auto px-6 pb-28 pt-4 overflow-visible">
        {/* Soft colour blobs — make glassmorphism visible */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "10%",
            left: "30%",
            width: 480,
            height: 480,
            background:
              "radial-gradient(circle, rgba(107,125,86,0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "5%",
            right: "5%",
            width: 320,
            height: 320,
            background:
              "radial-gradient(circle, rgba(255,220,160,0.22) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        {/* ── Flex row on desktop, column on mobile ── */}
        <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-0">
          {/* ── OCTOPUS — dominant, center-left ──
              Negative right margin pulls cards under the octopus edge
              z-20 keeps it in front of the glass cards               */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: -30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative shrink-0 z-20
                        w-[280px] h-[280px]
                        sm:w-[380px] sm:h-[380px]
                        md:w-[480px] md:h-[480px]
                        lg:w-[560px] lg:h-[560px]
                        md:-mr-20 lg:-mr-28"
            style={{ filter: "drop-shadow(0 24px 40px rgba(0,0,0,0.18))" }}
          >
            <Image
              src="/assets/main/octopus.png"
              alt="Ashta the octopus"
              fill
              className="object-contain object-bottom"
              priority
            />
          </motion.div>

          {/* ── GLASS CARDS — stacked, right side ── */}
          <div className="relative z-10 flex flex-col gap-5 flex-1 w-full min-w-0">
            {/* Main card — STAND OUT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: "easeOut" }}
              className="px-10 py-10 sm:px-12 sm:py-12"
              style={glassMain}
            >
              <h1
                className="font-black leading-[0.9] tracking-[-0.04em]"
                style={{
                  fontSize: "clamp(4.5rem, 10vw, 9rem)",
                  color: "#2D2D2D",
                }}
              >
                STAND
                <br />
                OUT
              </h1>
            </motion.div>

            {/* Secondary card — tagline */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.3, ease: "easeOut" }}
              className="px-8 py-5 sm:px-10 sm:py-6"
              style={glassSub}
            >
              <p
                className="font-semibold text-lg sm:text-xl leading-snug"
                style={{ color: "rgba(45,45,45,0.80)" }}
              >
                Close the Gap. Build Your Future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          BODY COPY — narrow centred column
      ══════════════════════════════════════════════ */}
      <div className="relative z-20 max-w-2xl mx-auto px-6 lg:px-0">
        <Divider />

        {/* ── Subheadline (Ashta intro) ── */}
        <section className="py-16">
          <Fade>
            <p
              className="text-lg font-medium leading-relaxed"
              style={{ color: "rgba(45,45,45,0.65)" }}
            >
              This was me, Ashta. I was drowning in options but starving for a
              system. My brain felt like a messy jungle. No map. No focus. Just
              pure, unfiltered panic.
            </p>
          </Fade>
        </section>

        <Divider />

        {/* ── TRANSITION SECTION ── */}
        <section className="py-20">
          <Fade>
            <p
              className="text-xl sm:text-2xl font-medium leading-relaxed"
              style={{ color: "rgba(45,45,45,0.82)" }}
            >
              Then, I found a steady beacon:{" "}
              <strong className="font-black" style={{ color: "#2D2D2D" }}>
                Yatra.
              </strong>{" "}
              It didn&apos;t tell me to &lsquo;hustle harder.&rsquo; It told me
              to breathe. I realized the ocean isn&apos;t something to
              fear—it&apos;s something to navigate. I just needed to find my
              specific current.
            </p>
          </Fade>
        </section>

        <Divider />

        {/* ── PHILOSOPHY SECTION ── */}
        <section className="py-20">
          <Fade>
            <p
              className="text-[10px] font-black uppercase tracking-[0.4em] mb-5"
              style={{ color: "rgba(45,45,45,0.35)" }}
            >
              The Philosophy
            </p>
            <p
              className="font-black tracking-tight leading-[1.15]"
              style={{
                fontSize: "clamp(2rem, 5.5vw, 3.5rem)",
                color: "#2D2D2D",
              }}
            >
              Yatra turned my chaos into an algorithm. Progress isn&apos;t about
              how many arms you have; it&apos;s about having the right tools in
              them.
            </p>
          </Fade>
        </section>

        <Divider />

        {/* ── FINAL CTA ── */}
        <section className="py-20 text-center">
          <Fade>
            <p
              className="text-[10px] font-black uppercase tracking-[0.4em] mb-6"
              style={{ color: "rgba(45,45,45,0.35)" }}
            >
              Your voyage starts here
            </p>
          </Fade>

          <Fade delay={0.1}>
            <p
              className="text-lg font-medium leading-relaxed max-w-lg mx-auto mb-12"
              style={{ color: "rgba(45,45,45,0.65)" }}
            >
              A grand voyage is just a collection of tiny splashes. We celebrate
              the &lsquo;Small Wins&rsquo; because that&apos;s where the growth
              happens. We don&apos;t care how fast you swim—we care that
              you&apos;re moving with intention.
            </p>
          </Fade>

          <Fade delay={0.2}>
            <GetStartedButton />
          </Fade>

          <Fade delay={0.3}>
            <p
              className="mt-5 text-xs font-medium"
              style={{ color: "rgba(45,45,45,0.4)" }}
            >
              Free 7-day trial · No credit card required
            </p>
          </Fade>
        </section>
      </div>

      {/* ── SHIP FOOTER IMAGE ── */}
      <div className="relative z-20 w-full mt-4">
        <Image
          src="/assets/main/ship_in_sea.png"
          alt="A ship sailing into the horizon"
          width={1440}
          height={600}
          className="w-full h-auto object-cover"
          style={{ display: "block" }}
        />
      </div>
    </div>
  );
}
