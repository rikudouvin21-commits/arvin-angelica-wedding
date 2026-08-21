"use client";

import { useState } from "react";

import OpeningScreen from "@/components/invitation/OpeningScreen";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Story from "@/components/story/Story";
import Timeline from "@/components/timeline/Timeline";
import Venue from "@/components/venue/Venue";
import Schedule from "@/components/schedule/Schedule";
import Countdown from "@/components/countdown/Countdown";
import Gallery from "@/components/gallery/Gallery";
import RSVP from "@/components/rsvp/RSVP";
import Footer from "@/components/layout/Footer";

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
    <main>
      <Navbar />

      <Hero />

      <Story />

      <Timeline />

      <Venue />

      <Schedule />

      <Countdown />

      <Gallery />

      <RSVP invitation={invitation} guests={guests} />

      <Footer />
    </main>
  );
}
