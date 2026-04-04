import REACT from '../../assets/react.svg'
import TAILWIND from '../../assets/tailwind-css.svg'
import NEST from '../../assets/NestJS.svg'
import POSTGRES from '../../assets/Postgresql.png'
import BLOGUP from '../../assets/BlogUp.png'

export default function Projects() {
  return (
    <div className="text-white font-[Sora]">
      <div>
        <div className="flex flex-col backdrop-blur-xl rounded-2xl mt-8 mx-8 px-15 py-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg shadow-black/30 relative overflow-hidden hover:shadow-2xl hover:shadow-black/40 hover:scale-[1.01] transition-all duration-300">
          <h1 className="text-4xl font-bold">BlogUp</h1>
          <p className="text-sm mt-2">A full-stack blogging platform that enables users to publish, explore, and interact with content.</p>
          <p className="text-sm mt-2 text-white/70">Implemented user authentication, profile management, and favorites system, with a focus on clean UI and structured backend architecture using modern web technologies.</p>
          <div className='mt-3 flex items-center gap-2'>
            <img src={REACT} className='w-[20px]'/>
            <img src={TAILWIND} className='w-[20px]'/>
            <img src={NEST} className='w-[20px]'/>
            <img src={POSTGRES} className='w-[20px]'/>
          </div>
          <div className='mt-4 flex gap-3'>
            {/* <img src={GITHUB} className='w-[20px]'/> */}
            <a target='_blank' href='https://github.com/Kabilesh-GS/Blog-Up' className='py-1 px-3 hover:scale-[1.10] transition duration-300 backdrop-blur-xl rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg shadow-black/30 text-sm cursor-pointer'>
              Code
            </a>
            <a target='_blank' href='https://blogupblogs.netlify.app' className='py-1 px-3 hover:scale-[1.10] transition duration-300 backdrop-blur-xl rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg shadow-black/30 text-sm cursor-pointer'>
              Demo
            </a>
          </div>
          <img className='w-80 absolute -z-10 right-0 -top-12 opacity-30 rotate-15' src={BLOGUP}/>
        </div>
      </div>
    </div>
  )
}