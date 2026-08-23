import SectionTitle from "@/components/common/SectionTitle";
import { wedding } from "@/data/wedding";
import FadeIn from "@/components/animations/FadeIn";

export default function Story() {
  return (
    <section
      id="story"
      className="
    relative
    scroll-mt-24
    overflow-hidden
    bg-[var(--color-background)]
    px-6
    py-28
    sm:scroll-mt-28
    sm:py-32
  "
    >
      {/* Soft decorative atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-72
          w-72
          rounded-full
          bg-[var(--color-dusty-rose-light)]
          opacity-10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-20
          h-80
          w-80
          rounded-full
          bg-[var(--color-champagne)]
          opacity-20
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Section heading */}
        <FadeIn>
          <SectionTitle
            eyebrow="Our Story"
            title={wedding.story.heading}
            subtitle={wedding.story.subtitle}
          />
        </FadeIn>

        {/* Decorative divider */}
        <FadeIn>
          <div className="mx-auto mt-10 flex items-center justify-center gap-4">
            <span
              className="
                h-px
                w-16
                bg-[var(--color-border-accent)]
                sm:w-24
              "
            />

            <span
              className="
                text-sm
                text-[var(--color-dusty-rose)]
              "
            >
              ✦
            </span>

            <span
              className="
                h-px
                w-16
                bg-[var(--color-border-accent)]
                sm:w-24
              "
            />
          </div>
        </FadeIn>

        {/* Story placeholder */}
        <FadeIn>
          <div
            className="
              mx-auto
              mt-14
              max-w-3xl
              rounded-[32px]
              border
              border-[var(--color-border-accent)]
              bg-[var(--color-paper)]
              px-7
              py-10
              text-center
              shadow-[var(--shadow-soft)]
              sm:px-12
              sm:py-14
            "
          >
            {/* Decorative icon */}
            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-[var(--color-dusty-rose-light)]
                text-xl
                text-[var(--color-dusty-rose)]
              "
            >
              ♡
            </div>

            <p
              className="
                mt-7
                text-sm
                uppercase
                tracking-[0.25em]
                text-[var(--color-dusty-rose-dark)]
              "
            >
              A journey together
            </p>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                font-serif
                text-lg
                leading-8
                text-[var(--color-text-light)]
                sm:text-xl
              "
            >
              Our story is still being written, and we cannot wait to share the
              moments that brought us here.
            </p>

            <div
              className="
                mx-auto
                mt-8
                h-px
                w-12
                bg-[var(--color-dusty-rose-light)]
              "
            />

            <p
              className="
                mt-6
                text-sm
                leading-7
                text-[var(--color-text-light)]
              "
            >
              More memories and photographs will be added here as we continue
              preparing our invitation.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
