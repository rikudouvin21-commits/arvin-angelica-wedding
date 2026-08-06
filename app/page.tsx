"use client";

import OpeningExperience from "@/components/opening/OpeningExperience";

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

export default function Home() {
  return (
    <OpeningExperience>
      <Navbar />

      <Hero />

      <Story />

      <Timeline />

      <Venue />

      <Schedule />

      <Countdown />

      <Gallery />

      <RSVP />

      <Footer />
    </OpeningExperience>
  );
}
