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
          text-center
        "
      >
        {/* Header */}
        <p
          className="
            uppercase
            tracking-[0.22em]
            text-[clamp(7px,1.6svh,11px)]
            leading-none
            text-gray-500
          "
        >
          Together with our families
        </p>

        {/* Names */}
        <h1
          className="
            mt-[clamp(8px,1.8svh,18px)]
            font-light
            leading-[0.9]
            text-[clamp(30px,7svh,52px)]
          "
        >
          Arvin
          <br />
          <span className="text-[clamp(18px,4svh,30px)]">&</span>
          <br />
          Angelica
        </h1>

        {/* Invitation message */}
        <p
          className="
            mt-[clamp(8px,1.8svh,18px)]
            max-w-[280px]
            text-[clamp(10px,1.9svh,15px)]
            leading-[1.35]
            text-gray-600
          "
        >
          Request the pleasure of your company
          <br />
          as we celebrate our wedding.
        </p>

        {/* Guest information */}
        <div
          className="
            mt-[clamp(10px,2.2svh,22px)]
            w-full
            max-w-[290px]
            border-t
            border-b
            py-[clamp(8px,1.8svh,18px)]
          "
        >
          <p
            className="
              uppercase
              tracking-[0.2em]
              text-[clamp(7px,1.5svh,11px)]
              leading-none
              text-gray-400
            "
          >
            Dear
          </p>

          <h2
            className="
              mt-[clamp(3px,0.8svh,8px)]
              truncate
              px-2
              font-light
              text-[clamp(18px,4svh,30px)]
              leading-tight
            "
          >
            {familyName}
          </h2>

          <p
            className="
              mt-[clamp(5px,1.2svh,12px)]
              text-[clamp(9px,1.7svh,13px)]
              text-gray-500
            "
          >
            Reserved Seats
          </p>

          <p
            className="
              font-semibold
              text-[clamp(20px,4.5svh,32px)]
              leading-none
            "
          >
            {reservedSeats}
          </p>
        </div>

        {/* Open Invitation */}
        <button
          type="button"
          onClick={onOpen}
          className="
            mt-[clamp(10px,2.2svh,22px)]
            w-full
            max-w-[290px]
            rounded-full
            border
            border-black
            px-6
            py-[clamp(9px,1.8svh,15px)]
            text-[clamp(10px,1.8svh,15px)]
            leading-none
            transition
            hover:bg-black
            hover:text-white
            active:scale-[0.98]
          "
        >
          Open Invitation
        </button>
      </motion.div>
    </main>
  );
}
