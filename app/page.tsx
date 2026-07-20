import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Story from "@/components/sections/story/Story";
import Timeline from "@/components/sections/timeline/Timeline";
import Venue from "@/components/sections/Venue";
import Countdown from "@/components/sections/countdown/Countdown";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <Timeline />
      <Venue />
      <Countdown />
    </>
  );
}
