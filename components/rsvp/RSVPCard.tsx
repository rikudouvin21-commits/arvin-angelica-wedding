import RSVPForm from "./RSVPForm";

import type { Invitation } from "@/types/invitation";
import type { Guest } from "@/types/guest";

interface RSVPCardProps {
  invitation: Invitation;
  guests: Guest[];
}

export default function RSVPCard({ invitation, guests }: RSVPCardProps) {
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
      <RSVPForm invitation={invitation} guests={guests} />
    </div>
  );
}
