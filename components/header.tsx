"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="fixed top-0 left-0 w-full z-[999]">
      {/* Glassmorphism background */}
      <motion.div
        className="mx-auto mt-4 h-14 w-[95%] sm:w-[36rem] rounded-full border border-white/20 bg-[#1A1A1A]/50 backdrop-blur-xl shadow-2xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      />

      {/* Navigation */}
      <nav className="flex fixed top-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[36rem] justify-center">
        <ul className="flex flex-wrap justify-center items-center gap-2 sm:gap-6 text-[0.75rem] sm:text-[0.85rem] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-light text-gray-400">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="relative flex items-center justify-center h-10 sm:h-12"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                className={clsx(
                  "flex items-center justify-center px-3 sm:px-4 py-2 hover:text-white transition-colors duration-300",
                  {
                    "text-white": activeSection === link.name,
                  }
                )}
              >
                {link.name}

                {/* Active underline */}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#B5A48B] rounded-full"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}