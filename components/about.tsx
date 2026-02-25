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
      className="relative w-full bg-[#1A1A1A] py-24 scroll-mt-28 min-h-screen"
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
          className="space-y-6 text-gray-300 text-lg sm:text-xl leading-relaxed"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            Derrière le nom <span className="font-serif italic text-white">EFA — THE WIGMAKER</span>, 
            se cache une expertise forgée par plus de <span className="font-medium text-[#B5A48B]">trois années d'immersion totale</span> dans l'univers de la haute perruquerie. 
            Ayant collaboré et apporté son savoir-faire aux plus prestigieux noms du luxe capillaire à Paris, 
            EFA a décidé de porter sa propre vision : celle d'une élégance sans compromis.
          </p>

          <p>
            Au cœur de l'atelier, la tradition rencontre la performance. Contrairement aux méthodes classiques, 
            chaque pièce est assemblée à la <span className="font-medium text-white">machine à coudre industrielle</span>. 
            Cette technique, réservée aux initiés, offre une <span className="font-medium text-[#B5A48B]">solidité structurelle incomparable</span> 
            et une finition qui permet au bonnet de s'épouser parfaitement aux contours du visage, telle une seconde peau.
          </p>
        </motion.div>
      </div>

      {/* Signature discrète possible */}
    </motion.section>
  );
}