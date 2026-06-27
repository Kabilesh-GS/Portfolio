import { Link } from "react-router-dom";

export default function MapLocation({ loc }) {
  const Icon = loc.icon;
  const isHome = loc.route === "/";

  return (
    <Link to={loc.route} aria-label={`${loc.name} — ${loc.section}`} style={{ left: `${loc.x}%`, top: `${loc.y}%` }} className="group absolute z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center" >
      <span className="relative flex items-center justify-center">
        <span className="absolute inline-flex h-12 w-12 animate-ping rounded-full bg-gold/20 [animation-duration:3s]" />
        <span className={`relative flex h-11 w-11 items-center justify-center rounded-full border bg-ink-soft/90 text-xl shadow-[0_0_16px_rgba(201,162,39,0.35)] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_28px_rgba(233,105,47,0.7)] ${isHome ? "border-ember/70 text-ember-bright" : "border-gold/60 text-gold" }`}>
          <Icon />
        </span>
      </span>

      <span className="heading-cinzel mt-2 whitespace-nowrap text-[0.6rem] uppercase tracking-[0.2em] text-parchment font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] transition-colors group-hover:text-gold-bright md:text-[0.7rem]">
        {loc.name}
      </span>

      <span className="pointer-events-none absolute top-full mt-7 w-48 translate-y-1 rounded-md border border-gold/40 bg-ink/95 px-3 py-2 text-center text-xs text-parchment-dim opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        {loc.blurb}
      </span>
    </Link>
  );
}
