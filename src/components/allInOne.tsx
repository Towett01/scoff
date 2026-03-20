"use client";

import React from "react";
import { motion } from "framer-motion";

export default function bongaPoints() {
 

  return (
    <section className="relative py-2 px-6 bg-gradient-to-r from-green-100 via-white to-red-100 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center ">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl md:text-5xl font-bold text-gray-900 mb-6"
        >
        All In ONe   Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12"
        >
          We provide All in One packagesservices ......
        </motion.p>        

      </div>

      <div className="flex justify-between max-w-xs mx-auto mt-8 mb-5">
          <button
            onClick={() => {
              window.location.href = "/bingwa-sokoni";
            }}
            className="px-6 py-2 bg-white borde disabled border-gray-300 text-gray-700 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Previous
          </button>

          <button
            onClick={() => {
              window.location.href = "/hot-deals";
            }}
            className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
          >
            Next
          </button>
          </div>
    </section>
  );
}
