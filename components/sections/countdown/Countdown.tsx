"use client";

import { useEffect, useState } from "react";
import CountdownItem from "./CountdownItem";

export default function Countdown() {
  const weddingDate = new Date("2027-09-25T14:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      const difference = weddingDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="countdown" className="bg-[#F8F6F2] py-32 px-6">
      <div className="mx-auto max-w-6xl text-center">
        <p className="uppercase tracking-[0.4em] text-[#B88A44]">
          Counting Down To
        </p>

        <h2 className="mt-5 text-5xl font-light text-[#2F2F2F]">
          Our Forever Begins
        </h2>

        <p className="mt-6 text-gray-500">September 25, 2027</p>

        <div className="mt-20 grid grid-cols-2 gap-12 md:grid-cols-4">
          <CountdownItem value={timeLeft.days} label="Days" />

          <CountdownItem value={timeLeft.hours} label="Hours" />

          <CountdownItem value={timeLeft.minutes} label="Minutes" />

          <CountdownItem value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
}
