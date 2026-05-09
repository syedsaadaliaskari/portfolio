"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight, DownloadIcon, ExternalLink } from "lucide-react";

export function Home() {
  const handleContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "SyedSaadAli_CV.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center py-16 md:py-24"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-7 text-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-xl scale-110" />
          <Image
            src="/images/profile.png"
            alt="Syed Saad Ali Askari"
            height={120}
            width={120}
            loading="eager"
            className="relative rounded-full border-2 border-indigo-500/50 object-cover aspect-square shadow-lg shadow-indigo-900/40"
          />
          <span className="absolute bottom-1 right-1 size-3.5 bg-green-400 rounded-full border-2 border-gray-900" />
        </div>

        <span className="text-xs font-medium px-4 py-1.5 rounded-full bg-indigo-900/50 border border-indigo-700/40 text-indigo-300 tracking-wide">
          ● Available for work
        </span>

        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Hello, I&apos;m{" "}
            <span className="text-white">Syed Saad Ali Askari</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl">
            A passionate{" "}
            <span className="text-white font-semibold">
              Full-Stack Developer
            </span>{" "}
            who loves transforming complex problems into elegant, scalable code.
          </p>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            I build fast, production-ready web applications with clean
            architecture and great user experiences. I thrive under deadlines,
            write maintainable code, and always bring curiosity and dedication
            to every project I take on.
          </p>
          <p className="text-sm text-gray-500">
            Specializing in{" "}
            <span className="text-indigo-400 font-semibold">MERN</span> ·{" "}
            <span className="text-indigo-400 font-semibold">Next.js</span> ·{" "}
            <span className="text-indigo-400 font-semibold">TypeScript</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <Button
            onClick={handleContact}
            className="w-full sm:w-auto text-gray-300 bg-[#1e1b4b]/90 hover:bg-indigo-700 border border-indigo-700/40 px-6 py-2.5 transition-all duration-200 cursor-pointer hover:scale-[1.02] gap-2"
          >
            Contact me
            <ArrowRight size={16} className="text-pink-400" />
          </Button>
          <Button
            onClick={handleDownloadCV}
            className="w-full sm:w-auto text-gray-300 bg-[#1e1b4b]/90 hover:bg-indigo-700 border border-indigo-700/40 px-6 py-2.5 transition-all duration-200 cursor-pointer hover:scale-[1.02] gap-2"
          >
            Download CV
            <DownloadIcon size={16} className="text-pink-400" />
          </Button>
        </div>

        <div className="flex items-center gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/syedsaadaliaskari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <span className="text-gray-700">·</span>
            <a
              href="mailto:syedsaadaliaskari@gmail.com"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              syedsaadaliaskari@gmail.com
            </a>
            <span className="text-gray-700">·</span>
            <a
              href="https://linkedin.com/in/syedsaadaliaskari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Tech strip */}
        <div className="flex flex-wrap justify-center gap-2 mt-1">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "MongoDB",
            "Prisma",
            "Tailwind",
          ].map((tech) => (
            <span
              key={tech}
              className="text-xs text-gray-500 px-3 py-1 rounded-full border border-gray-700/40 hover:border-indigo-700/40 hover:text-gray-400 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
