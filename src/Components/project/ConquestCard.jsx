import { useRef, useState } from "react";
import { FiCode, FiExternalLink, FiEye, FiX } from "react-icons/fi";
import BG from '../../assets/grainy BG.jpg'

export default function ConquestCard({ project }) {
  const videoRef = useRef(null);
  const [preview, setPreview] = useState(false);

  const play = () => {
    if (videoRef.current) videoRef.current.play().catch(() => {});
  };
  const stop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(${BG})` }} >
      <article className="border border-gold/40 lift group flex flex-col overflow-hidden rounded-[0.5rem]" >
        <div className="relative h-48 w-full overflow-hidden border-b border-gold/20 bg-ink">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"/>
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink via-transparent to-transparent" />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="heading-deco text-2xl">{project.title}</h3>
          <p className="mt-2 text-sm text-parchment">{project.blurb}</p>

          <div className="mt-4 flex flex-wrap gap-2">
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-gold/15 pt-4">
            <div className="flex gap-2">
              {project.code && (
                <a href={project.code} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-xs text-parchment transition-all hover:border-gold hover:text-gold-bright" >
                  <FiCode />
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-xs text-parchment transition-all hover:border-gold hover:text-gold-bright" >
                  <FiExternalLink />
                </a>
              )}
            </div>
            {project.live && (
              <button onClick={() => setPreview(true)} title="Scry the realm" className="flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-xs text-gold transition-all hover:scale-105 hover:border-gold hover:bg-gold/10">
                <FiEye />
              </button>
            )}
            {!project.live && !project.code && (
              <span className="text-[0.65rem] uppercase tracking-wider text-parchment-dim/60">
                Sealed in the vault
              </span>
            )}
          </div>
        </div>
      </article>

      {preview && project.live && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm" onClick={() => setPreview(false)} >
          <div className="gilded relative h-[80%] w-full max-w-5xl p-3" onClick={(e) => e.stopPropagation()} >
            <button onClick={() => setPreview(false)} className="absolute -top-3 -right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-gold bg-ink text-gold transition-all hover:scale-110 hover:text-ember-bright" aria-label="Close" >
              <FiX />
            </button>
            <iframe title={`${project.title} preview`} src={project.live} className="h-full w-full rounded bg-white" />
          </div>
        </div>
      )}
    </div>
  );
}
