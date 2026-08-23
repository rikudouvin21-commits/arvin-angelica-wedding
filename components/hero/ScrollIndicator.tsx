"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="
        absolute
        bottom-6
        left-1/2
        z-20
        -translate-x-1/2
      "
      animate={{ y: [0, 8, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Link
        href="#story"
        aria-label="Scroll to our story"
        className="
          flex
          min-h-[64px]
          min-w-[100px]
          flex-col
          items-center
          justify-center
          rounded-full
          bg-black/15
          px-4
          py-2
          text-white
          backdrop-blur-[3px]
          transition-all
          duration-300
          hover:bg-black/25
          active:scale-95
        "
      >
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>

        <span className="mt-1 text-2xl leading-none">﹀</span>
      </Link>
    </motion.div>
  );
}
