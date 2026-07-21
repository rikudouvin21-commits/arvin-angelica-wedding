import FadeIn from "@/components/common/FadeIn";
import SectionTitle from "@/components/common/SectionTitle";
import ScheduleItem from "./ScheduleItem";

export default function Schedule() {
  return (
    <section id="schedule" className="bg-[#FFFDFC] py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionTitle
            eyebrow="Wedding Day"
            title="Celebration Schedule"
            subtitle="Here's how we'll celebrate together."
          />
        </FadeIn>

        <div className="mt-20 space-y-8">
          <ScheduleItem
            time="2:00 PM"
            title="Ceremony"
            description="The celebration begins."
          />

          <ScheduleItem
            time="3:30 PM"
            title="Photo Session"
            description="Family and friends photos."
          />

          <ScheduleItem
            time="5:00 PM"
            title="Cocktail Hour"
            description="Refreshments and mingling."
          />

          <ScheduleItem
            time="6:00 PM"
            title="Reception"
            description="Dinner, speeches and festivities."
          />

          <ScheduleItem
            time="8:00 PM"
            title="After Party"
            description="Let's dance the night away."
          />
        </div>
      </div>
    </section>
  );
}
