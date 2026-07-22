interface TimelineIconProps {
  icon: "circle" | "sparkle" | "heart";
}

export default function TimelineIcon({ icon }: TimelineIconProps) {
  const icons = {
    circle: "●",
    sparkle: "✦",
    heart: "♥",
  };

  const glow =
    icon === "sparkle" || icon === "heart"
      ? "shadow-[0_0_22px_rgba(200,155,71,0.35)]"
      : "";

  const size = icon === "heart" ? "h-14 w-14 text-2xl" : "h-12 w-12 text-xl";

  return (
    <div
      className={`
        ${size}
        ${glow}
        flex
        items-center
        justify-center
        rounded-full
        border
        border-[var(--color-border)]
        bg-white
        text-[var(--color-gold)]
        transition-all
        duration-500
      `}
    >
      {icons[icon]}
    </div>
  );
}
