import VenueButton from "./VenueButton";

interface VenueCardProps {
  title: string;
  place: string;
  address: string;
  date: string;
  time: string;
  map: string;
  icon: React.ReactNode;
}

export default function VenueCard({
  title,
  place,
  address,
  date,
  time,
  map,
  icon,
}: VenueCardProps) {
  return (
    <div
      className="
        rounded-[28px]
        border
        border-[var(--color-border)]
        bg-[var(--color-paper)]
        p-10
        text-center
        shadow-[var(--shadow-soft)]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-[var(--shadow-large)]
      "
    >
      <div className="flex justify-center text-[var(--color-gold)]">{icon}</div>

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-gold)]">
        {title}
      </p>

      <h3 className="mt-5 text-3xl font-semibold text-[var(--color-text)]">
        {place}
      </h3>

      <p className="mt-3 text-[var(--color-text-light)]">{address}</p>

      <div className="mx-auto mt-8 h-px w-20 bg-[var(--color-border)]" />

      <p className="mt-8 text-[var(--color-text)]">{date}</p>

      <p className="mt-2 text-[var(--color-text-light)]">{time}</p>

      <div className="mt-10">
        <VenueButton href={map} />
      </div>
    </div>
  );
}
