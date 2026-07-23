import SectionTitle from "@/components/common/SectionTitle";
import VenueCard from "./VenueCard";
import { Church, PartyPopper } from "lucide-react";
import { wedding } from "@/data/wedding";

export default function Venue() {
  return (
    <section
      id="venue"
      className="
        bg-[var(--color-background)]
        py-32
        px-6
      "
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Wedding Details"
          title="Where Forever Begins"
          subtitle="Join us as we celebrate the beginning of our forever."
        />

        <div
          className="
            mt-20
            grid
            gap-10
            lg:grid-cols-2
          "
        >
          <VenueCard
            title={wedding.venue.ceremony.title}
            place={wedding.venue.ceremony.place}
            address={wedding.venue.ceremony.address}
            date={wedding.venue.ceremony.date}
            time={wedding.venue.ceremony.time}
            map={wedding.venue.ceremony.map}
            icon={<Church size={42} strokeWidth={1.5} />}
          />

          <VenueCard
            title={wedding.venue.reception.title}
            place={wedding.venue.reception.place}
            address={wedding.venue.reception.address}
            date={wedding.venue.reception.date}
            time={wedding.venue.reception.time}
            map={wedding.venue.reception.map}
            icon={<PartyPopper size={42} strokeWidth={1.5} />}
          />
        </div>
      </div>
    </section>
  );
}
