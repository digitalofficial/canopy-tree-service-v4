"use client";

import { useEffect } from "react";

/**
 * Intersection Observer fallback for browsers that don't support
 * CSS animation-timeline: scroll() / view().
 * Adds .in-view class when elements enter the viewport.
 * Also handles hero scroll-fade for all browsers.
 */
export default function ScrollFallback() {
  useEffect(() => {
    // Hero scroll fade — works in all browsers
    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
      const handleScroll = () => {
        if (window.scrollY > window.innerHeight * 0.3) {
          heroSection.classList.add("scrolled-past");
        } else {
          heroSection.classList.remove("scrolled-past");
        }
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      // Cleanup stored for later
      const cleanup = () => window.removeEventListener("scroll", handleScroll);

      // IO fallback for other animations
      const supportsScrollTimeline = CSS.supports("animation-timeline: scroll()");
      if (!supportsScrollTimeline) {
        const targets = document.querySelectorAll(
          ".parallax-slow, .parallax-slow-deep, .text-reveal, .text-reveal-slow, .stat-scale, .word-reveal, .quote-reveal, .fade-in-scroll"
        );

        if (targets.length) {
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
          return () => { cleanup(); observer.disconnect(); };
        }
      }

      return cleanup;
    }
  }, []);

  return null;
}
