import SectionTitle from "@/components/common/SectionTitle";
import { wedding } from "@/data/wedding";

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
        <SectionTitle
          eyebrow="Our Story"
          title={wedding.story.heading}
          subtitle={wedding.story.subtitle}
        />
      </div>
    </section>
  );
}
