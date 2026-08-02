"use client";

import { useState } from "react";
import OpeningScreen from "@/components/invitation/OpeningScreen";

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
          <h2 className="text-xl font-semibold">Invited Guests</h2>

          <ul className="mt-4 space-y-2">
            {guests.map((guest) => (
              <li key={guest.id} className="rounded-lg border p-3">
                {guest.full_name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
