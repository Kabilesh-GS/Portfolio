import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiMapPin, FiMail } from "react-icons/fi";
import RealmPage from "../../Components/layout/RealmPage";
import { SOCIALS, CONTACT } from "../../data/socials";
import SIGIL from "../../assets/sigil.png";
import BG from '../../assets/grainy BG.jpg'

export default function Ravenry() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    emailjs
      .sendForm("service_597rma4", "template_ammb4lc", formRef.current, "WwbRFgVLZzVW98dRB")
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current.reset();
        },
        () => {
          setLoading(false);
          setSuccess(false);
        }
      );
  };

  return (
    <RealmPage kicker="The Ravenry" title="Send a Raven" embers={25}>
      <div className="grid grid-cols-1 rounded-[0.5rem] gap-6 bg-cover bg-center bg-no-repeat lg:grid-cols-2"  style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${BG})` }}>

        <div className="flex flex-col justify-between p-7">
          <div>
            <img src={SIGIL} alt="Sigil" className="w-16 h-16" />
            <h3 className="heading-deco mt-4 text-3xl">Let us treat.</h3>
            <p className="mt-3 text-parchment-dim">
              I am always open to new alliances, opportunities or simply
              a word of greeting. The raven flies swiftly.
            </p>
          </div>
          <div className="mt-8 space-y-3 text-sm">
            <p className="flex items-center gap-3 text-parchment">
              <FiMapPin className="text-gold" /> {CONTACT.location}
            </p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 text-parchment transition-colors hover:text-gold-bright"
            >
              <FiMail className="text-gold" /> {CONTACT.email}
            </a>
          </div>
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5 p-7">
          <div className="flex flex-col gap-1">
            <label className="heading-cinzel text-xs leading-none text-gold/80">
              Your Raven's Mark (email)
            </label>
            <input ype="email" name="user_email" required placeholder="you@example.com" className="font-script rounded-md border border-gold/25 bg-ink/60 px-4 py-2.5 text-lg text-parchment placeholder:text-parchment-dim/50 transition-all focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"/>
          </div>
          <div className="flex flex-col gap-1">
            <label className="heading-cinzel text-xs leading-none text-gold/80">
              The Message
            </label>
            <textarea rows={5} name="message" required placeholder="Write your decree..." className="font-script resize-none rounded-md border border-gold/25 bg-ink/60 px-4 py-2.5 text-lg text-parchment placeholder:text-parchment-dim/50 transition-all focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30" />
          </div>
          <button type="submit" disabled={loading} className="mt-1 bg-linear-to-b from-gold-bright to-gold-dim px-6 py-3 text-sm font-semibold uppercase tracking-widest text-ink shadow-[0_0_22px_rgba(201,162,39,0.35)] transition-all hover:scale-[1.02] hover:from-red-700 hover:to-red-900 hover:text-parchment hover:shadow-[0_0_22px_rgba(153,27,27,0.5)] heading-cinzel">
            {loading ? "Loosing the raven..." : "Seal and Loose the Raven 🪶"}
          </button>
          {success === true && (
            <p className="font-script text-center text-base text-green-400">The raven has flown. 🕊️</p>
          )}
          {success === false && (
            <p className="font-script text-center text-base text-red-400">The raven faltered. Try once more.</p>
          )}
        </form>
      </div>

      <div className="mt-10">
        <div className="mb-6 flex items-center justify-center gap-4">
          <div className="gold-rule w-16" />
          <span className="heading-cinzel text-sm uppercase tracking-[0.3em] text-gold/70">
            Allied Houses
          </span>
          <div className="gold-rule w-16" />
        </div>
        <div className="flex flex-wrap items-stretch justify-center gap-4">
          {SOCIALS.map((s) => (
            <a key={s.house} href={s.url} target="_blank" rel="noreferrer" className="flex w-36 hover:scale-110 transition-all duration-300 flex-col items-center gap-2 p-4 text-center">
              <img src={s.icon} alt={s.name} className="h-17 w-17 object-contain" />
              <span className="text-[0.7rem] text-parchment-dim">{s.house}</span>
            </a>
          ))}
        </div>
      </div>
    </RealmPage>
  );
}
