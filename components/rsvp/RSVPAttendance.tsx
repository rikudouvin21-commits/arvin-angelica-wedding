"use client";

type RSVPAttendanceProps = {
  attendance: "accept" | "decline" | null;
  setAttendance: React.Dispatch<
    React.SetStateAction<"accept" | "decline" | null>
  >;
};

export default function RSVPAttendance({
  attendance,
  setAttendance,
}: RSVPAttendanceProps) {
  return (
    <div className="space-y-5">
      <h3
        className="
          text-sm
          font-medium
          uppercase
          tracking-[0.22em]
          text-[var(--color-text)]
        "
      >
        Will you attend?
      </h3>

      <div className="grid gap-5 md:grid-cols-2">
        <button
          type="button"
          onClick={() => setAttendance("accept")}
          className={`
            rounded-3xl
            border
            p-8
            text-left
            transition-all
            duration-300

            ${
              attendance === "accept"
                ? "border-[var(--color-gold)] bg-[var(--color-champagne)] shadow-[var(--shadow-soft)]"
                : "border-[var(--color-border)] bg-white hover:border-[var(--color-gold)] hover:shadow-lg"
            }
          `}
        >
          <div className="mb-5 text-3xl">✓</div>

          <h4 className="text-xl font-semibold text-[var(--color-text)]">
            Joyfully Accept
          </h4>

          <p className="mt-3 text-sm leading-7 text-[var(--color-text-light)]">
            We can't wait to celebrate this beautiful day together.
          </p>
        </button>

        <button
          type="button"
          onClick={() => setAttendance("decline")}
          className={`
            rounded-3xl
            border
            p-8
            text-left
            transition-all
            duration-300

            ${
              attendance === "decline"
                ? "border-[var(--color-gold)] bg-[var(--color-champagne)] shadow-[var(--shadow-soft)]"
                : "border-[var(--color-border)] bg-white hover:border-[var(--color-gold)] hover:shadow-lg"
            }
          `}
        >
          <div className="mb-5 text-3xl">✕</div>

          <h4 className="text-xl font-semibold text-[var(--color-text)]">
            Regretfully Decline
          </h4>

          <p className="mt-3 text-sm leading-7 text-[var(--color-text-light)]">
            We'll miss celebrating with you, but thank you for letting us know.
          </p>
        </button>
      </div>
    </div>
  );
}
