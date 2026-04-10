"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ServicesBanner() {
  return (
    <div className="relative flex items-center justify-center h-[40vh] sm:h-[70vh] text-center text-white px-6">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('/assets/services.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl"
      >
        <span className="inline-block bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest mb-4">
          SSTOPUP Exchange
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-4">
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
          Airtime, data bundles, Bonga Points, Okoa Jahazi, calls, SMS &amp; more — buy from any channel, even without data.
        </p>
      </motion.div>
    </div>
  );
}