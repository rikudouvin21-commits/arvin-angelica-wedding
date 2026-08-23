import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[var(--color-background)]
      "
    >
      {/* Full-screen video background */}
      <HeroBackground />

      {/* Main invitation content */}
      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          w-full
          items-center
          justify-center
          px-5
          py-24
          sm:px-8
          sm:py-28
        "
      >
        <HeroContent />
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />

      {/* Bottom fade into the next section */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-10
          h-40
          w-full
          bg-gradient-to-b
          from-transparent
          to-[var(--color-background)]
        "
      />
    </section>
  );
}
