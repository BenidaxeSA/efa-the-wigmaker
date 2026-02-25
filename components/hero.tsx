"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="accueil" className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <span className="text-[#B5A48B] text-xs sm:text-sm tracking-[0.7em] uppercase block mb-6 font-light">
            L'Art de la Haute Perruquerie
          </span>
          <h1 className="text-7xl md:text-9xl font-serif font-light text-[#1a1a1a] tracking-tight dark:text-white">
            EFA
          </h1>
          <div className="h-[1px] w-24 bg-[#B5A48B] mx-auto mt-8 mb-8 opacity-50"></div>
          <p className="text-[10px] sm:text-xs tracking-[1em] uppercase text-gray-400">
            The Wigmaker
          </p>
        </motion.div>
      </div>

      {/* Animation de scroll discrète */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30">
        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-black dark:bg-white"
        />
      </div>
    </section>
  );
}