import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import GalleryGrid from "./GalleryGrid";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#F8F6F2] py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionTitle
            eyebrow="Memories"
            title="Our Gallery"
            subtitle="Moments that brought us here."
          />
        </FadeIn>

        <GalleryGrid />
      </div>
    </section>
  );
}
