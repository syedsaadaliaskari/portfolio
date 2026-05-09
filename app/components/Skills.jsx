"use client";

export function Skills() {
  const skills = [
    { name: "Next.js", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "Framer Motion", category: "Frontend" },
    { name: "Bootstrap", category: "Frontend" },
    { name: "Shadcn/ui", category: "Frontend" },
    { name: "Node.js / Express", category: "Backend" },
    { name: "REST APIs", category: "Backend" },
    { name: "AI Integration", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Prisma", category: "Database" },
    { name: "Supabase", category: "Database" },
    { name: "Firebase", category: "Database" },
    { name: "NextAuth v5", category: "Auth & Tools" },
    { name: "Redux Toolkit", category: "Auth & Tools" },
    { name: "TanStack Query", category: "Auth & Tools" },
    { name: "Git / GitHub", category: "Auth & Tools" },
    { name: "AWS", category: "Auth & Tools" },
    { name: "Vercel", category: "Auth & Tools" },
  ];

  const categories = ["Frontend", "Backend", "Database", "Auth & Tools"];

  return (
    <section id="skills" className="w-full py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">My Skills</h2>
          <p className="text-base text-gray-400">
            Technologies I work with on a daily basis.
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((cat) => (
            <div key={cat}>
              <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-4">
                {cat}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((s) => s.category === cat)
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className="bg-[#1e1b4b]/90 border border-indigo-700/30 text-gray-300 text-sm px-4 py-2 rounded-full hover:border-indigo-500/60 hover:text-white transition-all duration-200"
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
