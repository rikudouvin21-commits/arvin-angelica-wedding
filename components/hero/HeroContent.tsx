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
      duration: 1.1
    },
  },
};

export default function HeroContent() {
  return (
    <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="
         max-w-3xl
         rounded-3xl
        border
        border-white/15
        bg-white/10
        backdrop-blur-md
        px-10
         py-14
        text-center
         text-white
         shadow-2xl
        "
      >
        <motion.p
          variants={item}
          className="uppercase tracking-[0.6em] text-sm text-[#F5D08A]"
        >
          A & A
        </motion.p>

        <motion.h1
          variants={item}
          className="
            mt-8
            text-6xl
             md:text-8xl
             font-extralight
             tracking-wide
             leading-tight
            "
        >
          {wedding.couple.groom} & {wedding.couple.bride}
        </motion.h1>

        <motion.div
          variants={item}
          className="
        mx-auto
        mt-10
        h-px
        w-32
        bg-gradient-to-r
        from-transparent
        via-[#D4B483]
        to-transparent
        "
        />

        <motion.p
          variants={item}
          className="mt-10 text-xl text-white/90"
        >
          {wedding.hero.tagline}
          <br />
          {wedding.hero.subtitle}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 space-y-2 text-white/80"
        >
          <p>{wedding.wedding.date}</p>
          <p>{wedding.wedding.time}</p>
          <p>{wedding.venues.ceremony}</p>
        </motion.div>

        <motion.div variants={item}>
          <HeroButton />
        </motion.div>
      </motion.div>
    </div>
  );
}