import { Link } from "react-router-dom"
import REACT from '../../assets/react.svg'
import NEST from '../../assets/NestJS.svg'
import POSTGRES from '../../assets/Postgresql.png'
import TAILWIND from '../../assets/tailwind-css.svg'

function Home() {
  return (
    <div className="text-white">
      <div className="backdrop-blur-xl rounded-2xl mt-8 mx-8 px-15 py-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg shadow-black/30 flex justify-between items-center">
        <div>
          <h1 className="font-[Sora] text-3xl md:text-5xl font-semibold tracking-tight">Hey! Kabilesh here,</h1>
          <p className="font-[Sora] text-lg text-white/70 mt-1">And I build things that live on the internet.</p>
        </div>
        <div>
          <Link to='/contact' className="px-7 py-3 hover:text-lg transition-all duration-200 rounded-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-sm shadow-black/30">Talk with me?</Link>
        </div>
      </div>
      <div className="">

        <div className="flex flex-col w-[50%] justify-center ">

          <div className="flex mx-8 bg-white/5 backdrop-blur-md border justify-center border-white/10 rounded-2xl shadow-lg shadow-black/30 mt-5 py-5 px-15 gap-10 rounded-2xl">
            <img src={REACT} className="w-25"/>
            <img src={TAILWIND} className="w-25"/>
            <img src={NEST} className="w-25"/>
            <img src={POSTGRES} className="w-25"/>
          </div>

          <div className="flex mx-8 bg-white/5 backdrop-blur-md border justify-center border-white/10 rounded-2xl shadow-lg shadow-black/30 mt-5 py-5 px-15 gap-10 rounded-2xl">
            <p className="text-[60px]">🎬</p>
            <p className="text-[60px]">🏏</p>
            <p className="text-[60px]">🎨</p>
            <p className="text-[60px]">⚽️</p>
          </div>

        </div>

        <div>

        </div>

      </div>
    </div>
  )
}

export default Home