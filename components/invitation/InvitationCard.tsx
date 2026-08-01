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
              y: [0, -8, 0],
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
        rounded-[36px]
        border
        border-[var(--color-border)]
        bg-[var(--color-paper)]
        shadow-[var(--shadow-floating)]

        ${expanded ? "min-h-[860px]" : "min-h-[720px]"}
      `}
    >
      {children}
    </motion.div>
  );
}
