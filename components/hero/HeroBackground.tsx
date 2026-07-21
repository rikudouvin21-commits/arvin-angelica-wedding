"use client";

export default function HeroBackground() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          scale-105
          will-change-transform
        "
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/5
          via-[#F5D08A]/8
          to-black/18
        "
      />

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.16)_100%)]
       "
      />
    </>
  );
}
