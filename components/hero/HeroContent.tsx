"use client";

import { motion, type Variants } from "framer-motion";
import HeroButton from "./HeroButton";
import { wedding } from "@/data/wedding";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: "easeOut",
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
          mx-auto
          w-full
          max-w-2xl
          rounded-[28px]
          border
          border-[var(--color-border)]
          bg-[rgba(252,250,247,0.88)]
          px-10
          py-11
          text-center
          shadow-[0_30px_80px_rgba(0,0,0,0.12)]
          backdrop-blur-md
        "
      >
        <motion.p
          variants={item}
          className="
            uppercase
            tracking-[0.7em]
            text-xs
            font-semibold
            text-[#C89B47]
          "
        >
          A & A
        </motion.p>

        <motion.h1
          variants={item}
          className="
          text-5xl
          md:text-[5.2rem]
          font-light
          leading-[0.95]
         text-[var(--color-text)]
        "
        >
          <span className="block">{wedding.couple.groom}</span>

          <span
            className="
              my-2
              block
              text-3xl
              font-light
              text-[var(--color-gold)]
            "
          >
            &
          </span>

          <span className="block">{wedding.couple.bride}</span>
        </motion.h1>

        <motion.div
          variants={item}
          className="
            mx-auto
            mt-6
            h-px
            w-24
            bg-[#D9C5A0]
          "
        />

        <motion.div
          variants={item}
          className="
          mt-7
          text-[17px]
          leading-8
          text-[#6D655D]
          "
        >
          <p>{wedding.hero.invitation}</p>

          <p className="mt-3 italic">{wedding.hero.promise}</p>
        </motion.div>

        <motion.div
          className="
            mt-6
            space-y-1
            text-[#4E4740]
            tracking-wide
            text-base
          "
        >
          <p>{wedding.wedding.date}</p>
          <p>{wedding.wedding.time}</p>
          <p>{wedding.venue.ceremony.place}</p>
          <p>{wedding.venue.ceremony.address}</p>
        </motion.div>

        <motion.div variants={item} className="mt-9">
          <HeroButton />
        </motion.div>
      </motion.div>
    </div>
  );
}
