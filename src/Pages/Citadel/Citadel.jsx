import { FiExternalLink } from "react-icons/fi";
import RealmPage from "../../Components/layout/RealmPage";
import { BLOGS, PROFILE_URL } from "../../data/blogs";
import BG from '../../assets/grainy BG.jpg'

export default function Citadel() {
  return (
    <RealmPage kicker="The Citadel" title="Chronicles & Writings" embers={16} >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {BLOGS.map((b) => (
          <a key={b.id} href={b.url} target="_blank" rel="noreferrer" className="border border-l-8 rounded-[0.5rem] border-gold/40 lift group flex flex-col overflow-hidden bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(${BG})` }}>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="heading-deco text-xl leading-snug">{b.title}</h3>
              <p className="mt-2 flex-1 text-sm text-parchment-dim">{b.excerpt}</p>
              <span className="flex mt-3 w-max border border-gold/40 bg-ink/80 px-2.5 py-0.5 text-[0.5rem] uppercase tracking-widest text-gold">
                {b.tag}
              </span>
              <span className="mt-3 flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold transition-colors group-hover:text-gold-bright hover:text-red-500">
                Read the scroll
              </span>
            </div>
          </a>
        ))}
      </div>
    </RealmPage>
  );
}
