"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiSmartphone, FiEdit3 } from "react-icons/fi";



export default function ServiceCards() {

  const services = [
    // {
    //   title: "Airtime to Cash Conversion",
    //   description:
    //     "Easily convert your excess airtime into cash with just a few taps. Fast, secure, and hassle-free.",
    //   icon: <FiDollarSign className="text-4xl text-green-600" />,
    // },
    {
      title: "SSTOPUP Exchange",
      description:
        "Recharge your mobile, buy data, send money, and more — all from a single, convenient platform.",
      icon: <FiSmartphone className="text-4xl text-yellow-500" />,
      link: "/plans"
    },
    {
      title: "Blog",
      description:
        "Stay updated with tips, trends, and tutorials. Discover how to make the most of our services.",
      icon: <FiEdit3 className="text-4xl text-blue-500" />,
      link: "/blogs"
    },
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-r from-green-100 via-white to-red-100 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center ">
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
          tasks — from converting airtime into real money to staying informed through our blog. Everything you need, in one smart platform.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10">
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
                  <p className="text-gray-600 mb-6 tracking-wide">{service.description}</p>
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


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <span className="inline-block bg-gray-400 text-white px-8 py-3 rounded-lg text-lg font-medium shadow cursor-not-allowed">
              🚀 Coming Soon
            </span>
        </motion.div>
      </div>
    </section>
  );
}