"use client";
import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import { FaUserCheck, FaThumbsUp, FaShieldAlt, FaRegClock } from "react-icons/fa";

const features = [
  {
    icon: <FaRegClock className="text-4xl mb-4 text-green-400" />,
    title: "RELIABLE & AVAILABLE 24/7",
  },
  {
    icon: <FaShieldAlt className="text-4xl mb-4 text-blue-600" />,
    title: "CONVENIENT AND SECURE",
  },
  {
    icon: <FaUserCheck className="text-4xl mb-4 text-green-600" />,
    title: "CUSTOMER FRIENDLY",
  },
  {
    icon: <FaThumbsUp className="text-4xl mb-4 text-green-700" />,
    title: "BEST MARKET RATES",
  },
];

export default function WhyUs() {
  return (
    <section
      className="py-12 px-6 text-center bg-gradient-to-r from-green-600 via-white to-red-600"
    >
      <h2 className="text-3xl font-bold mb-10 underline">Why Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#f2f9ff] rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 20 }} // Initial state for the animation
            animate={{ opacity: 1, y: 0 }}  // Final state for the animation
            transition={{ duration: 0.5, delay: index * 0.2 }} // Delay to stagger the animations
          >
            <div className="text-black flex flex-col items-center">
              {item.icon}
              <p className="mt-2 font-medium">{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
