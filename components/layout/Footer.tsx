import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F8F6F2] border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p
            className="
              uppercase
              tracking-[0.45em]
              text-sm
              text-[var(--color-gold)]
            "
          >
            Arvin & Angelica
          </p>

          <h2
            className="
              mt-6
              text-5xl
              font-light
              font-heading
            "
          >
            Thank You
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-[var(--color-text-light)]
              leading-8
            "
          >
            Thank you for celebrating one of the most important days of our
            lives. Your love, support, and presence mean everything to us.
          </p>
        </div>

        <div
          className="
            mt-16
            flex
            justify-center
            gap-10
            uppercase
            tracking-[0.25em]
            text-sm
          "
        >
          <Link href="#story">Story</Link>
          <Link href="#venue">Venue</Link>
          <Link href="#gallery">Gallery</Link>
          <Link href="#schedule">Schedule</Link>
        </div>

        <div
          className="
            mt-16
            text-center
            text-sm
            text-[var(--color-text-light)]
          "
        >
          September 25, 2027
          <br />
          "Thank you for being part of our forever."
        </div>
      </div>
    </footer>
  );
}
