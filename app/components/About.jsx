"use client";

export function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        <div className="text-center mb-10 space-y-2">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-1">
            Who I am
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            About Me
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="space-y-4 text-left">
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              I pursue my passion for programming as a full-stack web developer.
              My favorite part of programming is the problem-solving aspect — I
              love the feeling of finally figuring out a solution to a hard
              problem. My core stack is{" "}
              <span className="text-white font-medium">MERN and Next.js</span>,
              and I am also proficient in{" "}
              <span className="text-white font-medium">TypeScript</span> and
              modern backend design patterns.
            </p>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              I am always looking to learn new technologies and level up my
              craft. Currently exploring{" "}
              <span className="text-white font-medium">
                Artificial Intelligence
              </span>{" "}
              and integrating AI capabilities into real-world applications.
            </p>
          </div>

          <div className="space-y-4 text-left">
            <div className="bg-[#1e1b4b]/80 border border-white/10 rounded-xl p-5 space-y-3">
              <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wide">
                Beyond the code
              </h3>
              <ul className="space-y-2">
                {[
                  { emoji: "🎮", text: "Gaming — strategy and open world" },
                  { emoji: "🎬", text: "Movies and cinema" },
                  { emoji: "🎵", text: "Music and singing" },
                  { emoji: "🤖", text: "Exploring AI & machine learning" },
                  { emoji: "📚", text: "Always reading, always learning" },
                ].map((item) => (
                  <li
                    key={item.text}
                    className="flex items-center gap-2.5 text-sm text-gray-400"
                  >
                    <span className="text-base">{item.emoji}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
          {[
            { label: "Frontend", value: "Next.js · React · Tailwind" },
            { label: "Backend", value: "Node.js · Express · APIs" },
            { label: "Database", value: "PostgreSQL · MongoDB" },
            { label: "Tools", value: "TypeScript · Git · Vercel" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-[#1e1b4b]/80 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5 hover:border-indigo-700/40 transition-colors"
            >
              <span className="text-xs text-indigo-400 font-semibold uppercase tracking-widest">
                {item.label}
              </span>
              <span className="text-xs text-gray-400 leading-relaxed">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
