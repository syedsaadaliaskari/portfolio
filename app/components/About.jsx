"use client";

export function About() {
  return (
    <section id="about" className="w-full">
      <div className="container mx-auto text-center py-16 md:py-32 flex items-center flex-col">
        <h2 className="text-4xl py-10">About Me</h2>

        <p className="text-xl leading-tight md:leading-snug mx-auto text-center px-10 ">
          I pursue my passion for programming as a full-stack web developer. My
          favorite part of programming is the problem-solving aspect. I love the
          feeling of finally figuring out a solution to a problem. My core stack
          is MERN and Next.js. I am also familiar with TypeScript. I am always
          looking forward to learning new technologies.
        </p>

        <p className="text-xl leading-tight md:leading-snug mx-auto text-center py-10 px-10">
          When I'm not coding, I enjoy playing video games, watching movies, and
          singing the songs. I enjoy learning new things. I am currently
          intrested in artificial intelligence.
        </p>
      </div>
    </section>
  );
}
