"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutBanner() {
  return (
    <div className="relative flex items-center justify-center h-[50vh] sm:h-screen text-center text-white px-6">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('/assets/home.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">Who We Are?</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 tracking-wide">
          We are dedicated to providing innovative solutions accessible for everyday needs.
          Our mission is to empower individuals and business to grow.
        </p>

        {/* Call to Action Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-red-600 hover:bg-green-600 transition duration-300 text-lg font-semibold rounded-lg shadow-md"
         onClick={() => {
                  window.location.href = "/services";
                }}
        >
          Our Services
        </motion.button>
      </motion.div>
    </div>
  );
}
