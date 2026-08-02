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
    <main className="fixed inset-0 bg-[#F8F5F1] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full text-center"
      >
        <p className="uppercase tracking-[0.4em] text-sm text-gray-500">
          Together with our families
        </p>

        <h1 className="mt-6 text-5xl font-light leading-tight">
          Arvin
          <br />
          <span className="text-3xl">&</span>
          <br />
          Angelica
        </h1>

        <p className="mt-8 text-gray-600">
          Request the pleasure of your company
          <br />
          as we celebrate our wedding.
        </p>

        <div className="mt-10 border-t border-b py-6">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
            Dear
          </p>

          <h2 className="mt-2 text-3xl font-light">{familyName}</h2>

          <p className="mt-5 text-gray-500">Reserved Seats</p>

          <p className="text-3xl font-semibold">{reservedSeats}</p>
        </div>

        <button
          onClick={onOpen}
          className="mt-10 w-full rounded-full border border-black px-8 py-4 transition hover:bg-black hover:text-white"
        >
          Open Invitation
        </button>
      </motion.div>
    </main>
  );
}
