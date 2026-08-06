"use client";

import { useState } from "react";

import OpeningScreen from "@/components/invitation/OpeningScreen";
import GuestSelectionCard from "@/components/invitation/GuestSelectionCard";

import type { Invitation } from "@/types/invitation";
import type { Guest } from "@/types/guest";

interface InvitationViewProps {
  invitation: Invitation;
  guests: Guest[];
}

export default function InvitationView({
  invitation,
  guests,
}: InvitationViewProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedGuests, setSelectedGuests] = useState<string[]>([]);

  function toggleGuest(guestId: string) {
    setSelectedGuests((current) =>
      current.includes(guestId)
        ? current.filter((id) => id !== guestId)
        : [...current, guestId]
    );
  }

  if (!isOpened) {
    return (
      <OpeningScreen
        familyName={invitation.family_name}
        reservedSeats={invitation.reserved_seats}
        onOpen={() => setIsOpened(true)}
      />
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-light">Arvin & Angelica</h1>

        <p className="mt-6">🎉 Invitation opened!</p>

        <p className="mt-2">Welcome {invitation.family_name}</p>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-center">
            Kindly let us know who will be celebrating with us.
          </h2>

          <div className="mt-6 space-y-4">
            {guests.map((guest) => (
              <GuestSelectionCard
                key={guest.id}
                guest={guest}
                selected={selectedGuests.includes(guest.id)}
                onToggle={toggleGuest}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
