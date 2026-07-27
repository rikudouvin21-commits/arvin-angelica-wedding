"use client";

import { wedding } from "@/data/wedding";
import TimelineItem from "./TimelineItem";
import FadeIn from "@/components/animations/FadeIn";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="
        relative
        bg-white
        px-6
        py-24
      "
    >
      <div className="mx-auto max-w-4xl">
        <div
          className="
            absolute
            left-1/2
            top-24
            bottom-20
            hidden
            w-px
            -translate-x-1/2
            bg-gradient-to-b
            from-transparent
            via-[#D9C5A0]
            to-transparent
            md:block
          "
        />

        <div className="space-y-24">
          {wedding.timeline.map((event, index) => (
            <FadeIn key={event.date} delay={index * 0.15}>
              <TimelineItem
                date={event.date}
                title={event.title}
                description={event.description}
                icon={event.icon}
                delay={index * 0.15}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
