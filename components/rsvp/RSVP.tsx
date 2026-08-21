import RSVPHeader from "./RSVPHeader";
import RSVPCard from "./RSVPCard";

import type { Invitation } from "@/types/invitation";
import type { Guest } from "@/types/guest";

interface RSVPProps {
  invitation: Invitation;
  guests: Guest[];
}

export default function RSVP({ invitation, guests }: RSVPProps) {
  return (
    <section
      id="rsvp"
      className="py-[var(--section-padding)] px-6 bg-[var(--color-background)]"
    >
      <div className="mx-auto max-w-5xl">
        <RSVPHeader />

        <RSVPCard invitation={invitation} guests={guests} />
      </div>
    </section>
  );
}
