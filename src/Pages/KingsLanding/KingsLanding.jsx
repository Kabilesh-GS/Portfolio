import { Link } from "react-router-dom";
import { GiCompass } from "react-icons/gi";
import EmberField from "../../Components/common/EmberField";
import SCREEN from "../../assets/screen.png";
import SIGIL from "../../assets/sigil.png";

export default function KingsLanding() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20">

      <div className="pointer-events-none absolute inset-0 z-0">
        <img src={SCREEN} alt="" className="h-full w-full object-cover opacity-75" />
        <div className="absolute inset-0 bg-linear-to-b from-ink/80 via-ink/40 to-ink" />
      </div>

      <EmberField count={50} />

      <div className="relative z-10 flex flex-col items-center text-center">

        <p className="heading-cinzel mt-6 text-xs uppercase tracking-[0.45em] text-gold/70 md:text-sm">The Realm of</p>
        <h1 className="heading-deco mt-2 text-5xl font-black leading-none md:text-8xl">House Kabyros</h1>
        <div className="gold-rule mt-5 w-56 md:w-80" />
        <p className="heading-cinzel mt-4 text-base uppercase tracking-[0.3em] text-parchment md:text-xl text-glow"> Forged by Battles and Bugs</p>

        <p className="mt-7 max-w-xl text-sm leading-relaxed text-parchment-dim md:text-base">
          I <span className="text-gold">Kabilesh Sundar</span>, a full-stack craftsman who forges creations that breathe upon the great ether, and now tames the sentient constructs of Artificial Intelligence.
        </p>

        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <Link to="/ravenry" className=" px-8 py-3 text-sm uppercase tracking-widest text-gold transition-all duration-300 hover:border-gold hover:bg-gold/10 heading-cinzel">Send a Raven</Link>
        </div>
      </div>

      <Link to="/explore" className="relative z-10 mt-16 animate-[float_4s_ease-in-out_infinite] text-center text-parchment-dim/60">
        <p className="text-xs uppercase tracking-[0.3em]">Explore Westeros</p>
        <p className="mt-1 text-2xl">⌄</p>
      </Link>
    </main>
  );
}
