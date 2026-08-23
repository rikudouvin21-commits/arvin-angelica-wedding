import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-[var(--color-border)]
        bg-[var(--color-paper)]
        px-6
        py-20
      "
    >
      <div className="mx-auto max-w-4xl text-center">
        <div className="flex justify-center">
          <Heart
            size={34}
            strokeWidth={1.5}
            className="text-[var(--color-gold)]"
          />
        </div>

        <h2
          className="
            mt-8
            text-4xl
            font-light
            text-[var(--color-text)]
          "
        >
          We Can't Wait To Celebrate With You
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            leading-8
            text-[var(--color-text-light)]
          "
        >
          Thank you for being part of one of the most meaningful days of our
          lives. Your love, prayers, and presence mean more to us than words can
          express.
        </p>

        <div
          className="
            mx-auto
            mt-12
            h-px
            w-32
            bg-[var(--color-border)]
          "
        />

        <p
          className="
            mt-12
            text-sm
            uppercase
            tracking-[0.45em]
            text-[var(--color-gold)]
          "
        >
          September 11, 2027
        </p>

        <h3
          className="
            mt-4
            text-3xl
            font-light
            text-[var(--color-text)]
          "
        >
          Arvin & Angelica
        </h3>

        <p
          className="
            mt-12
            text-sm
            text-[var(--color-text-light)]
          "
        >
          Made with ❤️ for our family and friends.
        </p>
      </div>
    </footer>
  );
}
