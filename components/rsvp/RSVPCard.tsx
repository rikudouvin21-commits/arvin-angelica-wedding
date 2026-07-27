import RSVPForm from "./RSVPForm";

export default function RSVPCard() {
  return (
    <div
      className="
        rounded-[var(--radius-large)]
        border
        border-[var(--color-border)]
        bg-[var(--color-paper)]
        p-10
        shadow-[var(--shadow-soft)]
      "
    >
      <RSVPForm />
    </div>
  );
}
