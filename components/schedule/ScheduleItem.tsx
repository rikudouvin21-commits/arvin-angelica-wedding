type ScheduleItemProps = {
  time: string;
  title: string;
  description: string;
};

export default function ScheduleItem({
  time,
  title,
  description,
}: ScheduleItemProps) {
  return (
    <div
      className="
        relative
        rounded-3xl
        border
        border-[var(--color-border)]
        bg-white
        p-8
        shadow-[var(--shadow-soft)]
      "
    >
      <p
        className="
          text-sm
          uppercase
          tracking-[0.35em]
          text-[var(--color-gold)]
        "
      >
        {time}
      </p>

      <h3 className="mt-4 text-3xl font-light">{title}</h3>

      <p className="mt-3 text-[var(--color-text-light)]">{description}</p>
    </div>
  );
}
