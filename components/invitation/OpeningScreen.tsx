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
        bg-[#F7F0EB]
        px-5
        sm:px-8
      "
    >
      {/* Decorative background */}
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
            -left-24
            -top-24
            h-72
            w-72
            rounded-full
            bg-[#E8D3C8]
            opacity-30
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-24
            -right-24
            h-80
            w-80
            rounded-full
            bg-[#D9C1B5]
            opacity-25
            blur-3xl
          "
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="
          relative
          flex
          h-full
          w-full
          max-w-md
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        {/* Top ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.25,
            duration: 0.8,
          }}
          className="
            mb-[clamp(14px,3vh,28px)]
            text-xl
            text-[#B59A6A]
          "
        >
          ❦
        </motion.div>

        {/* Invitation heading */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.35,
            duration: 0.7,
          }}
          className="
            uppercase
            tracking-[0.28em]
            text-[clamp(8px,1.5vh,12px)]
            text-[#8D817A]
          "
        >
          Together with our families
        </motion.p>

        {/* Couple */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.9,
          }}
          className="
            mt-[clamp(16px,3vh,28px)]
          "
        >
          <h1
            className="
              font-serif
              font-light
              leading-[0.9]
              tracking-tight
              text-[#3E3733]
              text-[clamp(44px,9vh,68px)]
            "
          >
            Arvin
          </h1>

          <p
            className="
              my-[clamp(4px,1vh,10px)]
              font-serif
              text-[clamp(22px,4vh,32px)]
              italic
              text-[#B59A6A]
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
              text-[#3E3733]
              text-[clamp(44px,9vh,68px)]
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
            delay: 0.8,
            duration: 0.7,
          }}
          className="
            mt-[clamp(16px,3vh,28px)]
            h-px
            w-24
            bg-[#B59A6A]
          "
        />

        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.9,
            duration: 0.7,
          }}
          className="
            mt-[clamp(10px,2vh,18px)]
            uppercase
            tracking-[0.3em]
            text-[clamp(9px,1.7vh,13px)]
            text-[#8D817A]
          "
        >
          September 11, 2027
        </motion.p>

        {/* Guest information */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.05,
            duration: 0.7,
          }}
          className="
            mt-[clamp(16px,3vh,28px)]
            w-full
            max-w-[290px]
            border-y
            border-[#CDBBAE]
            py-[clamp(10px,2vh,18px)]
          "
        >
          <p
            className="
              uppercase
              tracking-[0.25em]
              text-[clamp(7px,1.4vh,11px)]
              text-[#A09690]
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
              text-[#3E3733]
            "
          >
            {familyName}
          </h2>

          <p
            className="
              mt-[clamp(6px,1.2vh,12px)]
              text-[clamp(8px,1.5vh,11px)]
              uppercase
              tracking-[0.2em]
              text-[#A09690]
            "
          >
            Reserved Seats
          </p>

          <p
            className="
              mt-1
              font-serif
              text-[clamp(22px,4vh,30px)]
              text-[#3E3733]
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
            delay: 1.2,
            duration: 0.7,
          }}
          type="button"
          onClick={onOpen}
          className="
            mt-[clamp(14px,2.5vh,24px)]
            rounded-full
            border
            border-[#8F7852]
            bg-transparent
            px-8
            py-[clamp(10px,1.8vh,15px)]
            text-[clamp(9px,1.7vh,13px)]
            uppercase
            tracking-[0.22em]
            text-[#6F5D42]
            transition-all
            duration-300
            hover:bg-[#8F7852]
            hover:text-white
            active:scale-95
          "
        >
          Open Invitation
        </motion.button>

        {/* Bottom ornament */}
        <div
          className="
            mt-[clamp(12px,2vh,20px)]
            text-sm
            text-[#B59A6A]
          "
        >
          ✦
        </div>
      </motion.div>
    </main>
  );
}
