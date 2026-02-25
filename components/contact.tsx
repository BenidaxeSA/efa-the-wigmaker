"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaPaypal } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [message, setMessage] = useState("");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="relative w-full bg-[#1A1A1A] py-1 scroll-mt-28 min-h-screen flex items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Dégradé subtil luxe */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/80 via-transparent to-[#1A1A1A]/80 -z-10" />

      <div className="relative max-w-4xl mx-auto px-8 text-center space-y-12">
        {/* Titre */}
        <span className="text-[#B5A48B] text-xs tracking-[0.5em] uppercase mb-4 block font-medium">
          Contact
        </span>

        <h2 className="text-5xl sm:text-6xl font-serif font-light tracking-widest uppercase text-white">
          Me Contacter
        </h2>

        <div className="h-[1px] w-16 bg-[#B5A48B] mx-auto mt-6 mb-10"></div>

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-300 text-lg sm:text-xl leading-relaxed"
        >
          <p>
            Pour toute commande personnalisée ou collaboration, contactez-moi directement.
          </p>
        </motion.div>

        {/* Liens contact avec logos */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 pt-8"
        >
          {/* Instagram */}
          <a
            href="https://www.instagram.com/_efadnt"
            target="_blank"
            className="flex items-center gap-3 uppercase tracking-widest text-sm text-white hover:text-[#B5A48B] transition duration-300"
          >
            <AiFillInstagram size={24} /> Instagram
          </a>

          {/* Email */}
          <a
            href="mailto:diantete.efa@gmail.com"
            className="flex items-center gap-3 lowercase tracking-widest text-sm text-white hover:text-[#B5A48B] transition duration-300"
          >
            <AiOutlineMail size={24} /> diantete.efa@gmail.com
          </a>

          {/* PayPal */}
          <a
            href="https://www.paypal.com/paypalme/TONUSERNAME"
            target="_blank"
            className="flex items-center gap-3 uppercase tracking-widest text-sm text-white hover:text-[#B5A48B] transition duration-300"
          >
            <FaPaypal size={24} /> Commander via PayPal
          </a>
        </motion.div>

        {/* Boîte de texte pour message client */}
        <motion.form
          className="mt-12 flex flex-col items-center gap-4 w-full"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = `mailto:diantete.efa@gmail.com?subject=Commande EFA&body=${encodeURIComponent(message)}`;
          }}
        >
          <textarea
            placeholder="Écrivez votre message ici..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full max-w-xl h-36 p-4 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#B5A48B] resize-none"
          ></textarea>

          <button
            type="submit"
            className="px-8 py-3 bg-[#B5A48B] text-black uppercase tracking-widest font-semibold hover:bg-yellow-500 transition-all duration-300 rounded-lg"
          >
            Envoyer
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
}