import SectionTitle from "@/components/common/SectionTitle";
import { wedding } from "@/data/wedding";
import FadeIn from "@/components/animations/FadeIn";

export default function Story() {
  return (
    <section
      id="story"
      className="
        bg-gradient-to-b
        from-[var(--color-background)]
        to-white
        py-24
        px-6
      "
    >
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <SectionTitle
            eyebrow="Our Story"
            title={wedding.story.heading}
            subtitle={wedding.story.subtitle}
          />
        </FadeIn>
      </div>
    </section>
  );
}
