"use client";

import { ProjectCard } from "@/app/components/ProjectCrad";

export function Projects() {
  const PROJECTS = [
    {
      id: 1,
      title: "Housing Society Management System",
      description:
        "A full-stack society management platform for administrators and residents. Admins manage members, units, billing, payments, complaints, SOS emergencies, polls, and notices from a real-time analytics dashboard. Residents get a dedicated portal to pay bills, raise complaints, vote in polls, and trigger emergency alerts.",
      tags: [
        "Next.js 16",
        "TypeScript",
        "PostgreSQL",
        "NextAuth v5",
        "Recharts",
        "Tailwind CSS",
        "shadcn/ui",
        "RBAC",
        "Vercel",
      ],
      image: "/images/management.jpeg",
      vercelLink:
        "https://housing-management-s-git-f9faae-syed-saad-ali-askari-s-projects.vercel.app",
      githubLink:
        "https://github.com/syedsaadaliaskari/housing-management-society",
    },
    {
      id: 2,
      title: "Multi-Tenant SaaS Dashboard",
      description:
        "A production-grade multi-tenant SaaS platform with complete tenant data isolation. Features role-based access control, Prisma ORM for type-safe data modeling, Server Actions, and real-time analytics — all with an enterprise-grade shadcn/ui interface.",
      tags: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "NextAuth v5",
        "Tailwind CSS",
        "shadcn/ui",
        "RBAC",
      ],
      image: "/images/saas.jpeg",
      vercelLink: "https://saas-dashboard-taupe.vercel.app/",
      githubLink: "https://github.com/syedsaadaliaskari",
    },
    {
      id: 3,
      title: "WorldNews",
      description:
        "A global news aggregator covering 54 countries with category and country filtering. Features a custom API proxy route securing keys server-side, SSR for SEO optimization, and a fully responsive mobile-first interface.",
      tags: ["Next.js", "TypeScript", "NewsAPI", "Tailwind CSS", "SSR"],
      image: "/images/image.png",
      vercelLink: "https://world-news-amber.vercel.app/",
      githubLink: "https://github.com/syedsaadaliaskari",
    },
    {
      id: 4,
      title: "MystryMessage",
      description:
        "A secure anonymous messaging platform allowing users to receive honest feedback without revealing sender identity. Built with NextAuth.js authentication, MongoDB, Zod validation, and a clean shadcn/ui dashboard.",
      tags: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "NextAuth",
        "Zod",
        "Bcrypt",
        "shadcn/ui",
      ],
      image: "/images/mystrymsg.jpeg",
      vercelLink: "https://mystrymsg-rho.vercel.app/",
      githubLink: "https://github.com/syedsaadaliaskari",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 md:px-8 max-w-6xl mx-auto flex flex-col items-center"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-gray-400">
          A selection of things I have built.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
            vercelLink={project.vercelLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}
