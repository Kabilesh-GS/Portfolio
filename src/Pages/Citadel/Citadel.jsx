import { FiExternalLink } from "react-icons/fi";
import RealmPage from "../../Components/layout/RealmPage";
import { BLOGS, PROFILE_URL } from "../../data/blogs";

export default function Citadel() {
  return (
    <RealmPage
      kicker="The Citadel"
      title="Chronicles & Writings"
      embers={16}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BLOGS.map((b) => (
          <a
            key={b.id}
            href={b.url}
            target="_blank"
            rel="noreferrer"
            className="gilded gilded-corners lift group flex flex-col overflow-hidden"
          >
            <div className="relative h-44 overflow-hidden border-b border-gold/20">
              <img
                src={b.image}
                alt={b.title}
                className="h-full w-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 rounded-full border border-gold/40 bg-ink/80 px-2.5 py-0.5 text-[0.6rem] uppercase tracking-widest text-gold">
                {b.tag}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="heading-deco text-xl leading-snug">{b.title}</h3>
              <p className="mt-2 flex-1 text-sm text-parchment-dim">{b.excerpt}</p>
              <span className="mt-4 flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold transition-colors group-hover:text-gold-bright">
                Read the scroll
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a href={PROFILE_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3 text-sm uppercase tracking-widest text-gold transition-all hover:border-gold hover:bg-gold/10 heading-cinzel"> Visit the full archive on Medium</a>
      </div>
    </RealmPage>
  );
}
