"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <nav className="w-full max-w-2xl bg-[#1e1b4b]/90 backdrop-blur-md rounded-3xl md:rounded-full px-6 py-3 transition-all duration-300 shadow-lg ">
        <div className="flex items-center justify-between md:justify-center">
          <span className="text-white font-bold md:hidden">
            Nextjs || TypeScript Developer
          </span>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="hover:text-gray-100 text-gray-400 transition-colors"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <ul className="md:hidden mt-4 flex flex-col gap-4 pb-4 items-center border-t border-gray-700 pt-4">
            {navLinks.map((link) => (
              <li key={link.name} className="text-gray-400 hover:text-white">
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
}
