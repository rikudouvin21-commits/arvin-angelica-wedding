export default function QuoteCard() {
  return (
    <div
      className="
        flex
        items-center
        justify-center
        rounded-3xl
        bg-white
        p-12
        text-center
        shadow-[var(--shadow-soft)]
      "
    >
      <p
        className="
          max-w-xl
          text-2xl
          font-light
          italic
          text-[var(--color-text-light)]
        "
      >
        “Every love story is beautiful, but ours is our favorite.”
      </p>
    </div>
  );
}
