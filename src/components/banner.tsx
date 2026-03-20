"use client";
import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion

export default function Banner() {
  return (
    <div className="mt-2 flex flex-col items-center justify-center gap-5 text-center bg-gradient-to-r from-green-100 via-white to-red-100">
      <motion.h2
        className="text-5xl font-bold tracking-wide mt-10"
        initial={{ opacity: 0, y: 20 }} // Initial state for the animation
        animate={{ opacity: 1, y: 0 }}  // Final state for the animation
        transition={{ duration: 0.8 }}  // Duration of the animation
      >
        Writings from our team
      </motion.h2>
      <motion.p
        className="tracking-wide"
        initial={{ opacity: 0, y: 20 }} // Initial state for the animation
        animate={{ opacity: 1, y: 0 }}  // Final state for the animation
        transition={{ duration: 0.8, delay: 0.2 }}  // Slight delay for the paragraph
      >
        The latest industry news, interviews, technologies and  ai resources.
      </motion.p>
    </div>
  );
}
