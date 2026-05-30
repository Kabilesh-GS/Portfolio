import KPRIET from "../../assets/KPRIET.jpg";
import WHIZ from "../../assets/whizabs.png"

const data = [
  {
    date: 'October 18, 2022',
    year: "2022",
    title: "KPRIET",
    desc: "Began my B.Tech in Information Technology at KPR Institute of Engineering and Technology (KPRIET), where I developed a strong interest in full-stack development and started building practical, real-world applications.",
    logo: KPRIET,
  },
  {
    date: 'December 15, 2025',
    year: "2025",
    title: "Whizlabs",
    desc: "Joined Whizlabs as a Product Trainee, where I worked on real-world product development, learning how to build and improve scalable applications.",
    logo: WHIZ,
  },
  {
    date: 'April 11, 2026',
    year: "2026",
    title: "KPRIET",
    desc: "Completed my B.Tech in Information Technology from KPR Institute of Engineering and Technology (KPRIET), gaining strong fundamentals in software development and hands-on experience building real-world full-stack applications.",
    logo: KPRIET,
  },
]

export default function Experience() {
  return (
    <div className="w-full h-screen overflow-x-auto">

      <div className="relative w-max h-full flex items-center">

        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 2000 800" preserveAspectRatio="none" filter="url(#glow)">
          <defs>
            <style>{`
              @keyframes gradientShift {
                0% {
                  stop-color: rgba(59, 130, 246, 0.4);
                }
                25% {
                  stop-color: rgba(99, 102, 241, 0.6);
                }
                50% {
                  stop-color: rgba(147, 51, 234, 0.9);
                }
                75% {
                  stop-color: rgba(236, 72, 153, 0.6);
                }
                100% {
                  stop-color: rgba(59, 130, 246, 0.4);
                }
              }

              .grad-start {
                animation: gradientShift 4s ease-in-out infinite;
              }

              .grad-mid {
                animation: gradientShift 4s ease-in-out infinite;
                animation-delay: -1.33s;
              }

              .grad-end {
                animation: gradientShift 4s ease-in-out infinite;
                animation-delay: -2.66s;
              }
            `}</style>
            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" className="grad-start" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.9)" className="grad-mid" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.4)" className="grad-end" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path d="M 0,500 C 550,170 850,650 1500,400 C 2100,150 1750,650 2500,200" stroke="url(#curveGradient)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        </svg>

        <div className="flex md:ms-40 md:gap-40 gap-10 px-10">
          {data.map((item, i) => (
            <div>
              <div key={i} className={`w-[400px] hover:ring-2 hover:ring-gray-500 shrink-0 bg-white/2 backdrop-blur-md border hover:scale-[1.03] cursor-default transition-all duration-300 border-white/7 shadow-lg shadow-black/30 text-white p-3 rounded-lg ${i % 2 === 0 ? "translate-y-[-110px]" : "translate-y-[150px]"}`}>
                <img src={item.logo} alt={item.title} className="object-cover rounded-lg" />
                <p className="font-bold my-2 text-lg">{item.date}</p>
                <p className="text-justify">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}