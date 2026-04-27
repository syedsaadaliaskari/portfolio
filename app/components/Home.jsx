"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight, DownloadIcon } from "lucide-react";

export function Home() {
  return (
    <section id="home" className="w-full py-16 md:py-32 ">
      <div className="flex flex-col gap-8 py-4 px-5 pb-4 items-center justify-center ">
        <Image
          src="/images/profile.png"
          alt="Profile image"
          height={100}
          width={100}
          loading="eager"
          className="rounded-full border-2 border-gray-300 object-cover aspect-square flex "
        />

        <h1 className="text-3xl text-center leading-tight md:leading-snug max-w-4xl mx-auto">
          Hello, I'm <span className="font-bold">Syed Saad Ali Askari</span>.
          I'm a passionate
          <span className="text-gray-400"> Full-Stack Developer</span> who loves
          transforming complex problems into elegant code. I specialize in
          building modern, scalable applications using
          <span className="font-bold underline text-4xl block mt-2 md:inline md:mt-0">
            MERN and Next.js.
          </span>
        </h1>

        <div className="md:hidden flex flex-col text-xl ">
          <Button className="text-gray-300  bg-[#1e1b4b]/90 hover:bg-[#1a128b] border border-gray-700/50 p-2 animate-out">
            Contact me here{" "}
            <span className="text-[#f472b6]">
              <ArrowRight />
            </span>
          </Button>
        </div>

        {/* Desktop  */}
        <div className="hidden md:flex items-center justify-center  text-xl gap-4">
          <Button className="text-gray-300  bg-[#1e1b4b]/90 hover:bg-[#1a128b] border border-gray-700/50 p-2 animate-out py-3">
            Contact me here{" "}
            <span className="text-[#f472b6]">
              <ArrowRight />
            </span>
          </Button>
          <Button className="text-gray-300  bg-[#1e1b4b]/90 hover:bg-[#1a128b] border border-gray-700/50 p-2 animate-bounce mt-3 py-3">
            Download Cv{" "}
            <span className="text-[#f472b6]">
              <DownloadIcon />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
