export default function RSVPHeader() {
  return (
    <div className="mb-16 text-center">
      <p
        className="
          uppercase
          tracking-[0.45em]
          text-xs
          font-semibold
          text-[var(--color-gold)]
        "
      >
        Kindly Respond
      </p>

      <h2
        className="
          mt-5
          text-5xl
          md:text-6xl
          font-light
          text-[var(--color-text)]
        "
      >
        We'd Love To Celebrate With You
      </h2>

      <div
        className="
          mx-auto
          mt-8
          h-px
          w-24
          bg-[var(--color-border)]
        "
      />

      <p
        className="
          mx-auto
          mt-8
          max-w-2xl
          text-lg
          leading-8
          text-[var(--color-text-light)]
        "
      >
        Please let us know whether you'll be joining us on our special day.
      </p>
    </div>
  );
}
