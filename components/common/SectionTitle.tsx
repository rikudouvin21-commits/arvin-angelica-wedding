type SectionTitleProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">
      <p
        className="
          uppercase
          tracking-[0.45em]
          text-sm
          text-[var(--color-gold)]
        "
      >
        {eyebrow}
      </p>

      <h2
        className="
          mt-6
          text-5xl
          md:text-6xl
          font-extralight
          text-[var(--color-text)]
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="
            mx-auto
            mt-8
            max-w-2xl
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
