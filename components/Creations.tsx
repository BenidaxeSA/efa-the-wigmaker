"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

const creations = [
  { src: "/Images/FILE.png", title: "L'Éclat Soyeux", category: "Lace Frontal" },
  { src: "/Images/FILLE.png", title: "Ombré Signature", category: "Custom Color" },
  { src: "/Images/FILLE33.png", title: "Boucles Profondes", category: "Deep Wave" },
  { src: "/Images/EFA1.png", title: "Carré Platinium", category: "Bob Cut" },
];

export default function Creations() {
  const { ref } = useSectionInView("Créations");

  return (
    <motion.section
      ref={ref}
      id="creations"
      className="relative w-full bg-[#1A1A1A] py-20 scroll-mt-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="relative max-w-[1600px] mx-auto px-8">
        {/* HEADER */}
        <div className="text-center mb-32">
          <span className="text-[11px] tracking-[0.6em] uppercase text-[#B5A48B] block mb-6">
            Réservez votre créneau — Places limitées.
          </span>

          <h2 className="font-serif font-light tracking-wider text-white leading-tight text-center">
  <span className="text-5xl sm:text-7xl block">
    EFA
  </span>
  <span className="text-xl sm:text-2xl block tracking-[0.5em] uppercase opacity-80 mt-2">
    The Wigmaker
  </span>
</h2>

          <div className="h-[1px] w-16 bg-[#B5A48B] mx-auto mt-4"></div>

          <p className="mt-10 text-gray-400 font-light text-lg italic max-w-xl mx-auto">
            Nos Créations.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {creations.map((item, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden bg-[#222] rounded-2xl">
                <div className="aspect-[4/5] overflow-hidden relative rounded-2xl">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                    priority
                  />
                </div>

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-700 rounded-2xl" />
              </div>

              <div className="mt-10 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif text-white tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#B5A48B] uppercase tracking-[3px] mt-3 font-medium">
                    {item.category}
                  </p>
                </div>

                <span className="text-[9px] text-gray-500 uppercase tracking-widest">
                  EFA
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href="#contact"
            className="inline-block border border-white px-14 py-5 text-[11px] tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all duration-500"
          >
            Commander une pièce unique
          </a>
        </div>
      </div>
    </motion.section>
  );
}