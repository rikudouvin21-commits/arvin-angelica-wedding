"use client";

import { wedding } from "@/data/wedding";
import TimelineItem from "./TimelineItem";

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
            top-40
            bottom-24
            hidden
            w-px
            -translate-x-1/2
            bg-[var(--color-border)]
            md:block
          "
        />

        <div className="space-y-24">
          {wedding.story.timeline.map((event, index) => (
            <TimelineItem
              key={event.date}
              date={event.date}
              title={event.title}
              description={event.description}
              icon={event.icon}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
