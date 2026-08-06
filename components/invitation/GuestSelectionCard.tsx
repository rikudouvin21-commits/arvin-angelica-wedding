"use client";

import { motion } from "framer-motion";
import type { Guest } from "@/types/guest";

interface GuestSelectionCardProps {
  guest: Guest;
  selected: boolean;
  onToggle: (guestId: string) => void;
}

export default function GuestSelectionCard({
  guest,
  selected,
  onToggle,
}: GuestSelectionCardProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      type="button"
      onClick={() => onToggle(guest.id)}
      className={`
        w-full
        rounded-2xl
        border
        px-6
        py-5
        transition-all
        duration-200

        ${
          selected
            ? "border-rose-300 bg-rose-50"
            : "border-[var(--color-border)] bg-[var(--color-paper)]"
        }
      `}
    >
      <div className="flex items-center justify-between">
        <span className="text-lg font-medium">{guest.full_name}</span>

        <div
          className={`
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-full
            border-2
            transition-all

            ${
              selected
                ? "border-rose-500 bg-rose-500 text-white"
                : "border-gray-300"
            }
          `}
        >
          {selected ? "✓" : ""}
        </div>
      </div>
    </motion.button>
  );
}
