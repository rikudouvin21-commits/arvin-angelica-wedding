"use client";

import { motion } from "framer-motion";
import HeroButton from "./HeroButton";
import { wedding } from "@/data/wedding";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
    },
  },
};

export default function HeroContent() {
  return (
    <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="
          w-full
          max-w-2xl
          rounded-[32px]
          border
          border-white/15
          bg-white/10
          backdrop-blur-xl
          px-8
          py-12
          text-center
          text-white
          shadow-[0_25px_80px_rgba(0,0,0,0.18)]
        "
      >
        <motion.p
          variants={item}
          className="
            uppercase
            tracking-[0.7em]
            text-xs
            text-[#C89B47]
            font-medium
        "
        >
          A & A
        </motion.p>

        <motion.h1
          variants={item}
          className="
            mt-8
            text-5xl
            md:text-7xl
            font-light
            tracking-[0.02em]
            leading-[1.15]
            text-[#FAF8F5]
            drop-shadow-[0_3px_20px_rgba(0,0,0,0.18)]
          "
        >
          {wedding.couple.groom} & {wedding.couple.bride}
        </motion.h1>

        <motion.div
          variants={item}
          className="
        mx-auto
        mt-10
        h-[2px]
        w-32
        bg-gradient-to-r
        from-transparent
        via-[#C89B47]
        to-transparent
        "
        />

        <motion.p
          variants={item}
          className="
          mt-10
          text-xl
          leading-8
          text-white/88
          drop-shadow-[0_2px_12px_rgba(0,0,0,0.15)]
        "
        >
          {wedding.hero.tagline}
          <br />
          {wedding.hero.subtitle}
        </motion.p>

        <motion.div
          variants={item}
          className="
          mt-10
          space-y-3
          text-white/82
          tracking-wide
          text-[17px]
        "
        >
          <p>{wedding.wedding.date}</p>
          <p>{wedding.wedding.time}</p>
          <p>{wedding.venue.ceremony.place}</p>
          <p>{wedding.venue.ceremony.address}</p>
        </motion.div>

        <motion.div variants={item}>
          <HeroButton />
        </motion.div>
      </motion.div>
    </div>
  );
}
