"use client";

import { useCallback, useRef } from "react";

interface HoloCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function HoloCard({ children, className = "", style }: HoloCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  }, []);

  return (
    <div
      ref={ref}
      className={`holo-card ${className}`}
      onMouseMove={handleMouseMove}
      style={style}
    >
      {children}
    </div>
  );
}
