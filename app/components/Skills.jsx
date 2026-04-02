"use client";

export function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "Tailwind",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node/Express",
    "MongoDB",
    "Firebase",
    "PostgreSQL",
    "Prisma",
    "AWS",
    "Git",
    "TanStack Query",
    "Shadcn",
    "Bootstrap",
    "Api Integration",
    "Ai Integration",
    "ReduxToolkit",
    "SupaBase",
  ];

  return (
    <section id="skills" className="w-full py-16 md:py-32">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center py-10">My Skills</h2>

        <div className="flex flex-wrap justify-center">
          {skills.map((skill) => (
            <span
              className="bg-gray-800/90 text-gray-300 py-2 px-4 rounded-full m-2 text-sm md:text-base hover:bg-gray-500/90"
              key={skill}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
