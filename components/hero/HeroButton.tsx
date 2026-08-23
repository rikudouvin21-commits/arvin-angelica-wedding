"use client";

import { motion } from "framer-motion";

export default function HeroButton() {
  const scrollToStory = () => {
    document.getElementById("story")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      type="button"
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.97,
      }}
      onClick={scrollToStory}
      className="
        rounded-full
        border
        border-[var(--color-dusty-rose)]
        bg-[rgba(255,254,252,0.18)]
        px-9
        py-3.5
        text-xs
        font-light
        uppercase
        tracking-[0.25em]
        text-[var(--color-dusty-rose-dark)]
        shadow-[0_8px_30px_rgba(185,130,130,0.15)]
        backdrop-blur-sm
        transition-all
        duration-300

        hover:bg-[var(--color-dusty-rose)]
        hover:text-white
        hover:shadow-[0_10px_35px_rgba(185,130,130,0.3)]

        sm:px-10
        sm:py-4
        sm:text-sm
      "
    >
      Enter Our Story
    </motion.button>
  );
}
