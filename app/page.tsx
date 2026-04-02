import Image from "next/image";
import { Home } from "./components/Home";
import { About } from "./components/About";

export default function Portfolio() {
  return (
    <div
      className="flex flex-col flex-1 items-center justify-center  font-sans 
    bg-[#020617] "
    >
      <Home />
      <About />
    </div>
  );
}
