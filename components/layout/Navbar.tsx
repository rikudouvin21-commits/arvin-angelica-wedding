"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import useActiveSection from "@/hooks/useActiveSection";

const links = [
  { title: "Home", href: "#home" },
  { title: "Story", href: "#story" },
  { title: "Timeline", href: "#timeline" },
  { title: "Venue", href: "#venue" },
  { title: "RSVP", href: "#rsvp" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { activeSection } = useActiveSection();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleNavigation = () => {
    setMenuOpen(false);
  };

  return (
    <div
      className="
        pointer-events-none
        fixed
        left-0
        right-0
        top-3
        z-50
        flex
        justify-center
        px-3
        sm:top-5
      "
    >
      <div className="relative w-full max-w-4xl">
        <div
          className={`
            pointer-events-auto
            flex
            h-12
            w-full
            items-center
            justify-between
            rounded-full
            border
            px-4
            transition-all
            duration-500
            sm:h-16
            sm:px-8
            ${
              scrolled || menuOpen
                ? "border-[var(--color-border)] bg-[rgba(252,250,247,0.88)] shadow-[0_18px_60px_rgba(0,0,0,.12)] backdrop-blur-xl"
                : "border-[#E5D2AF] bg-white/95 backdrop-blur-md"
            }
          `}
        >
          <Link
            href="#home"
            onClick={handleNavigation}
            className="
              text-[22px]
              font-light
              tracking-[0.22em]
              text-[var(--color-text)]
              transition-colors
              duration-500
              sm:text-[30px]
            "
          >
            A & A
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => {
              const section = link.href.replace("#", "");

              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`
                    relative
                    pb-2
                    text-sm
                    uppercase
                    tracking-[0.22em]
                    transition-all
                    duration-300
                    ${
                      activeSection === section
                        ? "font-medium text-[var(--color-dusty-rose)]"
                        : scrolled
                          ? "text-gray-700 hover:text-[var(--color-dusty-rose)]"
                          : "text-[var(--color-text)] hover:text-[var(--color-dusty-rose)]"
                    }
                  `}
                >
                  {link.title}

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-1/2
                      h-[2px]
                      -translate-x-1/2
                      bg-[var(--color-dusty-rose)]
                      transition-all
                      duration-300
                      ${activeSection === section ? "w-full" : "w-0"}
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              text-[var(--color-dusty-rose-dark)]
              transition-all
              duration-300
              hover:bg-[var(--color-dusty-rose-light)]/20
              md:hidden
            "
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`
                  block
                  h-px
                  w-full
                  bg-current
                  transition-all
                  duration-300
                  ${menuOpen ? "translate-y-[4px] rotate-45" : ""}
                `}
              />

              <span
                className={`
                  block
                  h-px
                  w-full
                  bg-current
                  transition-all
                  duration-300
                  ${menuOpen ? "-rotate-45" : ""}
                `}
              />
            </div>
          </button>
        </div>

        <div
          className={`
            pointer-events-auto
            absolute
            left-0
            right-0
            top-[calc(100%+8px)]
            overflow-hidden
            rounded-[28px]
            border
            border-[var(--color-border-accent)]
            bg-[rgba(252,250,247,0.96)]
            shadow-[0_18px_60px_rgba(0,0,0,.12)]
            backdrop-blur-xl
            transition-all
            duration-300
            md:hidden
            ${
              menuOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-2 opacity-0"
            }
          `}
        >
          <nav className="flex flex-col px-4 py-2">
            {links.map((link) => {
              const section = link.href.replace("#", "");

              return (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={handleNavigation}
                  className={`
                    border-b
                    border-[var(--color-border)]
                    py-3
                    text-center
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    last:border-b-0
                    transition-colors
                    duration-300
                    ${
                      activeSection === section
                        ? "font-medium text-[var(--color-dusty-rose)]"
                        : "text-[var(--color-text)] hover:text-[var(--color-dusty-rose)]"
                    }
                  `}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
