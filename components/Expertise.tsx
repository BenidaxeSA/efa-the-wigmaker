"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { savoirfaireDATA } from "@/lib/data";

export default function Expertise() {
  const { ref } = useSectionInView("Expertise");

  return (
    <motion.section
      ref={ref}
      id="expertise"
      className="relative w-full bg-[#1A1A1A] py-2 scroll-mt-28 min-h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <div className="relative max-w-[1600px] mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-32">
          <h2 className="text-5xl sm:text-6xl font-serif font-light tracking-wider text-white">
            Savoir-Faire
          </h2>
          <div className="h-[1px] w-20 bg-[#B5A48B] mx-auto mt-6 mb-4"></div>
          <p className="text-gray-400 text-sm sm:text-base tracking-[0.3em] uppercase max-w-lg mx-auto">
            L'excellence technique au service de votre image
          </p>
        </div>

        {/* Grid */}
        <div className="space-y-32">
          {savoirfaireDATA.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-12 md:gap-20`}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-2xl">
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-[350px] md:h-[500px] object-cover transition-transform duration-[2000ms] ease-out hover:scale-105"
                  />
                ) : (
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    className="w-full h-[350px] md:h-[500px] object-cover rounded-2xl"
                  />
                )}
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-2">
                <span className="text-[#B5A48B] text-[11px] font-bold tracking-[0.5em] mb-4">
                  0{index + 1}
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif mb-6 text-white leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-base md:text-lg max-w-md mx-auto md:mx-0 italic">
                  "{item.description}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}