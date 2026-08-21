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
        min-h-[100svh]
        items-center
        justify-center
        overflow-y-auto
        overscroll-contain
        bg-[#F8F5F1]
        px-4
        py-4
        sm:px-6
        sm:py-8
      "
      style={{
        paddingTop: "max(env(safe-area-inset-top), 1rem)",
        paddingBottom: "max(env(safe-area-inset-bottom), 1rem)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          w-full
          max-w-md
          text-center
        "
      >
        <p
          className="
            text-[10px]
            uppercase
            tracking-[0.28em]
            text-gray-500
            sm:text-sm
            sm:tracking-[0.4em]
          "
        >
          Together with our families
        </p>

        <h1
          className="
            mt-4
            text-4xl
            font-light
            leading-[1.05]
            sm:mt-6
            sm:text-5xl
            sm:leading-tight
          "
        >
          Arvin
          <br />
          <span className="text-2xl sm:text-3xl">&</span>
          <br />
          Angelica
        </h1>

        <p
          className="
            mx-auto
            mt-5
            max-w-xs
            text-sm
            leading-6
            text-gray-600
            sm:mt-8
          "
        >
          Request the pleasure of your company
          <br className="hidden sm:block" />
          as we celebrate our wedding.
        </p>

        <div
          className="
            mt-6
            border-t
            border-b
            py-4
            sm:mt-10
            sm:py-6
          "
        >
          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-gray-400
              sm:text-sm
            "
          >
            Dear
          </p>

          <h2
            className="
              mt-1
              text-2xl
              font-light
              sm:mt-2
              sm:text-3xl
            "
          >
            {familyName}
          </h2>

          <p className="mt-3 text-sm text-gray-500 sm:mt-5">Reserved Seats</p>

          <p
            className="
              text-2xl
              font-semibold
              sm:text-3xl
            "
          >
            {reservedSeats}
          </p>
        </div>

        <button
          onClick={onOpen}
          className="
            mt-6
            w-full
            rounded-full
            border
            border-black
            px-8
            py-3
            text-sm
            transition
            hover:bg-black
            hover:text-white
            sm:mt-10
            sm:py-4
          "
        >
          Open Invitation
        </button>
      </motion.div>
    </main>
  );
}
