"use client";
import { ProjectCard } from "@/app/components/ProjectCrad";

export function Projects() {
  const PROJECTS = [
    {
      id: 1,
      title: "Multi Tenant saas-dashboard",
      description:
        "A cutting-edge Multi-Tenant SaaS Dashboard engineered with Next.js 15, TypeScript, and Postgres. This platform features a secure Role-Based Access Control (RBAC) system and leverages Prisma ORM for type-safe data modeling and tenant isolation. I utilized React 19 Server Actions and Partial Prerendering to ensure high-performance, real-time data handling. The UI is crafted with Tailwind CSS and Shadcn UI, delivering a responsive, enterprise-grade experience with sub-second load times.",
      tags: [
        "React",
        "Next.js",
        "Tailwind",
        "TypeScript",
        "ApiIntegration",
        "SSR",
        "PoatgresQl",
        "Prisma",
        "Role Based access",
      ],
      image: "/images/saas.jpeg",
      vercelLink: "https://saas-dashboard-taupe.vercel.app/",
    },
    {
      id: 2,
      title: "News Application",
      description:
        "A high-performance Full-Stack News Platform engineered with Next.js 14 and TypeScript. This application features a dynamic server-side rendering (SSR) architecture to fetch real-time global headlines via NewsAPI. I implemented advanced filtering logic for category-based routing (Business, Technology, Sports) and country-specific content. The UI is built with Tailwind CSS for a mobile-first, responsive experience, ensuring sub-second page loads and SEO optimization",
      tags: [
        "React",
        "Next.js",
        "Tailwind",
        "TypeScript",
        "ApiIntegration",
        "SSR",
      ],
      image: "/images/image.png",
      vercelLink: "https://world-news-amber.vercel.app/",
    },
    {
      id: 3,
      title: "MystryMsg Application",
      description:
        "A secure, Full-Stack Anonymous Messaging SaaS designed to facilitate honest feedback loops. Built with a 'Backend-First' approach, the platform leverages NextAuth.js for robust user authentication and MongoDb for scalable data management. I architected a custom API layer to handle anonymous message delivery, user dashboard statistics, and toggleable 'accepting messages' states. The project demonstrates advanced SQL query logic and a clean, 'shadcn/ui' inspired dashboard interface.",
      tags: [
        "React",
        "Next.js",
        "Tailwind",
        "TypeScript",
        "MongoDB",
        "NextAuth",
        "shadcn/ui",
      ],
      image: "/images/mystrymsg.jpeg",
      vercelLink: "https://mystrymsg-rho.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
        <p className="text-lg md:text-xl text-gray-400">
          Here are some of my projects.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 w-full md:w-1/2 justify-items-center gap-5 ">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
            vercelLink={project.vercelLink}
          />
        ))}
      </div>
    </section>
  );
}
