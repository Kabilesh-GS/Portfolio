import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import INSTAGRAM from '../../assets/instagram.svg'
import LINKEDIN from '../../assets/linkedin.png'
import X from '../../assets/twitter.svg'
import MEDIUM from '../../assets/medium.svg'
import Social from "../../Components/Contact/Social";

export default function Contact() {

  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    emailjs.sendForm(
      "service_597rma4",
      "template_ammb4lc",
      formRef.current,
      "WwbRFgVLZzVW98dRB"
    )
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
    )
  }

  return (
    <div className="text-white font-[Sora] justify-center ">
      <div className="bg-white/5 py-4 px-10 rounded-2xl mt-8 mx-8 backdrop-blur-md border border-white/10 shadow-lg shadow-black/30 flex hover:shadow-2xl hover:shadow-black/40 hover:scale-[1.01] transition-all duration-300">
        <div className="w-[50%] flex justify-center my-2">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-3xl">Let’s build something cool 🚀</p>
              <br />
              <p>Got an idea, a project, or just want to say hi?</p>
              <p>I’m always open to discussing new opportunities.</p>
              <br/>
            </div>
            <div>
              <p>Coimbatore, India</p>
              <p>kabileshgs@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex justify-center">
          <form className="flex flex-col gap-5 w-full max-w-md" ref={formRef} onSubmit={sendEmail}>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-white/70">Email</label>
              <input type="email" placeholder="you@example.com" name="user_email" required className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/40 transition-all"/>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-white/70">Message</label>
              <textarea rows={4} name="message" placeholder="Write your message...." required className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/40 transition-all resize-none"/>
            </div>
            <button type="submit" disabled={loading} className="mt-2 px-4 py-2 rounded-lg bg-blue-500/30 text-blue-200 border border-blue-400/30 hover:bg-blue-500/50 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50">
              {loading ? "Sending..." : "Send Message"}
            </button>
            {success === true && (
              <p className="text-green-400 text-sm text-center">
                Message sent successfully 🚀
              </p>
            )}

            {success === false && (
              <p className="text-red-400 text-sm">
                Failed to send message ❌
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/30 py-4 px-10 rounded-2xl mt-8 mx-8 flex justify-center gap-10 hover:shadow-2xl hover:shadow-black/40 hover:scale-[1.01] transition-all duration-300">
        <Social logo={INSTAGRAM} name="Instagram" url="https://www.instagram.com/kabil.1507/"/>
        <Social logo={LINKEDIN} name="Linked In" url="https://www.linkedin.com/in/kabileshgs/"/>
        <Social logo={X} name="X" url="https://x.com/Kabi0704"/>
        <Social logo={MEDIUM} name="Medium" url="https://medium.com/@kabileshgs"/>
      </div>

      <div className="text-center mt-10 flex justify-center cursor-default">
        <p className="hover:scale-[1.6] transition-all duration-100">❤️</p>
      </div>
    </div>
  )
}