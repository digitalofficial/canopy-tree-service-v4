export default function Logo({ size = 40 }: { size?: number }) {
  const scale = size / 40;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: `${12 * scale}px` }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Canopy / crown */}
        <ellipse cx="20" cy="12" rx="14" ry="10" fill="#4ADE80" opacity="0.85" />
        <ellipse cx="13" cy="14" rx="9" ry="8" fill="#4ADE80" opacity="0.6" />
        <ellipse cx="27" cy="14" rx="9" ry="8" fill="#4ADE80" opacity="0.6" />
        <ellipse cx="20" cy="10" rx="10" ry="7" fill="#4ADE80" />
        {/* Trunk */}
        <rect x="18" y="20" width="4" height="14" rx="2" fill="#92400E" />
        {/* Roots */}
        <path d="M18 32 Q14 36 10 36" stroke="#92400E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M22 32 Q26 36 30 36" stroke="#92400E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
        <span
          style={{
            fontFamily: "var(--font-display), 'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: `${18 * scale}px`,
            color: "#F0FFF0",
            letterSpacing: "0.04em",
          }}
        >
          CANOPY
        </span>
        <span
          style={{
            fontFamily: "var(--font-display), 'Space Grotesk', sans-serif",
            fontWeight: 400,
            fontSize: `${10 * scale}px`,
            color: "#6B8068",
            letterSpacing: "0.12em",
            marginTop: `${2 * scale}px`,
          }}
        >
          TREE SERVICE
        </span>
      </div>
    </div>
  );
}
