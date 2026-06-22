"use client";

import { useEffect } from "react";

/**
 * Intersection Observer fallback for browsers that don't support
 * CSS animation-timeline: scroll() / view().
 * Adds .in-view class when elements enter the viewport.
 */
export default function ScrollFallback() {
  useEffect(() => {
    // Check if browser supports scroll-driven animations natively
    const supportsScrollTimeline = CSS.supports("animation-timeline: scroll()");
    if (supportsScrollTimeline) return;

    const targets = document.querySelectorAll(
      ".parallax-slow, .parallax-slow-deep, .text-reveal, .text-reveal-slow, .stat-scale, .word-reveal, .quote-reveal, .fade-in-scroll"
    );

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
