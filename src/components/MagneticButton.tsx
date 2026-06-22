"use client";

import { useCallback, useRef } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  className?: string;
}

export default function MagneticButton({
  children,
  type = "button",
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = ref.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.setProperty("--btn-x", `${x * 0.15}px`);
    btn.style.setProperty("--btn-y", `${y * 0.15}px`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    const btn = ref.current;
    if (!btn) return;
    btn.style.setProperty("--btn-x", "0px");
    btn.style.setProperty("--btn-y", "0px");
  }, []);

  return (
    <button
      ref={ref}
      type={type}
      className={`magnetic-btn ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}
