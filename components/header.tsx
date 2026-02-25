"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[999]">
      {/* Glass background + shrink */}
      <motion.div
        className={clsx(
          "mx-auto w-[95%] sm:w-[36rem] rounded-full border border-white/20 bg-white/80 dark:bg-gray-950 dark:bg-opacity-70 shadow-lg backdrop-blur-md transition-all duration-300",
          scrolled ? "h-12 mt-2" : "h-16 mt-4"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      />

      {/* Desktop nav */}
      <nav className="hidden sm:flex fixed top-0 left-1/2 -translate-x-1/2 w-[36rem] h-16 items-center justify-center">
        <ul className="flex flex-nowrap gap-6 items-center text-[0.85rem] uppercase tracking-[0.2em] font-light text-gray-500">
          {links.map((link) => (
            <li key={link.hash} className="relative flex items-center justify-center h-16">
              <Link
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                className={clsx(
                  "flex items-center justify-center px-4 py-2 hover:text-gray-950 dark:hover:text-gray-300 transition-colors duration-300",
                  {
                    "text-gray-950 dark:text-gray-200": activeSection === link.name,
                  }
                )}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute bottom-2 left-0 right-0 h-[2px] bg-[#B5A48B] rounded-full"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Hamburger */}
      <div className="sm:hidden fixed top-2 left-1/2 -translate-x-1/2 flex items-center justify-between w-[95%] z-[999]">
        <button
          className="text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="sm:hidden fixed inset-0 bg-black/70 backdrop-blur-md flex flex-col items-center justify-center gap-6 z-[998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link) => (
              <Link
                key={link.hash}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                  setMenuOpen(false);
                }}
                className={clsx(
                  "text-white uppercase tracking-[0.2em] font-semibold text-2xl hover:text-[#B5A48B] transition-colors duration-300",
                  { "text-[#B5A48B]": activeSection === link.name }
                )}
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}