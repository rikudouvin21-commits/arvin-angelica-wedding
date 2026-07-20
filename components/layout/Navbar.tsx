"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { title: "Home", href: "#" },
  { title: "Story", href: "#story" },
  { title: "Timeline", href: "#timeline" },
  { title: "Venue", href: "#venue" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        z-50
        w-full
        transition-all
        duration-500

        ${
          scrolled ? "bg-white/70 backdrop-blur-xl shadow-lg" : "bg-transparent"
        }
      `}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <h1
          className={`
            text-xl
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
                uppercase
                text-sm
                tracking-[0.2em]
                transition-all
                duration-300
                hover:text-[#D4B483]

                ${scrolled ? "text-gray-700" : "text-white"}
              `}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
