"use client";

import { motion } from "framer-motion";
import TimelineIcon from "./TimelineIcon";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  icon: "circle" | "sparkle" | "heart";
  delay: number;
}

export default function TimelineItem({
  date,
  title,
  description,
  icon,
  delay,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: 0.8,
        delay,
      }}
      className="relative flex flex-col items-center text-center"
    >
      <TimelineIcon icon={icon} />

      <div className="mt-8 max-w-md">
        <p
          className="
            uppercase
            tracking-[0.25em]
            text-sm
            font-semibold
            text-[var(--color-gold)]
          "
        >
          {date}
        </p>

        <h3
          className="
            mt-3
            text-4xl
            font-semibold
            text-[var(--color-text)]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-5
            text-lg
            leading-9
            text-[var(--color-text-light)]
          "
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}
