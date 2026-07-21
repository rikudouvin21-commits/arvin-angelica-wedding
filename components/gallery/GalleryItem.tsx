type GalleryItemProps = {
  image: string;
  alt: string;
};

export default function GalleryItem({ image, alt }: GalleryItemProps) {
  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        shadow-[var(--shadow-soft)]
        group
        cursor-pointer
      "
    >
      <img
        src={image}
        alt={alt}
        className="
        aspect-[4/5]
        w-full
            object-cover
            transition-all
            duration-700
            group-hover:scale-105
        "
      />
    </div>
  );
}
