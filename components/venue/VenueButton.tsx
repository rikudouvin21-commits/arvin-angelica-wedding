"use client";

import { MapPinned } from "lucide-react";

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
        px-7
        py-3.5
        text-sm
        font-medium
        text-[var(--color-gold)]
        transition-all
        duration-500
        ease-out
        hover:-translate-y-0.5
        hover:bg-[var(--color-gold)]
        hover:text-white
        hover:shadow-[var(--shadow-soft)]
      "
    >
      <MapPinned size={18} strokeWidth={1.75} />
      View Location
    </a>
  );
}
