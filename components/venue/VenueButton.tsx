interface VenueButtonProps {
  href: string;
}

export default function VenueButton({ href }: VenueButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-full
        border
        border-[var(--color-border)]
        px-6
        py-3
        text-sm
        font-medium
        text-[var(--color-gold)]
        transition-all
        duration-300
        hover:bg-[var(--color-gold)]
        hover:text-white
      "
    >
      View Location
    </a>
  );
}
