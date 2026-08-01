"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const invitedGuests = [
  "Arvin Dela Cruz",
  "Angelica Santos",
  "Matthew Santos",
  "Sophia Santos",
];

export default function RSVPGuests() {
  const [selectedGuests, setSelectedGuests] = useState<string[]>([
    invitedGuests[0],
    invitedGuests[1],
  ]);

  function toggleGuest(name: string) {
    setSelectedGuests((current) =>
      current.includes(name)
        ? current.filter((guest) => guest !== name)
        : [...current, name]
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-5">
        {invitedGuests.map((guest) => {
          const checked = selectedGuests.includes(guest);

          return (
            <motion.button
              layout
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              key={guest}
              type="button"
              onClick={() => toggleGuest(guest)}
              className={`
                relative
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
              {/* Gold Accent */}
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
                    {guest}
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
                    Reserved Guest
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
    </div>
  );
}
