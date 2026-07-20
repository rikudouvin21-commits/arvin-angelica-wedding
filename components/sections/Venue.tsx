import { wedding } from "@/data/wedding";
import VenueCard from "@/components/ui/VenueCard";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";

export default function Venue() {
  return (
    <section id="venue" className="bg-[#F8F6F2] py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionTitle
            eyebrow="Wedding Details"
            title="Join us as we celebrate"
            subtitle="We can't wait to celebrate our special day with our family and friends."
          />
        </FadeIn>

        <div className="grid gap-10 md:grid-cols-2">
          <FadeIn delay={0.2}>
            <VenueCard
              title={wedding.venue.ceremony.title}
              place={wedding.venue.ceremony.place}
              address={wedding.venue.ceremony.address}
              time={wedding.venue.ceremony.time}
              map={wedding.venue.ceremony.map}
            />
          </FadeIn>

          <FadeIn delay={0.4}>
            <VenueCard
              title={wedding.venue.reception.title}
              place={wedding.venue.reception.place}
              address={wedding.venue.reception.address}
              time={wedding.venue.reception.time}
              map={wedding.venue.reception.map}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
