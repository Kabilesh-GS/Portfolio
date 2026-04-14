import { useState } from "react"
import { Link } from "react-router-dom"
import REACT from '../../assets/react.svg'
import NEST from '../../assets/NestJS.svg'
import POSTGRES from '../../assets/Postgresql.png'
import TAILWIND from '../../assets/tailwind-css.svg'
import ME from '../../assets/kabi 3.png'
import BLOG from '../../assets/MediumBlog.png'
import ChatBot from "../../Components/ChatBot/ChatBot"
import ME_HI from '../../assets/MeWelcome.png'

function Home() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-white font-[Sora]">
      <div className="rounded-2xl mt-8 mx-8 px-15 py-5 bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/30 flex justify-between items-center">
        <div className="">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Hey! This is Kabilesh,</h1>
          <p className="text-lg text-white/70 mt-1">And I build things that live on the internet.</p>
        </div>
        <div>
          <Link to='/contact' className="px-7 py-3 hover:text-lg transition-all duration-200 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-sm shadow-black/30">Talk with me?</Link>
        </div>
      </div>
      <div className="flex items-start">

        <div className="flex flex-col w-[65%] justify-center ">

          <div className="flex mx-8 bg-white/5 backdrop-blur-md border justify-center border-white/10 rounded-2xl shadow-lg shadow-black/30 mt-5 py-5 px-15 gap-10">
            <div className="relative group/icon flex flex-col items-center">
              <img src={REACT} className="w-25 transition-all duration-300 group-hover/icon:scale-110"/>
              <p className="absolute bottom-0 translate-y-full mt-2 opacity-0 group-hover/icon:opacity-100 group-hover/icon:translate-y-2 transition-all duration-300 text-xs px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-sm shadow-black/30 whitespace-nowrap">React</p>
            </div>
            <div className="relative group/icon flex flex-col items-center">
              <img src={TAILWIND} className="w-25 transition-all duration-300 group-hover/icon:scale-110"/>
              <p className="absolute bottom-0 translate-y-full mt-2 opacity-0 group-hover/icon:opacity-100 group-hover/icon:translate-y-2 transition-all duration-300 text-xs px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-sm shadow-black/30 whitespace-nowrap">Tailwind </p>
            </div>
            <div className="relative group/icon flex flex-col items-center">
              <img src={NEST} className="w-25 transition-all duration-300 group-hover/icon:scale-110"/>
              <p className="absolute bottom-0 translate-y-full mt-2 opacity-0 group-hover/icon:opacity-100 group-hover/icon:translate-y-2 transition-all duration-300 text-xs px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-sm shadow-black/30 whitespace-nowrap">NestJS</p>
            </div>
            <div className="relative group/icon flex flex-col items-center">
              <img src={POSTGRES} className="w-25 transition-all duration-300 group-hover/icon:scale-110"/>
              <p className="absolute bottom-0 translate-y-full mt-2 opacity-0 group-hover/icon:opacity-100 group-hover/icon:translate-y-2 transition-all duration-300 text-xs px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-sm shadow-black/30 whitespace-nowrap">PostgreSQL</p>
            </div>

          </div>

          <div className="flex cursor-default mx-8 bg-white/5 backdrop-blur-md border justify-center border-white/10 rounded-2xl shadow-lg shadow-black/30 mt-5 py-5 px-15 gap-18">
            <div className="relative group flex flex-col items-center">
              <p className="text-[70px] transition-all duration-300 group-hover:scale-110">🎬</p>
              <p className="absolute bottom-0 text-center translate-y-full mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 text-[10px] px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-sm shadow-black/30">Movies/Series</p>
            </div>
            <div className="relative group flex flex-col items-center">
              <p className="text-[70px] transition-all duration-300 group-hover:scale-110">🏏</p>
              <p className="absolute bottom-0 translate-y-full mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 text-[10px] px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-sm shadow-black/30">Cricket</p>
            </div>
            <div className="relative group flex flex-col items-center">
              <p className="text-[70px] transition-all duration-300 group-hover:scale-110">🎨</p>
              <p className="absolute bottom-0 translate-y-full mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 text-[10px] px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-sm shadow-black/30">Drawing</p>
            </div>
            <div className="relative group flex flex-col items-center">
              <p className="text-[70px] transition-all duration-300 group-hover:scale-110">⚽</p>
              <p className="absolute bottom-0 translate-y-full mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 text-[10px] px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-sm shadow-black/30">Football</p>
            </div>

          </div>

          <div className="flex">
            <div className="w-[50%] group bg-white/5 ms-8 mt-5 py-4 backdrop-blur-md border justify-center border-white/10 rounded-2xl shadow-lg shadow-black/30 flex justify-center">
              <a href="https://medium.com/@kabileshgs/gods-own-country-a-fun-fueled-kerala-escape-9aeab52c41a4"><img src={BLOG} className="w-[300px]"/></a>
              <p className="absolute bottom-5 text-black text-md translate-y-full mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-sm shadow-black/30">My Recent Blog</p>
            </div>
            <div className="flex justify-center items-center group cursor-pointer w-[50%] bg-white/5 mx-8 mt-5 backdrop-blur-md relative border border-white/10 rounded-2xl shadow-lg shadow-black/30" onClick={() => {isOpen ? setIsOpen(false) : setIsOpen(true)}}>
              <div>
                <img src={ME_HI} alt="Me" className="w-[220px]"/>
              </div>
              <p className="absolute bottom-5 left-[35%] text-md translate-y-full mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-sm shadow-black/30">Chat With Me!</p>
            </div>
          </div>

        </div>

        <div className="group relative mt-5">
          <img className="shadow-sm shadow-black/30 rounded-2xl" src={ME}/>
          <p className="absolute bottom-5 left-[43%] translate-y-full mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 text-md px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-sm shadow-black/30">Yep! That's me</p>
        </div>

      </div>
      {
        isOpen && <ChatBot setIsOpen={setIsOpen} />
      }
    </div>
  )
}

export default Home