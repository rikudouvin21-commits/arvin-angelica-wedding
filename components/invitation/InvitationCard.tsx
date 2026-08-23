"use client";

import { motion } from "framer-motion";

interface InvitationCardProps {
  children: React.ReactNode;
  expanded?: boolean;
  floating?: boolean;
}

export default function InvitationCard({
  children,
  expanded = false,
  floating = false,
}: InvitationCardProps) {
  return (
    <motion.div
      animate={
        floating
          ? {
              y: [0, -6, 0],
            }
          : {}
      }
      transition={
        floating
          ? {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }
          : {}
      }
      className={`
        mx-auto
        w-full
        max-w-xl
        overflow-hidden
        rounded-[28px]
        border
        border-[var(--color-border)]
        bg-[var(--color-paper)]
        shadow-[var(--shadow-floating)]

        max-h-[calc(100svh-48px)]
        overflow-y-auto

        sm:rounded-[36px]
        sm:max-h-none

        ${expanded ? "min-h-[860px]" : ""}
      `}
    >
      {children}
    </motion.div>
  );
}
