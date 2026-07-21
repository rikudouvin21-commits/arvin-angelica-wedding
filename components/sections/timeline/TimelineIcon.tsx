interface TimelineIconProps {
  icon: "circle" | "sparkle" | "heart";
}

export default function TimelineIcon({ icon }: TimelineIconProps) {
  const content = {
    circle: "●",
    sparkle: "✦",
    heart: "♥",
  };

  return (
    <div
      className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-[var(--color-border)]
        bg-white
        text-xl
        text-[var(--color-gold)]
        shadow-sm
      "
    >
      {content[icon]}
    </div>
  );
}
