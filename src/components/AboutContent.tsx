"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp, FaGlobe, FaFacebook, FaMobileAlt, FaStore } from "react-icons/fa";

export default function AboutContent() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-green-100 via-white to-red-100">
      <div className="max-w-5xl mx-auto">

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At Scof Services, we believe everyone deserves easy, affordable access to mobile services.
            SSTOPUP Exchange was built to make buying airtime, data, Bonga Points, and bundles simple —
            whether you have data or not.
          </p>
        </motion.div>

        {/* What We Do */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-10"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Buy airtime for all networks",
              "Data bundles at great prices",
              "Bonga Points — buy, redeem & convert",
              "Okoa Jahazi packages",
              "Calls & SMS bundles",
              "Bingwa Sokoni for businesses",
              "Flex Packages — customize your bundle",
              "Convert airtime to M-Pesa cash",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 py-2">
                <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* How To Access */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-10"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">How To Access Our Services</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <FaGlobe className="text-xl text-green-600" />, name: "Website", desc: "Buy directly online", link: "https://datarush.lunar.cyou/sstopup" },
              { icon: <FaWhatsapp className="text-xl text-green-600" />, name: "WhatsApp Bot", desc: "Message us to purchase", link: "https://wa.me/254700042349?text=Hello" },
              { icon: <FaFacebook className="text-xl text-blue-600" />, name: "Facebook Bot", desc: "Message 'Start' to begin", link: "https://www.facebook.com/kevin.rotich.9" },
              { icon: <FaMobileAlt className="text-xl text-red-500" />, name: "Mobile App", desc: "Coming soon", link: "#" },
              { icon: <FaStore className="text-xl text-orange-500" />, name: "Offline (Paybill)", desc: "No data needed", link: "https://www.scofhub.com/post/buy-ss-topup-packages-offline-using-paybill" },
            ].map((channel) => (
              <Link
                key={channel.name}
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center flex-shrink-0">
                  {channel.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{channel.name}</p>
                  <p className="text-gray-500 text-xs">{channel.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        >
          {[
            { emoji: "⏰", title: "24/7 Available", desc: "Access anytime, day or night" },
            { emoji: "🔒", title: "Secure", desc: "Safe and encrypted transactions" },
            { emoji: "💰", title: "Best Rates", desc: "Competitive pricing always" },
            { emoji: "🤝", title: "Customer First", desc: "Simple and user-friendly" },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="text-3xl mb-3">{item.emoji}</div>
              <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300 shadow-md"
          >
            Explore Our Services
          </Link>
        </motion.div>

      </div>
    </section>
  );
}