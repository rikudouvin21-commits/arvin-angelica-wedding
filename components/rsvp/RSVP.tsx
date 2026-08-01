import RSVPHeader from "./RSVPHeader";
import RSVPCard from "./RSVPCard";

export default function RSVP() {
  return (
    <section
      id="rsvp"
      className="py-[var(--section-padding)] px-6 bg-[var(--color-background)]"
    >
      <div className="mx-auto max-w-5xl">
        <RSVPHeader />
        <RSVPCard />
      </div>
    </section>
  );
}
