export default function RSVPNameField() {
  return (
    <div>
      <label
        className="
          mb-3
          block
          text-sm
          font-medium
          text-[var(--color-text)]
        "
      >
        Full Name
      </label>

      <input
        type="text"
        placeholder="Enter your full name"
        className="
          w-full
          rounded-2xl
          border
          border-[var(--color-border)]
          bg-white
          px-6
          py-5
          outline-none
          transition

          focus:border-[var(--color-gold)]
          focus:ring-2
          focus:ring-[var(--color-champagne)]
        "
      />
    </div>
  );
}
