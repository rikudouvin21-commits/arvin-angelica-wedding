export default function HeroBackground() {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/hero.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/45" />
    </>
  );
}