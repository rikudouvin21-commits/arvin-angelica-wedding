type CountdownItemProps = {
  value: number;
  label: string;
};

export default function CountdownItem({ value, label }: CountdownItemProps) {
  return (
    <div className="text-center">
      <div
        className="
          text-5xl
          md:text-7xl
          font-extralight
          text-[#2F2F2F]
        "
      >
        {String(value).padStart(2, "0")}
      </div>

      <p
        className="
          mt-4
          uppercase
          tracking-[0.35em]
          text-xs
          text-[#B88A44]
        "
      >
        {label}
      </p>
    </div>
  );
}
