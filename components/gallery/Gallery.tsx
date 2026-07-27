import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import GalleryGrid from "./GalleryGrid";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[var(--color-background)] py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionTitle
            eyebrow="Our Journey"
            title="Moments We Treasure"
            subtitle="A glimpse into the moments that shaped our journey."
          />
        </FadeIn>

        <GalleryGrid />
      </div>
    </section>
  );
}
