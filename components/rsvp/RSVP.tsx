import FadeIn from "@/components/common/FadeIn";
import SectionTitle from "@/components/common/SectionTitle";
import RSVPCard from "./RSVPCard";
import { wedding } from "@/data/wedding";

export default function RSVP() {
  return (
    <section
      id="rsvp"
      className="
        bg-[var(--color-paper)]
        py-32
        px-6
      "
    >
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <SectionTitle
            eyebrow="Kindly Respond"
            title={wedding.rsvp.title}
            subtitle={wedding.rsvp.subtitle}
          />
        </FadeIn>

        <RSVPCard />
      </div>
    </section>
  );
}
