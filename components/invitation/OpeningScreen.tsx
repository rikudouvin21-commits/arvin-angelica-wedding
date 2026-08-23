"use client";

import { motion } from "framer-motion";

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
        bg-cover
        bg-center
        bg-[url('/images/ring%202.jpg')]
        px-5
        sm:px-8
      "
    >
      {/* Background overlay */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[rgba(247,244,239,0.38)]
          backdrop-blur-[1px]
        "
      />

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
            opacity-15
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
            bg-[var(--color-dusty-rose-soft)]
            opacity-15
            blur-3xl
          "
        />
      </div>

      {/* Outer decorative frame */}
      <div
        className="
          pointer-events-none
          absolute
          inset-[10px]
          z-20
          border
          sm:inset-[16px]
        "
        style={{
          borderColor: "var(--color-dusty-rose-light)",
          opacity: 0.75,
        }}
      />

      {/* Inner decorative frame */}
      <div
        className="
          pointer-events-none
          absolute
          inset-[15px]
          z-20
          border
          sm:inset-[22px]
        "
        style={{
          borderColor: "var(--color-dusty-rose)",
          opacity: 0.3,
        }}
      />

      {/* Floating invitation card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: [0, -5, 0],
          scale: 1,
        }}
        transition={{
          opacity: {
            duration: 0.8,
          },
          scale: {
            duration: 0.8,
            ease: "easeOut",
          },
          y: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          relative
          z-10
          w-full
          max-w-[345px]
          rounded-[28px]
          border
          border-[var(--color-border-accent)]
          bg-[var(--color-paper)]
          px-7
          py-9
          text-center
          shadow-[var(--shadow-floating)]
          sm:max-w-[390px]
          sm:rounded-[30px]
          sm:px-10
          sm:py-11
        "
      >
        {/* Top ornament */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
          className="
            text-lg
            text-[var(--color-dusty-rose)]
          "
        >
          ❦
        </motion.div>

        {/* Heading */}
        <motion.p
          initial={{
            opacity: 0,
            y: 6,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
          className="
            mt-3
            text-[9px]
            uppercase
            tracking-[0.24em]
            text-[var(--color-text-muted)]
          "
        >
          Together with our families
        </motion.p>

        {/* Couple */}
        <motion.div
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 0.7,
          }}
          className="mt-6"
        >
          <h1
            className="
              font-serif
              text-[48px]
              font-light
              leading-[0.9]
              tracking-tight
              text-[var(--color-text)]
              sm:text-[52px]
            "
          >
            Arvin
          </h1>

          <p
            className="
              my-2
              font-serif
              text-[22px]
              italic
              text-[var(--color-dusty-rose)]
            "
          >
            &
          </p>

          <h1
            className="
              font-serif
              text-[48px]
              font-light
              leading-[0.9]
              tracking-tight
              text-[var(--color-text)]
              sm:text-[52px]
            "
          >
            Angelica
          </h1>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          animate={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            delay: 0.65,
            duration: 0.6,
          }}
          className="
            mx-auto
            mt-6
            flex
            items-center
            justify-center
            gap-2
          "
        >
          <span
            className="
              h-px
              w-10
              bg-[var(--color-dusty-rose)]
            "
          />

          <span
            className="
              text-[10px]
              text-[var(--color-dusty-rose)]
            "
          >
            ✦
          </span>

          <span
            className="
              h-px
              w-10
              bg-[var(--color-dusty-rose)]
            "
          />
        </motion.div>

        {/* Date */}
        <motion.p
          initial={{
            opacity: 0,
            y: 6,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.75,
            duration: 0.6,
          }}
          className="
            mt-4
            text-[10px]
            uppercase
            tracking-[0.25em]
            text-[var(--color-text-muted)]
          "
        >
          11 · September · 2027
        </motion.p>

        {/* Guest information */}
        <motion.div
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.9,
            duration: 0.6,
          }}
          className="
            mx-auto
            mt-5
            w-full
            max-w-[240px]
            border-y
            py-3
          "
          style={{
            borderColor: "var(--color-dusty-rose-light)",
          }}
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.22em]
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
              text-[22px]
              font-light
              text-[var(--color-text)]
            "
          >
            {familyName}
          </h2>

          <p
            className="
              mt-2
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-[var(--color-text-faint)]
            "
          >
            Reserved Seats
          </p>

          <p
            className="
              mt-0.5
              font-serif
              text-[26px]
              text-[var(--color-text)]
            "
          >
            {reservedSeats}
          </p>
        </motion.div>

        {/* Open invitation */}
        <motion.button
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.05,
            duration: 0.6,
          }}
          type="button"
          onClick={onOpen}
          className="
            mt-6
            rounded-full
            border
            border-[var(--color-dusty-rose)]
            bg-[var(--color-paper)]
            px-7
            py-3
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-[var(--color-dusty-rose)]
            transition-all
            duration-300
            hover:bg-[var(--color-dusty-rose)]
            hover:text-white
            active:scale-95
          "
        >
          Open Invitation
        </motion.button>

        {/* Bottom ornament */}
        <div
          className="
            mt-3
            text-[11px]
            text-[var(--color-dusty-rose)]
          "
        >
          ✦
        </div>
      </motion.div>
    </main>
  );
}
