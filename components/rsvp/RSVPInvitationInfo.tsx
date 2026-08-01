"use client";

export default function RSVPInvitationInfo() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-[var(--color-border)]
        bg-[var(--color-card-alt)]
        p-8
        text-center
      "
    >
      <p
        className="
          uppercase
          tracking-[0.35em]
          text-xs
          text-[var(--color-gold)]
        "
      >
        Kindly Respond
      </p>

      <h2
        className="
          mt-4
          text-3xl
          font-light
          text-[var(--color-text)]
        "
      >
        The Dela Cruz Family
      </h2>

      <div
        className="
          mx-auto
          my-6
          h-px
          w-24
          bg-[var(--color-border)]
        "
      />

      <p
        className="
          text-[15px]
          leading-8
          text-[var(--color-text-light)]
        "
      >
        We have reserved
        <span className="font-semibold text-[var(--color-gold)]">
          {" "}
          4 seats{" "}
        </span>
        for your family.
      </p>

      <p
        className="
          mt-2
          text-[15px]
          leading-8
          text-[var(--color-text-light)]
        "
      >
        Please select who will be joining us on our special day.
      </p>
    </div>
  );
}
