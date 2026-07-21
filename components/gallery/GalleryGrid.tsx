import GalleryItem from "./GalleryItem";
import QuoteCard from "./QuoteCard";

export default function GalleryGrid() {
  return (
    <div className="mt-20 grid gap-8 lg:grid-cols-12">
      {/* Large Photo */}
      <div className="lg:col-span-12">
        <GalleryItem image="/gallery/photo1.jpg" alt="Photo 1" />
      </div>

      {/* Two Photos */}
      <div className="lg:col-span-6">
        <GalleryItem image="/gallery/photo2.jpg" alt="Photo 2" />
      </div>

      <div className="lg:col-span-6">
        <GalleryItem image="/gallery/photo3.jpg" alt="Photo 3" />
      </div>

      {/* Quote */}
      <div className="lg:col-span-12">
        <QuoteCard />
      </div>

      {/* Wide Photo */}
      <div className="lg:col-span-12">
        <GalleryItem image="/gallery/photo4.jpg" alt="Photo 4" />
      </div>
    </div>
  );
}
