"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="relative w-full bg-[#1A1A1A] py-16 scroll-mt-28 min-h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Dégradé subtil luxe */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/80 via-transparent to-[#1A1A1A]/80 -z-10" />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 text-center">
        
        {/* Header */}
        <span className="text-[#B5A48B] text-[10px] sm:text-xs tracking-[0.4em] uppercase block mb-4 font-medium">
          About Me
        </span>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light tracking-widest uppercase text-white">
          À Propos
        </h2>

        <div className="h-[1px] w-16 bg-[#B5A48B] mx-auto mt-6 mb-10"></div>

        {/* Texte */}
        <motion.div
          className="space-y-4 sm:space-y-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-[1.9] font-light text-justify hyphens-auto"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            Derrière le nom{" "}
            <span className="font-serif italic text-white tracking-wide">
              EFA — THE WIGMAKER
            </span>
            , se cache plus de{" "}
            <span className="text-[#B5A48B] font-normal">
              trois années d’expertise
            </span>{" "}
            en haute perruquerie, développée auprès des maisons les plus
            prestigieuses à Paris.
          </p>

          <p>
            Chaque pièce est assemblée à la{" "}
            <span className="text-white font-normal uppercase tracking-widest text-xs sm:text-sm mx-1">
              machine à coudre
            </span>
            , garantissant une{" "}
            <span className="text-[#B5A48B]">
              solidité structurelle incomparable
            </span>{" "}
            et un ajustement d’une précision{" "}
            <span className="text-white italic">
              seconde peau
            </span>.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}