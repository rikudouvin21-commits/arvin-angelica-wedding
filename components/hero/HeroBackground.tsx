"use client";

export default function HeroBackground() {
  return (
    <>
      {/* Wedding video */}
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

      {/* Soft champagne / rose overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[rgba(255,254,252,0.18)]
          via-[rgba(238,215,174,0.10)]
          to-[rgba(80,60,50,0.20)]
        "
      />

      {/* Soft center glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_25%,rgba(255,248,235,0.42),transparent_60%)]
        "
      />

      {/* Edge vignette */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_38%,rgba(50,35,30,0.14)_100%)]
        "
      />

      {/* Dusty rose atmosphere */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_15%_20%,rgba(185,130,130,0.10),transparent_30%)]
        "
      />
    </>
  );
}
