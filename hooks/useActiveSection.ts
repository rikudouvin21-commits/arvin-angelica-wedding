"use client";

import { useEffect, useState } from "react";

const sections = ["home", "story", "timeline", "venue", "gallery", "schedule"];

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return {
    activeSection,
    setActiveSection,
  };
}
