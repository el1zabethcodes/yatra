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
        {/* Gloss highlight */}
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

/* ─── Divider line ─── */
const Divider = () => (
  <div className="w-full h-px" style={{ background: "rgba(45,45,45,0.12)" }} />
);

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
          MAIN CONTENT — центрированная колонка
      ══════════════════════════════════════════════ */}
      <div className="relative z-20 max-w-2xl mx-auto px-6 lg:px-0">
        {/* ── NAV ── */}
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between py-7"
        >
          {/* Logo */}
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

          {/* Nav links */}
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

        {/* ── HERO ── */}
        <section className="pt-4 pb-20 text-center">
          {/* Octopus character — hero element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 mb-6 drop-shadow-2xl"
          >
            <Image
              src="/assets/main/octopus.png"
              alt="Ashta the octopus"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Headline */}
          <Fade>
            <h1
              className="font-black leading-[1.0] tracking-[-0.03em] mb-8"
              style={{ fontSize: "clamp(2.6rem, 7vw, 5rem)", color: "#2D2D2D" }}
            >
              Ready to swap your
              <br />
              panic for a plan?
            </h1>
          </Fade>

          {/* Sub-headline */}
          <Fade delay={0.1}>
            <p
              className="text-lg font-medium leading-relaxed mx-auto max-w-lg"
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
            {/* Decorative label */}
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

        {/* ── FINAL CTA SECTION ── */}
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

          {/* 3D Button — styled like button_main.png */}
          <Fade delay={0.2}>
            <GetStartedButton />
          </Fade>

          {/* Reassurance micro-copy */}
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
