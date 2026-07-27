import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[var(--color-background)]
      "
    >
      <HeroBackground />

      <div className="relative z-10 w-full">
        <HeroContent />
      </div>

      <ScrollIndicator />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
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
