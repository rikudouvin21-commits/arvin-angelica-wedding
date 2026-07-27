"use client";

import { useState } from "react";
import RSVPButton from "./RSVPButton";

export default function RSVPForm() {
  const [attending, setAttending] = useState<boolean | null>(null);

  return (
    <form className="space-y-8">
      {/* Full Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-[var(--color-text)]"
        >
          Full Name
        </label>

        <input
          id="name"
          type="text"
          placeholder="Enter your full name"
          className="
            w-full
            rounded-xl
            border
            border-[var(--color-border)]
            bg-[var(--color-card)]
            px-5
            py-4
            text-[var(--color-text)]
            outline-none
            transition-all
            focus:border-[var(--color-gold)]
          "
        />
      </div>

      {/* Attendance */}
      <div>
        <label className="mb-3 block text-sm font-medium text-[var(--color-text)]">
          Will you be attending?
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <button
            type="button"
            onClick={() => setAttending(true)}
            className={`
              rounded-xl
              border
              py-4
              transition-all
              duration-300
              ${
                attending === true
                  ? "border-[var(--color-gold)] bg-[var(--color-champagne)] text-[var(--color-text)]"
                  : "border-[var(--color-border)] hover:border-[var(--color-gold)]"
              }
            `}
          >
            Joyfully Accept
          </button>

          <button
            type="button"
            onClick={() => setAttending(false)}
            className={`
              rounded-xl
              border
              py-4
              transition-all
              duration-300
              ${
                attending === false
                  ? "border-[var(--color-gold)] bg-[var(--color-champagne)] text-[var(--color-text)]"
                  : "border-[var(--color-border)] hover:border-[var(--color-gold)]"
              }
            `}
          >
            Regretfully Decline
          </button>
        </div>
      </div>

      {/* Number of Guests */}
      {attending && (
        <div>
          <label
            htmlFor="guests"
            className="mb-2 block text-sm font-medium text-[var(--color-text)]"
          >
            Number of Guests
          </label>

          <input
            id="guests"
            type="number"
            min="1"
            max="5"
            placeholder="1"
            className="
              w-full
              rounded-xl
              border
              border-[var(--color-border)]
              bg-[var(--color-card)]
              px-5
              py-4
              outline-none
              focus:border-[var(--color-gold)]
            "
          />
        </div>
      )}

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-[var(--color-text)]"
        >
          Message for the Couple
        </label>

        <textarea
          id="message"
          rows={5}
          placeholder="Write your message..."
          className="
            w-full
            rounded-xl
            border
            border-[var(--color-border)]
            bg-[var(--color-card)]
            px-5
            py-4
            outline-none
            resize-none
            focus:border-[var(--color-gold)]
          "
        />
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <RSVPButton>Send RSVP</RSVPButton>
      </div>
    </form>
  );
}
