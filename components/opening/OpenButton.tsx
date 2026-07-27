interface OpenButtonProps {
  onClick: () => void;
}

export default function OpenButton({ onClick }: OpenButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        rounded-full
        border
        border-[var(--color-gold)]
        px-10
        py-4
        text-sm
        font-semibold
        uppercase
        tracking-[0.35em]
        text-[var(--color-gold)]
        transition-all
        duration-500
        hover:bg-[var(--color-gold)]
        hover:text-white
      "
    >
      Open Invitation
    </button>
  );
}
