"use client";

export default function Hero() {
  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#F8F6F2]
      "
    >
      <div className="text-center">
        <p className="tracking-[0.5em] uppercase text-sm text-[#B38B59]">
          SAVE THE DATE
        </p>

        <h1 className="mt-6 text-6xl font-serif">
          Arvin & Angelica
        </h1>

        <p className="mt-6 text-gray-600">
          September 25, 2027
        </p>
      </div>
    </section>
  );
}