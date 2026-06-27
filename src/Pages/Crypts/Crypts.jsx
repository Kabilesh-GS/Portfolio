import ReturnToMap from "../../Components/common/ReturnToMap";
import EmberField from "../../Components/common/EmberField";
import SectionTitle from "../../Components/common/SectionTitle";
import { TIMELINE } from "../../data/timeline";

export default function Crypts() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-20">
      <ReturnToMap />
      <EmberField count={14} className="opacity-50" />

      <div className="relative z-10 px-5">
        <SectionTitle
          kicker="The Crypts of Winterfell"
          title="The House History"
        />
      </div>

      {/* the winding road of history */}
      <div className="relative z-10 mt-4 w-full overflow-x-auto pb-12">
        <div className="relative flex h-[600px] w-max min-w-full items-center">
          <svg className="hidden md:block pointer-events-none absolute top-0 left-0 h-full w-full" viewBox="0 0 2000 600" preserveAspectRatio="none" filter="url(#cryptGlow)">
            <defs>
              <style>{`
                @keyframes cryptShift {
                  0%   { stop-color: rgba(201,162,39,0.4); }
                  33%  { stop-color: rgba(233,105,47,0.85); }
                  66%  { stop-color: rgba(110,20,20,0.7); }
                  100% { stop-color: rgba(201,162,39,0.4); }
                }
                .c-start { animation: cryptShift 6s ease-in-out infinite; }
                .c-mid   { animation: cryptShift 6s ease-in-out infinite -2s; }
                .c-end   { animation: cryptShift 6s ease-in-out infinite -4s; }
              `}</style>
              <linearGradient id="cryptGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(201,162,39,0.5)" className="c-start" />
                <stop offset="50%" stopColor="rgba(233,105,47,0.85)" className="c-mid" />
                <stop offset="100%" stopColor="rgba(201,162,39,0.5)" className="c-end" />
              </linearGradient>
              <filter id="cryptGlow">
                <feGaussianBlur stdDeviation="2.5" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path d="M 0,360 C 420,140 640,520 1080,320 C 1520,120 1320,520 2000,260" stroke="url(#cryptGrad)" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
          </svg>

          <div className="flex gap-20 px-14 md:ms-24 md:gap-36">
            {TIMELINE.map((item, i) => (
              <div key={i} className={`border border-gold/40 rounded-[0.5rem] backdrop-blur-sm lift w-[330px] shrink-0 p-4 ${ i % 2 === 0 ? "-translate-y-28" : "translate-y-28" }`}>
                <div className="overflow-hidden rounded">
                  <img src={item.logo} alt={item.title} className="h-40 w-full rounded object-cover" />
                </div>
                <p className="heading-cinzel mt-3 text-[10px] uppercase tracking-[0.2em] text-gold/70">
                  {item.date}
                </p>
                <h3 className="heading-deco mt-1 text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-parchment-dim">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
