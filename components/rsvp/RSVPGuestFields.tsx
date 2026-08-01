"use client";

import { motion } from "framer-motion";
import GuestCounter from "./GuestCounter";

export default function RSVPGuestFields() {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0, y: -15 }}
      animate={{ opacity: 1, height: "auto", y: 0 }}
      exit={{ opacity: 0, height: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="overflow-hidden space-y-8"
    >
      <GuestCounter />

      <div>
        <label
          className="
            mb-3
            block
            text-sm
            font-medium
            text-[var(--color-text)]
          "
        >
          Meal Preference
        </label>

        <select
          className="
            w-full
            rounded-2xl
            border
            border-[var(--color-border)]
            bg-white
            px-5
            py-4
          "
        >
          <option>No Preference</option>
          <option>Chicken</option>
          <option>Beef</option>
          <option>Fish</option>
          <option>Vegetarian</option>
        </select>
      </div>

      <div>
        <label
          className="
            mb-3
            block
            text-sm
            font-medium
            text-[var(--color-text)]
          "
        >
          Song Request (Optional)
        </label>

        <input
          placeholder="Your favorite song"
          className="
            w-full
            rounded-2xl
            border
            border-[var(--color-border)]
            bg-white
            px-5
            py-4
          "
        />
      </div>
    </motion.div>
  );
}
