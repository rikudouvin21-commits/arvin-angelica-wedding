interface RSVPButtonProps {
  children: React.ReactNode;
}

export default function RSVPButton({ children }: RSVPButtonProps) {
  return (
    <button
      type="submit"
      className="
        w-full
        rounded-full
        bg-[var(--color-gold)]
        px-8
        py-4
        text-sm
        font-semibold
        uppercase
        tracking-[0.25em]
        text-white
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-[var(--shadow-large)]
      "
    >
      {children}
    </button>
  );
}
