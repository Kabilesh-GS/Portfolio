import { LOCATIONS } from "../../data/locations";
import MapLocation from "./MapLocation";

/**
 * The Known Realm — a stylised map of Westeros etched in gold against the dark.
 * Decorative SVG landmass + compass + grid; the seven holdings are overlaid as
 * percentage-positioned markers so they line up at any size.
 */
export default function WesterosMap() {
  const grid = [125, 250, 375, 500, 625, 750, 875];

  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-5xl">
      {/* gilded map frame */}
      <div className="absolute inset-0 rounded-lg border-2 border-gold/30 shadow-[inset_0_0_80px_rgba(0,0,0,0.7),0_0_40px_rgba(0,0,0,0.6)]" />
      <div className="absolute inset-2 rounded border border-gold/15" />

      <svg
        viewBox="0 0 1000 750"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="land" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(140,110,55,0.30)" />
            <stop offset="100%" stopColor="rgba(80,62,30,0.18)" />
          </linearGradient>
          <filter id="coast" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* lat / long grid */}
        <g stroke="rgba(201,162,39,0.10)" strokeWidth="1">
          {grid.map((x) => (
            <line key={`v${x}`} x1={x} y1="0" x2={x} y2="750" />
          ))}
          {grid.map((y) => (
            <line key={`h${y}`} x1="0" y1={y} x2="1000" y2={y} />
          ))}
        </g>

        <g stroke="rgba(212,175,55,0.65)" strokeWidth="2.5" fill="url(#land)" filter="url(#coast)">
          {/* the mainland — north to Dorne */}
          <path d="M250 96 C360 84 520 88 636 98 C648 160 700 240 700 330
                   C702 420 628 470 600 540 C572 612 470 700 372 712
                   C322 700 300 660 300 612 C262 560 248 470 256 392
                   C236 320 226 250 240 188 C238 150 240 120 250 96 Z" />
          {/* Dragonstone — eastern isle */}
          <path d="M742 330 C770 316 802 322 812 350 C820 380 800 404 768 402
                   C740 398 726 372 730 352 Z" />
          {/* Braavos — far east, home of the Iron Bank */}
          <path d="M876 232 C906 224 936 240 934 270 C932 296 906 308 882 300
                   C862 292 858 250 876 232 Z" />
        </g>

        {/* The Wall */}
        <g>
          <line x1="252" y1="96" x2="636" y2="98" stroke="rgba(143,188,205,0.85)" strokeWidth="7" strokeLinecap="round" />
          <line x1="252" y1="96" x2="636" y2="98" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" />
          <text x="444" y="78" textAnchor="middle" fill="rgba(143,188,205,0.8)" fontSize="18" letterSpacing="6" style={{ fontFamily: '"Cinzel", serif' }}>
            THE WALL
          </text>
        </g>

        {/* faint sea swells */}
        <g stroke="rgba(201,162,39,0.12)" strokeWidth="1.5" fill="none">
          <path d="M70 470 q14 -10 28 0 t28 0" />
          <path d="M820 560 q14 -10 28 0 t28 0" />
          <path d="M120 640 q14 -10 28 0 t28 0" />
        </g>

        {/* compass rose */}
        <g transform="translate(890,650)" stroke="rgba(212,175,55,0.8)" fill="rgba(212,175,55,0.8)">
          <circle r="34" fill="none" strokeWidth="1.5" />
          <circle r="26" fill="none" strokeWidth="0.8" opacity="0.6" />
          <path d="M0 -32 L7 0 L0 32 L-7 0 Z" />
          <path d="M-32 0 L0 -7 L32 0 L0 7 Z" opacity="0.55" />
          <text y="-40" textAnchor="middle" fontSize="13" stroke="none" style={{ fontFamily: '"Cinzel", serif' }}>N</text>
        </g>
      </svg>

      {/* the holdings */}
      {LOCATIONS.map((loc) => (
        <MapLocation key={loc.id} loc={loc} />
      ))}
    </div>
  );
}
