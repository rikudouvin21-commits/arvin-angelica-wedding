"use client";

import { motion } from "framer-motion";
import type { Guest } from "@/types/guest";

interface RSVPGuestsProps {
  guests: Guest[];
  selectedGuests: string[];
  onToggle: (guestId: string) => void;
}

export default function RSVPGuests({
  guests,
  selectedGuests,
  onToggle,
}: RSVPGuestsProps) {
  return (
    <div className="mt-8">
      <div className="space-y-4">
        {guests.map((guest) => {
          const checked = selectedGuests.includes(guest.id);

          return (
            <motion.button
              layout
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              key={guest.id}
              type="button"
              onClick={() => onToggle(guest.id)}
              className={`
                relative
                w-full
                overflow-hidden
                rounded-3xl
                border
                p-6
                text-left
                transition-all
                duration-300

                ${
                  checked
                    ? "border-[var(--color-gold)] bg-[var(--color-card-alt)] shadow-[var(--shadow-soft)]"
                    : "border-[var(--color-border)] bg-white hover:border-[var(--color-gold)]"
                }
              `}
            >
              {checked && (
                <motion.div
                  layoutId="guestAccent"
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-1.5
                    bg-[var(--color-gold)]
                  "
                />
              )}

              <div className="flex items-center justify-between">
                <div>
                  <h3
                    className="
                      text-xl
                      font-medium
                      text-[var(--color-text)]
                    "
                  >
                    {guest.full_name}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      tracking-[0.15em]
                      uppercase
                      text-[var(--color-text-light)]
                    "
                  >
                    Invited Guest
                  </p>
                </div>

                <motion.div
                  animate={{
                    scale: checked ? 1 : 0.85,
                    rotate: checked ? 0 : -15,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    text-xl

                    ${
                      checked
                        ? "border-[var(--color-gold)] bg-[var(--color-gold)] text-white"
                        : "border-[var(--color-border)] text-[var(--color-text-light)]"
                    }
                  `}
                >
                  {checked ? "✓" : "○"}
                </motion.div>
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-[var(--color-text-light)]">
          Selected:{" "}
          <span className="font-medium text-[var(--color-text)]">
            {selectedGuests.length}
          </span>{" "}
          {selectedGuests.length === 1 ? "guest" : "guests"}
        </p>
      </div>
    </div>
  );
}
