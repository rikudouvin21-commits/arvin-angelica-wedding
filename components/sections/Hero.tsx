"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/hero.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-3xl text-center text-white"
        >
          <p className="uppercase tracking-[0.6em] text-sm text-[#F5D08A]">
            A & A
          </p>

          <h1 className="mt-8 text-6xl md:text-8xl font-light">
            Arvin & Angelica
          </h1>

          <div className="mx-auto mt-8 h-[2px] w-24 bg-[#D4B483]" />

          <p className="mt-8 text-xl text-white/90">
            A Promise Made.
            <br />
            A Forever To Begin.
          </p>

          <div className="mt-10 space-y-2 text-white/80">
            <p>September 25, 2027</p>
            <p>2:00 PM</p>
            <p>Our Lady of Mount Carmel</p>
          </div>

          <button
            className="
              mt-12
              rounded-full
              border
              border-[#D4B483]
              px-8
              py-4
              transition-all
              duration-300
              hover:bg-[#D4B483]
              hover:text-black
            "
          >
            Enter Our Story
          </button>
        </motion.div>
      </div>
    </section>
  );
}