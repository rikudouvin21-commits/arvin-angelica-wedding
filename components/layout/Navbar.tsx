"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import useActiveSection from "@/hooks/useActiveSection";

const links = [
  { title: "Home", href: "#" },
  { title: "Story", href: "#story" },
  { title: "Timeline", href: "#timeline" },
  { title: "Venue", href: "#venue" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { activeSection } = useActiveSection();
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="
        fixed
        top-6
        left-0
        right-0
        z-50
        flex
        justify-center
        pointer-events-none
        "
    >
      <div
        className={`
    pointer-events-auto
    flex
    h-16
    w-[92%]
    max-w-5xl
    items-center
    justify-between
    rounded-full
    px-8
    transition-all
    duration-500

    ${
      scrolled
        ? `
          border
          border-[var(--color-border)]
          bg-white/70
          backdrop-blur-2xl
          shadow-[var(--shadow-soft)]
        `
        : `
          bg-transparent
        `
    }
  `}
      >
        <h1
          className={`
            text-2xl
            font-light
            font-heading
            tracking-[0.4em]
            transition-colors
            duration-500
            ${scrolled ? "text-[#B88A44]" : "text-white"}
          `}
        >
          A & A
        </h1>

        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`
                relative
                uppercase
                text-sm
                tracking-[0.22em]
                pb-2
                transition-all
                duration-300

                ${
                  activeSection === link.href.replace("#", "")
                    ? "text-[#D4B483] font-medium"
                    : scrolled
                      ? "text-gray-700 hover:text-[#D4B483]"
                      : "text-white hover:text-[#F5D08A]"
                }
            `}
            >
              {link.title}
              <span
                className={`
                    absolute
                    left-0
                    -bottom-1
                    h-[2px]
                    bg-[#D4B483]
                    transition-all
                    duration-300
                ${activeSection === link.href.replace("#", "") ? "w-full" : "w-0"}
                `}
              />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
