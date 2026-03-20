"use client";

import React from "react";
// import { motion } from "framer-motion";

export default function AboutBanner() {
  return (
    <div className="relative flex items-center justify-center h-[30vh] sm:h-screen text-center text-white px-6">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('/assets/services.jpg')] bg-cover bg-center">
        {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}
      </div>
    </div>
  );
}
