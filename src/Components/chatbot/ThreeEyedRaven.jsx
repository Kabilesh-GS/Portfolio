import { useEffect, useMemo, useRef, useState } from "react";
import { GoogleGenAI } from "@google/genai";
import { FiSend } from "react-icons/fi";
import INTRO from "../../assets/meOverall.png";
import THINK from "../../assets/thinking.png";
import SPEAK from "../../assets/speaking.png";

const PERSONA =
  "You are the Three-Eyed Raven of House Kabyros, speaking on behalf of Kabilesh GS — a " +
  "software developer working as a Product Trainee at Whizlabs, with a B.Tech in Information " +
  "Technology. You primarily answer questions about Kabilesh: himself, his work, his projects " +
  "(like BlogUp), his skills (React, NestJS, PostgreSQL, Tailwind, and more), and his journey. " +
  "When answering general questions, relate them back to his perspective and interests. " +
  "His interests: drawing, watching movies and series, listening to music, cricket and football. " +
  "Style: Game of Thrones styled talk, speak mysteriously and poetically. " +
  "flourishes (e.g. 'the realm', 'forged') without overdoing it — stay clear, human, and genuinely " +
  "informative. Avoid sounding robotic or overly formal.";

const SUGGESTIONS = [
  "What has Kabilesh forged?",
  "Tell me about BlogUp",
  "What skills does he wield?",
  "Who is Kabilesh?",
];

export default function ThreeEyedRaven() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const endRef = useRef(null);

  const ai = useMemo(
    () => new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY }),
    []
  );

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  const send = async (text) => {
    const q = (text ?? input).trim();
    if (!q || thinking) return;

    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setThinking(true);

    try {
      const res = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: q,
        config: { systemInstruction: PERSONA },
      });
      const reply =
        res?.text ||
        res?.candidates?.[0]?.content?.parts?.map((p) => p?.text || "").join("") ||
        "The vision is clouded... ask again.";
      setMessages((m) => [...m, { role: "bot", text: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "bot", text: "The weirwood is silent — the raven cannot reach the vision right now." },
      ]);
    } finally {
      setThinking(false);
    }
  };

  return (
    <div className="gilded mx-auto flex h-[70vh] max-w-3xl flex-col overflow-hidden border-frost/30 shadow-[0_0_40px_rgba(143,188,205,0.12)]">

      {/* messages */}
      <div className="flex-1 space-y-4 overflow-y-auto p-5">
        {messages.length === 0 && (
          <div className="flex flex-col items-center gap-5 pt-6 text-center">
            <img src={INTRO} alt="The Oracle" className="w-44 opacity-80 animate-[float_7s_ease-in-out_infinite]" />
            <p className="text-parchment-dim">
              The raven sees all of House Kabyros. Ask, and the vision will answer.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-frost/30 bg-frost/5 px-3 py-1.5 text-xs text-frost transition-all hover:border-frost hover:bg-frost/10"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) =>
          m.role === "user" ? (
            <div key={i} className="flex justify-end">
              <p className="max-w-[80%] rounded-2xl rounded-tr-sm border border-gold/30 bg-gold/10 px-4 py-2 text-sm text-parchment">
                {m.text}
              </p>
            </div>
          ) : (
            <div key={i} className="flex items-start gap-3">
              <img src={SPEAK} alt="" className="mt-1 h-10 w-10 shrink-0 object-contain" />
              <p className="max-w-[80%] whitespace-pre-wrap rounded-2xl rounded-tl-sm border border-frost/25 bg-ink-soft/80 px-4 py-2 text-sm text-parchment-dim">
                {m.text}
              </p>
            </div>
          )
        )}

        {thinking && (
          <div className="flex items-center gap-3">
            <img src={THINK} alt="" className="h-12 w-12 object-contain animate-[flicker_2s_ease-in-out_infinite]" />
            <span className="text-sm text-frost/70">the raven peers through time…</span>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* input */}
      <div className="flex items-center gap-3 border-t border-frost/20 bg-ink-soft/70 p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask the raven…"
          className="w-full rounded-full border border-frost/25 bg-ink/60 px-4 py-2.5 text-parchment placeholder:text-parchment-dim/50 focus:border-frost focus:outline-none focus:ring-2 focus:ring-frost/30"
        />
        <button
          onClick={() => send()}
          disabled={thinking}
          aria-label="Send"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-frost bg-frost/15 text-frost transition-all hover:scale-105 hover:bg-frost/25 disabled:opacity-50"
        >
          <FiSend />
        </button>
      </div>
    </div>
  );
}
