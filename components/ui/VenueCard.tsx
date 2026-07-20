type VenueCardProps = {
  title: string;
  place: string;
  address: string;
  time: string;
  map: string;
};

export default function VenueCard({
  title,
  place,
  address,
  time,
  map,
}: VenueCardProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-[#E7DAC5]
        bg-white
        p-10
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <p className="uppercase tracking-[0.35em] text-sm text-[#B88A44]">
        {title}
      </p>

      <h3 className="mt-5 text-3xl font-light">{place}</h3>

      <p className="mt-3 text-gray-500">{address}</p>

      <p className="mt-6 text-lg">{time}</p>

      <a
        href={map}
        target="_blank"
        rel="noreferrer"
        className="
          mt-8
          inline-block
          rounded-full
          border
          border-[#D4B483]
          px-6
          py-3
          transition
          hover:bg-[#D4B483]
          hover:text-white
        "
      >
        View Map
      </a>
    </div>
  );
}
