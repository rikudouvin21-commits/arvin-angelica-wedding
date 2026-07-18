"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center text-white/80"
      animate={{ y: [0, 8, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <p className="text-xs uppercase tracking-[0.4em]">
        Scroll
      </p>

      <div className="mt-2 text-2xl">
        ﹀
      </div>
    </motion.div>
  );
}