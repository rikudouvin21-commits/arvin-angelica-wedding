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
    ${scrolled ? "h-14" : "h-16"}
    w-[90%]
    max-w-4xl
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
          bg-[rgba(252,250,247,0.78)]
          backdrop-blur-xl
          shadow-[0_18px_60px_rgba(0,0,0,.12)]
        `
        : `
          border
        bg-white
        border-[#E5D2AF]
        `
    }
  `}
      >
        <h1
          className={`
  text-[30px]
  font-light
  tracking-[0.22em]
  transition-colors
  duration-500
  ${scrolled ? "text-[#B88A44]" : "text-[var(--color-text)]"}
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
                      : "text-[var(--color-text)] hover:text-[var(--color-gold)]"
                }
            `}
            >
              {link.title}
              <span
                className={`
                    absolute
                    left-1/2
                    -bottom-1
                    h-[2px]
                    bg-[#D4B483]
                    transition-all
                    duration-300

                ${
                  activeSection === link.href.replace("#", "")
                    ? "w-full -translate-x-1/2"
                    : "w-0 -translate-x-1/2"
                }
                `}
              />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
