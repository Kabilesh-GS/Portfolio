export default function Social({logo,name,url}) {
  return (
    <a className="relative group/icon flex flex-col items-center cursor-pointer" href={url} target="_blank">
      <img src={logo} className="w-15 transition-all duration-300 group-hover/icon:scale-110"/>
      <p className="absolute bottom-0 translate-y-full mt-2 opacity-0 group-hover/icon:opacity-100 group-hover/icon:translate-y-2 transition-all duration-300 text-xs px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-sm shadow-black/30 whitespace-nowrap">{name}</p>
    </a>
  )
}
