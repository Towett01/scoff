"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { trackExploreServices, trackTopUp, trackReferStart } from "@/lib/analytics";

export default function HomeBanner() {
  return (
    <div
      className="relative h-[50vh] sm:h-screen bg-cover bg-center z-10"
      style={{
        backgroundImage: "url('/assets/home.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 flex items-center justify-center h-full text-center px-4"
      >
        <div>
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 tracking-wide">
            Welcome to <span className="text-red-500 tracking-wide">SCOF Services</span>
          </h1>
          <p className="text-white text-lg md:text-2xl tracking-wide">
            Your Satisfaction Is Our Priority.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => {
                trackExploreServices("home_banner");
                window.location.href = "/services";
              }}
              className="px-6 py-3 bg-green-400 text-white rounded-lg text-lg hover:bg-green-600 transition duration-300"
            >
              Explore Services
            </button>
            <Link
              href="https://datarush.lunar.cyou/sstopup"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackTopUp("home_banner")}
              className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg text-lg border border-white/30 hover:bg-white/30 transition duration-300"
            >
              Top Up Now
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8"
          >
            <Link
              href="/refer"
              onClick={() => trackReferStart("home_banner")}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-full text-base font-bold shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none"
            >
              🎁 Refer and Earn KES 20 Free!
              <span className="bg-white/20 rounded-full px-2 py-0.5 text-sm">→</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}