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

        {/* <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white -translate-y-1/2"></div> */}

        <div className="flex md:ms-40 md:gap-40 gap-10 px-10">
          {data.map((item, i) => (
            <div>
              <div key={i} className={`w-[400px] hover:ring-2 hover:ring-gray-500 shrink-0 bg-white/5 backdrop-blur-md border hover:scale-[1.03] cursor-default transition-all duration-300 border-white/10 shadow-lg shadow-black/30 text-white p-3 rounded-lg ${i % 2 === 0 ? "translate-y-[-110px]" : "translate-y-[150px]"}`}>
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