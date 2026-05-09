"use client";

import Image from "next/image";
import { ExternalLink, Code2 } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  vercelLink: string;
  githubLink?: string;
  image: string;
};

export const ProjectCard = ({
  title,
  description,
  tags,
  vercelLink,
  githubLink,
  image,
}: ProjectCardProps) => {
  return (
    <div className="w-full flex flex-col bg-[#1e1b4b]/90 rounded-2xl overflow-hidden border border-gray-700/40 hover:border-gray-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-900/20 hover:-translate-y-1">
      <div className="overflow-hidden w-full h-52 relative">
        <Image
          loading="lazy"
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-4 p-6">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-indigo-900/50 border border-indigo-700/40 text-indigo-300 text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-2">
          <a
            href={vercelLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1a128b] hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
          {githubLink ? (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
            >
              <Code2 size={15} />
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};
