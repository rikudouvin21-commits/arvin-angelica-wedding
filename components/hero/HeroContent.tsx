"use client";

import { motion, type Variants } from "framer-motion";
import HeroButton from "./HeroButton";
import { wedding } from "@/data/wedding";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.22,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function HeroContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="
        relative
        mx-auto
        flex
        w-full
        max-w-2xl
        flex-col
        items-center
        text-center
        px-6
        py-10
        sm:px-10
        sm:py-14
      "
    >
      {/* Decorative top ornament */}
      <motion.div
        variants={item}
        className="
          mb-6
          text-2xl
          text-[var(--color-dusty-rose)]
          sm:mb-8
          sm:text-3xl
        "
      >
        ❦
      </motion.div>

      {/* Initials */}
      <motion.p
        variants={item}
        className="
          uppercase
          tracking-[0.6em]
          text-[10px]
          font-medium
          text-[var(--color-dusty-rose-dark)]
          sm:text-xs
          sm:tracking-[0.7em]
        "
      >
        A & A
      </motion.p>

      {/* Couple names */}
      <motion.h1
        variants={item}
        className="
          mt-6
          font-serif
          font-light
          leading-[0.9]
          tracking-tight
          text-[var(--color-text)]
          text-5xl
          sm:text-7xl
          md:text-[5.5rem]
        "
      >
        <span className="block">{wedding.couple.groom}</span>

        <span
          className="
            my-3
            block
            font-serif
            text-3xl
            italic
            text-[var(--color-dusty-rose)]
            sm:my-4
            sm:text-4xl
          "
        >
          &
        </span>

        <span className="block">{wedding.couple.bride}</span>
      </motion.h1>

      {/* Decorative divider */}
      <motion.div
        variants={item}
        className="
          mt-8
          flex
          items-center
          gap-4
          sm:mt-10
        "
      >
        <span
          className="
            h-px
            w-12
            bg-[var(--color-dusty-rose-light)]
            sm:w-20
          "
        />

        <span className="text-sm text-[var(--color-dusty-rose)]">✦</span>

        <span
          className="
            h-px
            w-12
            bg-[var(--color-dusty-rose-light)]
            sm:w-20
          "
        />
      </motion.div>

      {/* Invitation message */}
      <motion.div
        variants={item}
        className="
          mt-7
          max-w-lg
          text-sm
          leading-7
          text-[var(--color-text-light)]
          sm:mt-9
          sm:text-base
          sm:leading-8
        "
      >
        <p>{wedding.hero.invitation}</p>

        <p className="mt-3 italic text-[var(--color-dusty-rose-dark)]">
          {wedding.hero.promise}
        </p>
      </motion.div>

      {/* Wedding details */}
      <motion.div
        variants={item}
        className="
          mt-7
          space-y-1
          text-sm
          tracking-wide
          text-[var(--color-text)]
          sm:mt-9
          sm:text-base
        "
      >
        <p>{wedding.wedding.date}</p>
        <p>{wedding.wedding.time}</p>

        <p className="mt-3">{wedding.venue.ceremony.place}</p>

        <p className="text-xs text-[var(--color-text-light)] sm:text-sm">
          {wedding.venue.ceremony.address}
        </p>
      </motion.div>

      {/* Enter story */}
      <motion.div variants={item} className="mt-8 sm:mt-10">
        <HeroButton />
      </motion.div>

      {/* Bottom ornament */}
      <motion.div
        variants={item}
        className="
          mt-7
          text-sm
          text-[var(--color-dusty-rose)]
          sm:mt-9
        "
      >
        ✦
      </motion.div>
    </motion.div>
  );
}
