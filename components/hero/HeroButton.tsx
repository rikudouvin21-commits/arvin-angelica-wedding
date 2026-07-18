"use client";

import { motion } from "framer-motion";

export default function HeroButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => {
        document.getElementById("story")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
      className="
        mt-12
        rounded-full
        border
        border-[#D4B483]
        px-10
        py-4
        uppercase
        tracking-[0.25em]
        text-sm
        font-light
        transition-colors
        duration-300
        hover:bg-[#D4B483]
        hover:text-black
        shadow-lg
        shadow-[#D4B483]/20
        hover:shadow-[#D4B483]/40
      "
    >
      Enter Our Story
    </motion.button>
  );
}
