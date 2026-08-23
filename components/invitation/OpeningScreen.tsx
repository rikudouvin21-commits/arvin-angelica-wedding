"use client";

import { motion } from "framer-motion";
import InvitationCard from "@/components/invitation/InvitationCard";

interface OpeningScreenProps {
  familyName: string;
  reservedSeats: number;
  onOpen: () => void;
}

export default function OpeningScreen({
  familyName,
  reservedSeats,
  onOpen,
}: OpeningScreenProps) {
  return (
    <main
      className="
        fixed
        inset-0
        z-[999]
        flex
        h-[100svh]
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[var(--color-background)]
        px-4
        sm:px-6
      "
    >
      {/* Soft background accents */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -left-28
            -top-28
            h-72
            w-72
            rounded-full
            bg-[var(--color-dusty-rose-soft)]
            opacity-20
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-28
            -right-28
            h-80
            w-80
            rounded-full
            bg-[var(--color-champagne)]
            opacity-20
            blur-3xl
          "
        />
      </div>

      {/* Decorative outer frame */}
      <div
        className="
          pointer-events-none
          absolute
          inset-[10px]
          border
          sm:inset-[16px]
        "
        style={{
          borderColor: "var(--color-dusty-rose-light)",
          opacity: 0.45,
        }}
      />

      {/* Floating invitation */}
      <InvitationCard floating>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="
            flex
            min-h-[min(720px,calc(100svh-32px))]
            flex-col
            items-center
            justify-center
            px-7
            py-10
            text-center
            sm:min-h-[720px]
            sm:px-12
            sm:py-16
          "
        >
          {/* Top ornament */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="
              text-xl
              text-[var(--color-gold)]
            "
          >
            ❦
          </motion.div>

          {/* Invitation heading */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
            }}
            className="
              mt-5
              uppercase
              tracking-[0.28em]
              text-[clamp(8px,1.5vh,12px)]
              text-[var(--color-gold)]
            "
          >
            Together with our families
          </motion.p>

          {/* Couple */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.45,
              duration: 0.9,
            }}
            className="mt-6"
          >
            <h1
              className="
                font-serif
                font-light
                leading-[0.9]
                tracking-tight
                text-[var(--color-text)]
                text-[clamp(42px,8vh,68px)]
              "
            >
              Arvin
            </h1>

            <p
              className="
                my-2
                font-serif
                text-[clamp(22px,4vh,32px)]
                italic
                text-[var(--color-gold)]
              "
            >
              &
            </p>

            <h1
              className="
                font-serif
                font-light
                leading-[0.9]
                tracking-tight
                text-[var(--color-text)]
                text-[clamp(42px,8vh,68px)]
              "
            >
              Angelica
            </h1>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{
              delay: 0.7,
              duration: 0.7,
            }}
            className="
              mt-7
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-px
                w-12
                bg-[var(--color-gold)]
              "
            />

            <span className="text-xs text-[var(--color-gold)]">✦</span>

            <span
              className="
                h-px
                w-12
                bg-[var(--color-gold)]
              "
            />
          </motion.div>

          {/* Date */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.7,
            }}
            className="
              mt-4
              uppercase
              tracking-[0.3em]
              text-[clamp(9px,1.7vh,13px)]
              text-[var(--color-text-muted)]
            "
          >
            11 · September · 2027
          </motion.p>

          {/* Guest information */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.95,
              duration: 0.7,
            }}
            className="
              mt-5
              w-full
              max-w-[290px]
              border-y
              py-4
            "
            style={{
              borderColor: "var(--color-dusty-rose-light)",
            }}
          >
            <p
              className="
                uppercase
                tracking-[0.25em]
                text-[clamp(7px,1.4vh,11px)]
                text-[var(--color-text-faint)]
              "
            >
              Dear
            </p>

            <h2
              className="
                mt-1
                truncate
                px-2
                font-serif
                font-light
                text-[clamp(20px,4vh,30px)]
                text-[var(--color-text)]
              "
            >
              {familyName}
            </h2>

            <p
              className="
                mt-2
                uppercase
                tracking-[0.2em]
                text-[clamp(8px,1.5vh,11px)]
                text-[var(--color-text-faint)]
              "
            >
              Reserved Seats
            </p>

            <p
              className="
                mt-1
                font-serif
                text-[clamp(22px,4vh,30px)]
                text-[var(--color-text)]
              "
            >
              {reservedSeats}
            </p>
          </motion.div>

          {/* Open invitation */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.1,
              duration: 0.7,
            }}
            type="button"
            onClick={onOpen}
            className="
              mt-5
              rounded-full
              border
              border-[var(--color-gold)]
              bg-transparent
              px-8
              py-3
              text-[clamp(9px,1.7vh,13px)]
              uppercase
              tracking-[0.22em]
              text-[var(--color-gold)]
              transition-all
              duration-300
              hover:bg-[var(--color-gold)]
              hover:text-white
              active:scale-95
            "
          >
            Open Invitation
          </motion.button>

          {/* Bottom ornament */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.3,
              duration: 0.7,
            }}
            className="
              mt-4
              text-sm
              text-[var(--color-gold)]
            "
          >
            ✦
          </motion.div>
        </motion.div>
      </InvitationCard>
    </main>
  );
}
