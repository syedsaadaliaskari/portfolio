"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <nav
        className={`w-full max-w-2xl bg-[#1e1b4b]/90 backdrop-blur-md rounded-2xl md:rounded-full px-6 py-3 transition-all duration-300 shadow-lg border ${
          scrolled
            ? "border-indigo-700/50 shadow-indigo-950/40"
            : "border-white/10"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-white font-semibold text-sm tracking-tight">
            saad<span className="text-indigo-400">.</span>dev
          </span>

          <ul className="hidden md:flex gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    active === link.href
                      ? "bg-indigo-600/30 text-white border border-indigo-500/30"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <ul className="md:hidden mt-3 flex flex-col gap-1 pb-2 border-t border-white/10 pt-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    active === link.href
                      ? "bg-indigo-600/30 text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
}
