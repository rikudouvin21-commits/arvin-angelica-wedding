"use client";

import { useState } from "react";

export default function GuestCounter() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <label
        className="
          mb-4
          block
          text-sm
          font-medium
          text-[var(--color-text)]
        "
      >
        Number of Guests
      </label>

      <div
        className="
          flex
          items-center
          justify-center
          gap-6
          rounded-3xl
          border
          border-[var(--color-border)]
          bg-white
          px-6
          py-5
        "
      >
        <button
          type="button"
          onClick={() => setCount(Math.max(1, count - 1))}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-[var(--color-border)]
            text-2xl
            transition-all
            duration-300
            hover:border-[var(--color-gold)]
            hover:bg-[var(--color-champagne)]
          "
        >
          −
        </button>

        <span
          className="
            w-10
            text-center
            text-3xl
            font-light
            text-[var(--color-text)]
          "
        >
          {count}
        </span>

        <button
          type="button"
          onClick={() => setCount(count + 1)}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-[var(--color-border)]
            text-2xl
            transition-all
            duration-300
            hover:border-[var(--color-gold)]
            hover:bg-[var(--color-champagne)]
          "
        >
          +
        </button>
      </div>
    </div>
  );
}
