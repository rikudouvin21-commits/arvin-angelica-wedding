"use client";

import { motion } from "framer-motion";

interface InvitationCardProps {
  children: React.ReactNode;
  expanded?: boolean;
}

export default function InvitationCard({
  children,
  expanded = false,
}: InvitationCardProps) {
  return (
    <motion.div
      layout
      transition={{
        duration: 0.9,
        ease: "easeInOut",
      }}
      className={`
        mx-auto
        w-full
        max-w-xl
        overflow-hidden
        rounded-[36px]
        border
        border-[var(--color-border)]
        ring-1
        ring-white/40
        bg-[var(--color-paper)]
        shadow-[0_40px_90px_rgba(0,0,0,0.12)]

        ${expanded ? "min-h-[860px]" : "min-h-[720px]"}
      `}
    >
      {children}
    </motion.div>
  );
}
