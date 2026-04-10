"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiSmartphone, FiEdit3 } from "react-icons/fi";
import { FaGift } from "react-icons/fa";
import ComingSoonModal, { useComingSoon } from "./ComingSoonModal";

export default function OurServices() {
  const { show, open, close } = useComingSoon();
  const services = [
    {
      title: "SSTOPUP Exchange",
      description:
        "Recharge your mobile, buy data, send money, and more — all from a single, convenient platform.",
      icon: <FiSmartphone className="text-4xl text-yellow-500" />,
      link: "/services",
    },
    {
      title: "Blog",
      description:
        "Stay updated with tips, trends, and tutorials. Discover how to make the most of our services.",
      icon: <FiEdit3 className="text-4xl text-blue-500" />,
      link: "/blogs",
    },
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-r from-green-100 via-white to-red-100 overflow-hidden">
      {show && <ComingSoonModal onClose={close} />}
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-wide"
        >
          What We Offer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12 tracking-wide"
        >
          We provide powerful digital tools designed to simplify your everyday
          tasks — from converting airtime into real money to staying informed
          through our blog. Everything you need, in one smart platform.
        </motion.p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          {services.map((service, idx) => (
            <Link href={service.link} key={idx}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 text-left flex flex-col justify-between cursor-pointer h-full"
              >
                <div>
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 tracking-wide">
                    {service.description}
                  </p>
                </div>
                <div>
                  <span className="inline-block mt-2 px-4 py-2 bg-green-500 text-white text-lg rounded-full hover:bg-green-600 transition duration-300">
                    Explore More
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Refer & Earn Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/refer">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 p-[2px] cursor-pointer group">
              <div className="relative bg-gray-950 rounded-2xl px-6 py-10 sm:px-10 sm:py-12 overflow-hidden">
                {/* Glow effects */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-orange-500/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl" />

                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                      <FaGift className="text-3xl text-white" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                      <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">
                        Referral Program
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      Invite Friends,{" "}
                      <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
                        Earn KES 20
                      </span>
                    </h3>
                    <p className="text-gray-400 text-base sm:text-lg max-w-lg">
                      Share SSTOPUP Exchange via link or phone number. When a new user purchases KES 20+, you earn KES 20 M-Pesa cash!
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-orange-500/25 group-hover:shadow-xl group-hover:shadow-orange-500/40 transition-all duration-300 group-hover:scale-105">
                      Start Earning
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="group-hover:translate-x-1 transition-transform duration-200"
                      >
                        <path
                          d="M4 10h12m0 0l-5-5m5 5l-5 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* 3 Steps mini bar */}
                <div className="relative z-10 mt-8 grid grid-cols-3 gap-3 max-w-md mx-auto sm:mx-0 sm:ml-[7.5rem]">
                  {[
                    { step: "1", text: "Share link/number" },
                    { step: "2", text: "New user buys 20+" },
                    { step: "3", text: "You earn KES 20!" },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2"
                    >
                      <span className="w-6 h-6 bg-orange-500/20 text-orange-400 rounded-full flex items-center justify-center text-xs font-bold">
                        {item.step}
                      </span>
                      <span className="text-gray-300 text-xs font-medium">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Download App Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <button
            onClick={open}
            className="inline-block bg-red-400 text-white px-8 py-3 rounded-lg text-lg font-medium shadow hover:bg-red-500 transition duration-300"
          >
            📱 Download App
          </button>
        </motion.div>
      </div>
    </section>
  );
}