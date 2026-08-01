import RSVPForm from "./RSVPForm";

export default function RSVPCard() {
  return (
    <div
      className="
        mx-auto
        max-w-3xl
        rounded-[32px]
        border
        border-[var(--color-border)]
        bg-[var(--color-paper)]
        p-10
        shadow-[var(--shadow-large)]
      "
    >
      <RSVPForm />
    </div>
  );
}
