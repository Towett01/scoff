"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HomeBanner() {
  return (
    <div
      className="relative h-[50vh] sm:h-screen bg-cover bg-center z-10"
      style={{
        backgroundImage: "url('/assets/home.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 flex items-center justify-center h-full text-center px-4"
      >
        {/* Your content here, e.g. heading, button, etc. */}
        <div>
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 tracking-wide">
            Welcome to <span className="text-red-500 tracking-wide">SCOF Services</span>
          </h1>
          <p className="text-white text-lg md:text-2xl tracking-wide">
            Your Satisfaction Is Our Priority.
          </p>

          {/* New Button Added */}
          <div className="mt-6">
            <button
              onClick={() => {
                window.location.href = "/services";
              }}
              className="px-6 py-3 bg-green-400 text-white rounded-lg text-lg hover:bg-green-600 transition duration-300">
              Explore Services
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
