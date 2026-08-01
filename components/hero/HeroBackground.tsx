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
          from-white/10
          via-[#EED7AE]/10
          to-black/20
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_25%,rgba(255,248,235,0.45),transparent_60%)]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.12)_100%)]
        "
      />
    </>
  );
}
