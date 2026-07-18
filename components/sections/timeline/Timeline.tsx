"use client";

import { motion } from "framer-motion";
import { wedding } from "@/data/wedding";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="bg-white py-32 px-6"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-5xl font-serif">
          Our Journey
        </h2>

        <div className="mt-20 space-y-16">
          {wedding.timeline.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              className="flex items-start gap-8"
            >
              <div className="w-28 text-right">
                <p className="text-2xl font-semibold text-[#D4B483]">
                  {event.year}
                </p>
              </div>

              <div className="w-px self-stretch bg-[#D4B483]" />

              <div className="flex-1">
                <h3 className="text-2xl font-semibold">
                  {event.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}