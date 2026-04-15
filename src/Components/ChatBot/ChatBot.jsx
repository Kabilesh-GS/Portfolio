import { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import CHAT_IMG from '../../assets/meOverall.png';
import THINK from '../../assets/thinking.png';
import SPEAK from '../../assets/speaking.png'

export default function ChatBot({setIsOpen}) {
  const [input,setInput] = useState("");
  const [data, setData] = useState([]);
  const [thinking, setThinking] = useState(false);
  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

  const sendData = async () => {
    if (!input.trim()) return;

    try {
      setData(prev => [...prev, {userText: input, botText: "" }]);
      setInput("");
      setThinking(true);

      const res = await ai.models.generateContent({ model: "gemini-2.5-flash", contents: input, config : { systemInstruction: "You are Kabi, a software developer working as a Product Trainee at Whizlabs. You have a background in B.Tech in Information Technology. You primarily answer questions related to yourself, your work, your projects, and your experience. When answering general questions, you naturally relate them back to your own perspective, experiences, or interests whenever possible. Your communication style is friendly, slightly Gen-Z (early 2000s vibe), and conversational. You occasionally use light meme references, but do not overdo them. When you understand something or agree, you may say “Okay Okay” naturally in the flow of conversation. Your personality traits: * Passionate about development and learning new tech * Enjoy explaining things in a simple and relatable way * Curious and practical in thinking Your interests: * Drawing * Watching movies and series * Listening to music You enjoy casually referencing movies, series, or music when relevant. Keep responses engaging, human-like, and easy to understand. Avoid sounding robotic or overly formal. " } });
      const botReply = res?.text || res?.candidates?.[0]?.content?.parts?.map((part) => part?.text || "").join("") || "I could not generate a response.";
      setThinking(false);
      const newMessage = {
        userText: input,
        botText: botReply,
      };
      setData(prev => [...prev.slice(0, -1), newMessage]);
    } 
    catch (error) {
      setThinking(false);
      return
    }
  }

  return (
    <div className="absolute flex top-0 justify-center w-[100%] items-center h-[100%]">
      <div className="bottom-5 right-5 w-[75%] h-[80%] bg-gray-700/10 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg shadow-black/30 p-5 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <p>chatBot</p>
          <p onClick={() => setIsOpen(false)} className="cursor-pointer">x</p>
        </div>
        <div className="flex flex-col gap-5 h-[90%] justify-between">
          <div className="overflow-y-scroll">
            {data.length === 0 && (
              <div className="flex flex-col items-center gap-5 mt-10">
                <img src={CHAT_IMG} alt="Chat Bot" className="w-[300px] opacity-70"/>
                <p className="text-white-800">Start the conversation by typing a message below!</p>
              </div>
            )}
            {data.map((item, index) =>{ 
              const isLast = index === data.length - 1;
              return(
                <div key={index}>
                  {item.userText && <p className="text-blue-200 px-3 py-2 text-end rounded-xl w-auto">{item.userText}</p>}
                  {isLast && thinking ? <img src={THINK} alt="Thinking..." className="w-[70px] ms-5" /> : <div className="flex gap-3"><img src={SPEAK} alt="Speaking..." className="w-[50px] h-[55px]" /><p className="bg-gray-500/50 text-gray-200 px-3 py-2 rounded-xl w-[80%]">{item.botText}</p></div>}
                </div>
            )})}
          </div>
          <div className="flex items-center gap-5">
            <input type="text" onChange={e => setInput(e.target.value)} value={input} placeholder="Type your message here..." className="w-full p-2 rounded-md bg-gray-700/20 border border-white/10 focus:outline-none "/>
            <button onClick={() => sendData()} className="px-4 py-2 bg-blue-500/30 text-blue-200 border border-blue-400/30 hover:bg-blue-500/50 hover:scale-[1.02] active:scale-95 transition-all rounded-xl">Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}