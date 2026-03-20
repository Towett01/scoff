"use client";
import React from "react";
import Link from "next/link";
import { FaGlobe, FaMobileAlt, FaWhatsapp, FaFacebook, FaStore } from "react-icons/fa";
import { GiReceiveMoney, GiMoneyStack } from "react-icons/gi";
import { MdEditNote } from "react-icons/md";
import { motion } from "framer-motion";

const channels = [
  { name: "Website", Icon: FaGlobe, link: "https://datarush.lunar.cyou/sstopup" },
  { name: "App", Icon: FaMobileAlt, link: "https://play.google.com/store/apps/details?id=com.lunartech.sstopup&pcampaignid=web_share" },
  { name: "WhatsApp Bot", Icon: FaWhatsapp, link: "https://api.whatsapp.com/send?phone=+254700042349&text=Hello" },
  { name: "Facebook Bot", Icon: FaFacebook, link: "https://www.facebook.com/profile.php?id=100089017086830" },
  { name: "Offline Purchase (Payslips)", Icon: FaStore, link: "https://datarush.lunar.cyou/sstopup" },
];

const services = [
  {
    title: "Airtime",
    Icon: GiMoneyStack,
    description: "Purchase airtime for all major networks instantly and securely.",
    url: "/airtime",
  },
  {
    title: "Convert Airtime to Cash",
    Icon: GiReceiveMoney,
    description: "Turn your unused airtime into cash in just a few clicks.",
    url: "/convert-airtime",
  },
  {
    title: "Bonga Points",
    Icon: GiMoneyStack,
    description: "Buy and redeem Bonga points across multiple services.",
    url: "/bonga-points",
  },
  {
    title: "Calls & Minutes",
    Icon: MdEditNote,
    description: "Manage your voice call bundles and usage with ease.",
    url: "/calls-minutes",
  },
  {
    title: "Bingwa Sokoni Packages",
    Icon: FaStore,
    description: "Explore our market bundles crafted for small businesses.",
    url: "/bingwa-sokoni",
  },
  {
    title: "All in One",
    Icon: MdEditNote,
    description: "Get a combined package of airtime, bundles, and data.",
    url: "/all-in-one",
  },
  {
    title: "Hot Deals",
    Icon: GiReceiveMoney,
    description: "Don’t miss our limited-time offers and discounts.",
    url: "/hot-deals",
  },
  {
    title: "Flex Packages",
    Icon: GiMoneyStack,
    description: "Customize your own flexible bundle to suit your needs.",
    url: "/flex-packages",
  },
];

export default function TopUpNow() {

  return (
    <section className="py-2 px-6 bg-gradient-to-r from-green-100 via-white to-red-100 relative">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
        >
          TOP UP NOW VIA
        </motion.h2>

        {/* Channels */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-12 underline"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {channels.map(({ name, Icon, link }) => (
            <motion.a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 border border-red-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <Icon className="text-2xl text-green-600 mb-2" />
              <span className="text-gray-700 font-medium">{name}</span>
            </motion.a>
          ))}
        </motion.div>


        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-10"
        >
          Services
        </motion.h2>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href={service.url} className="block">
                <div className="flex items-center justify-between p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <service.Icon className="text-3xl text-green-500" />
                    <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                  </div>
                  <span className="text-sm text-red-500 hover:underline">
                    Read More
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
