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
        bg-[#F8F5F1]
        px-4
        sm:px-6
      "
      style={{
        paddingTop: "max(env(safe-area-inset-top), 0.5rem)",
        paddingBottom: "max(env(safe-area-inset-bottom), 0.5rem)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          flex
          w-full
          max-w-md
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        {/* Header */}
        <p
          className="
            text-[8px]
            uppercase
            tracking-[0.22em]
            text-gray-500
            sm:text-sm
            sm:tracking-[0.4em]
          "
        >
          Together with our families
        </p>

        {/* Names */}
        <h1
          className="
            mt-3
            text-3xl
            font-light
            leading-[0.95]
            sm:mt-6
            sm:text-5xl
            sm:leading-tight
          "
        >
          Arvin
          <br />
          <span className="text-xl sm:text-3xl">&</span>
          <br />
          Angelica
        </h1>

        {/* Invitation message */}
        <p
          className="
            mt-3
            max-w-[260px]
            text-[11px]
            leading-4
            text-gray-600
            sm:mt-8
            sm:max-w-xs
            sm:text-base
            sm:leading-6
          "
        >
          Request the pleasure of your company
          <br className="hidden sm:block" />
          as we celebrate our wedding.
        </p>

        {/* Guest information */}
        <div
          className="
            mt-4
            w-full
            max-w-[280px]
            border-t
            border-b
            py-3
            sm:mt-10
            sm:max-w-md
            sm:py-6
          "
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.2em]
              text-gray-400
              sm:text-sm
              sm:tracking-[0.25em]
            "
          >
            Dear
          </p>

          <h2
            className="
              mt-1
              text-xl
              font-light
              sm:mt-2
              sm:text-3xl
            "
          >
            {familyName}
          </h2>

          <p
            className="
              mt-2
              text-[10px]
              text-gray-500
              sm:mt-5
              sm:text-sm
            "
          >
            Reserved Seats
          </p>

          <p
            className="
              text-xl
              font-semibold
              sm:text-3xl
            "
          >
            {reservedSeats}
          </p>
        </div>

        {/* Open button */}
        <button
          onClick={onOpen}
          className="
            mt-4
            w-full
            max-w-[280px]
            rounded-full
            border
            border-black
            px-6
            py-2.5
            text-xs
            transition
            hover:bg-black
            hover:text-white
            sm:mt-10
            sm:max-w-md
            sm:px-8
            sm:py-4
            sm:text-base
          "
        >
          Open Invitation
        </button>
      </motion.div>
    </main>
  );
}
