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
      className="relative w-full bg-[#1A1A1A] py-1 scroll-mt-28 min-h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Dégradé subtil luxe */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/80 via-transparent to-[#1A1A1A]/80 -z-10" />

      <div className="relative max-w-4xl mx-auto px-8 text-center space-y-12">
        {/* Header style luxe */}
        <span className="text-[#B5A48B] text-xs tracking-[0.5em] uppercase block mb-4 font-medium">
          About Me
        </span>
        <h2 className="text-5xl sm:text-6xl font-serif font-light tracking-widest uppercase text-white">
          À Propos
        </h2>
        <div className="h-[1px] w-16 bg-[#B5A48B] mx-auto mt-6 mb-10"></div>

        {/* Paragraphe animé */}
        <motion.div
          className="space-y-8 text-gray-400 text-base sm:text-lg leading-[2] font-light text-justify hyphens-auto"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            Derrière le nom <span className="font-serif italic text-white tracking-wide">EFA — THE WIGMAKER</span>, 
            se cache une expertise forgée par plus de <span className="text-[#B5A48B] font-normal">trois années d'immersion totale</span> dans l'univers de la haute perruquerie. 
            Ayant collaboré avec les plus prestigieux noms du luxe capillaire à Paris, 
            EFA porte aujourd'hui sa propre vision : celle d'une <span className="text-white italic">élégance sans compromis</span>.
          </p>

          <p>
            Contrairement aux méthodes classiques, chaque pièce est assemblée à la 
            <span className="text-white font-normal uppercase tracking-widest text-sm mx-1"> machine à coudre </span>. 
            Cette technique d'élite offre une <span className="text-[#B5A48B]">solidité structurelle incomparable</span>. 
            Le résultat ? Une finition qui permet au bonnet d'épouser les contours du visage avec la précision d'une 
            <span className="text-white italic"> seconde peau</span>.
          </p>
        </motion.div>
      </div>

      {/* Signature discrète possible */}
    </motion.section>
  );
}