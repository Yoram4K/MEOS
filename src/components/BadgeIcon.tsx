/**
 * Generieke, zelf ontworpen schild-badge — bewust GEEN kopie van het
 * officiële politielogo, om verwarring met de echte applicatie te voorkomen.
 */
export function BadgeIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path
        d="M24 4 L42 11 V22 C42 33 34.5 41 24 44 C13.5 41 6 33 6 22 V11 Z"
        fill="currentColor"
      />
      <path
        d="M24 12.5 L24 25 M17 18.5 L31 18.5"
        stroke="white"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="31.5" r="2.6" fill="white" />
    </svg>
  );
}
