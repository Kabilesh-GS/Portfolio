import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="text-white">
      <div className="backdrop-blur-xl rounded-2xl m-8 px-15 py-5 bg-gradient-to-l from-white/15 via-white/10 to-white/3 flex justify-between items-center">
        <div>
          <h1 className="font-[Sora] text-3xl md:text-5xl font-semibold tracking-tight">Hey! Kabilesh here,</h1>
          <p className="font-[Sora] text-lg text-white/70 mt-1">And I build things that live on the internet.</p>
        </div>
        <div>
          <Link to='/contact' className="px-7 py-3 hover:text-lg transition-all duration-200 rounded-full bg-gradient-to-l from-white/15 to-transparent backdrop-blur-sm">Talk with me?</Link>
        </div>
      </div>
    </div>
  )
}

export default Home