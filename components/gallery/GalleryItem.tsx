import Image from "next/image";

type GalleryItemProps = {
  image: string;
  alt: string;
};

export default function GalleryItem({ image, alt }: GalleryItemProps) {
  return (
    <div
      className="
        group
        cursor-pointer
        overflow-hidden
        rounded-[var(--radius-large)]
        border
        border-[var(--color-border)]
        shadow-[var(--shadow-soft)]
      "
    >
      <Image
        src={image}
        alt={alt}
        width={900}
        height={1200}
        className="
          aspect-[4/5]
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-[1.03]
        "
      />
    </div>
  );
}
