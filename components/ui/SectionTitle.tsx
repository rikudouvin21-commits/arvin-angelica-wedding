interface SectionTitleProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  eyebrow = "Our Story",
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-24 max-w-3xl text-center">
      <p
        className="
          uppercase
          tracking-[0.55em]
          text-xs
          font-semibold
          text-[var(--color-gold)]
        "
      >
        {eyebrow}
      </p>

      <h2
        className="
          mt-6
          text-4xl
          md:text-6xl
          font-medium
          leading-tight
          text-[var(--color-text)]
        "
      >
        {title}
      </h2>

      <div
        className="
          mx-auto
          mt-8
          h-px
          w-20
          bg-[var(--color-border)]
        "
      />

      {subtitle && (
        <p
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-lg
            leading-9
            text-[var(--color-text-light)]
          "
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
