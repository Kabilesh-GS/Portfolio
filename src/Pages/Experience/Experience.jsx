export default function Experience() {
  return (
    <div className="w-full h-screen overflow-x-auto">

      <div className="relative w-max h-full flex items-center">

        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white -translate-y-1/2"></div>

        <div className="flex md:ms-40 md:gap-40 gap-10 px-10">
          {[...Array(10)].map((_, i) => (
            <div>
              <div
                key={i}
                className={`w-[200px] shrink-0 bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/30 text-white p-3 rounded-lg
                  ${i % 2 === 0 ? "translate-y-[-50px]" : "translate-y-[80px]"}
                `}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <p className={`text-white ${i % 2 === 0 ? "translate-y-[-25px]" : "translate-y-[-80px]"} text-center mt-2`}>2022</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}