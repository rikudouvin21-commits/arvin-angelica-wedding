import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <HeroBackground />
      <HeroContent />
      <ScrollIndicator />

      <div
        className="
            absolute
            bottom-0
            left-0
            h-40
            w-full
            bg-gradient-to-b
            from-transparent
            to-[#F8F6F2]
        "
        />
    </section>
  );
}