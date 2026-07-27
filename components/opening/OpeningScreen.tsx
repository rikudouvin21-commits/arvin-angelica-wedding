"use client";

import OpenButton from "./OpenButton";
import { wedding } from "@/data/wedding";
import InvitationCard from "@/components/invitation/InvitationCard";

interface OpeningScreenProps {
  onOpen: () => void;
}

export default function OpeningScreen({ onOpen }: OpeningScreenProps) {
  return (
    <section
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-[var(--color-background)]
        px-6
      "
    >
      <InvitationCard>
        <div
          className="
      px-12
      py-16
      text-center
    "
        >
          <p
            className="
            uppercase
            tracking-[0.35em]
            text-sm
            text-[var(--color-gold)]
          "
          >
            Together with our Families
          </p>

          <div className="my-10 text-[var(--color-gold)] text-2xl">❦</div>

          <h1
            className="
                text-6xl
                md:text-[5.8rem]
                font-light
                leading-none
                text-[var(--color-text)]
            "
          >
            {wedding.couple.groom}
          </h1>

          <p
            className="
            my-6
            text-2xl
            tracking-widest
            italic
            text-[var(--color-gold)]
          "
          >
            &
          </p>

          <h1
            className="
                text-6xl
                md:text-[5.8rem]
                font-light
                leading-none
                text-[var(--color-text)]
            "
          >
            {wedding.couple.bride}
          </h1>

          <div
            className="
                mx-auto
                mt-12
                h-px
                w-28
                bg-gradient-to-r
                from-transparent
                via-[var(--color-gold)]
                to-transparent
            "
          />

          <p
            className="
            mx-auto
            mt-10
            max-w-lg
            text-[17px]
            leading-8
            text-[var(--color-text-light)]
          "
          >
            Together with our families, we invite you to witness the joy of our
            wedding celebration as we begin our forever.
          </p>

          <p
            className="
            mt-14
            uppercase
            tracking-[0.4em]
            text-sm
            text-[var(--color-gold)]
          "
          >
            {wedding.wedding.date}
          </p>

          <div className="mt-14">
            <OpenButton onClick={onOpen} />
          </div>
        </div>
      </InvitationCard>
    </section>
  );
}
