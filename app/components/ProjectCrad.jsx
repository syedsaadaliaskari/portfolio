"use client";
import Image from "next/image";

export const ProjectCard = ({
  title,
  description,
  tags,
  vercelLink,
  image,
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-between p-4 bg-[#1e1b4b]/90 mx-auto rounded-xl">
      <div className="overflow-hidden ">
        <Image
          loading="lazy"
          src={image}
          alt={title}
          width={500}
          height={300}
          className="mb-10"
        />
      </div>

      <div className="text-center mx-auto ">
        <h2 className="text-2xl font-bold mb-2 ">{title}</h2>

        <p className="text-lg text-gray-500 text-center text-center mx-auto p-5">
          {description}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              className="bg-gray-800/90 hover:bg-gray-500 px-3 py-3 gap-3 rounded-full text-gray-300"
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={vercelLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          View Project
        </a>
      </div>
    </div>
  );
};
