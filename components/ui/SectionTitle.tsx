interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <p
        className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.45em]
          text-[var(--color-gold)]
        "
      >
        Our Story
      </p>

      <h2
        className="
          mt-4
          text-4xl
          md:text-5xl
          font-semibold
          text-[var(--color-text)]
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="
            mt-5
            text-lg
            leading-8
            text-[var(--color-text-light)]
          "
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
