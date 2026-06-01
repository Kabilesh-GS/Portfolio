import { useMemo } from "react";

/**
 * Drifting embers rising through the dark — used behind heroes and the throne room.
 * Purely decorative; pointer-events disabled.
 */
export default function EmberField({ count = 36, className = "" }) {
  const embers = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const size = 1 + Math.random() * 3;
        return {
          id: i,
          left: Math.random() * 100,
          size,
          delay: -Math.random() * 9,
          duration: 7 + Math.random() * 7,
          hue: Math.random() > 0.5 ? "#e9692f" : "#d4af37",
          drift: Math.random() * 40 - 20,
        };
      }),
    [count]
  );

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {embers.map((e) => (
        <span
          key={e.id}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${e.left}%`,
            width: `${e.size}px`,
            height: `${e.size}px`,
            background: e.hue,
            boxShadow: `0 0 ${e.size * 3}px ${e.hue}`,
            "--drift": `${e.drift}px`,
            animation: `ember-rise ${e.duration}s linear ${e.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
