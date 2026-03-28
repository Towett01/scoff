"use client";
import { useState } from "react";
import Link from "next/link";
import { FaMobileAlt, FaGlobe, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ReferPage() {
  const [chosen, setChosen] = useState<"app" | "website" | null>(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full">
        {!chosen ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-6">
              <span className="inline-block bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest mb-4">
                Refer &amp; Earn
              </span>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                Earn <span className="text-orange-500">KES 30</span> per referral!
              </h1>
              <p className="text-gray-500 text-lg">
                Share SSTOPUP Exchange with friends &amp; earn real M-Pesa cash.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl px-6 py-4 mb-8 text-left">
              <p className="text-sm text-orange-800 font-semibold mb-1">How it works:</p>
              <p className="text-sm text-orange-700">1. Choose how you want to refer below</p>
              <p className="text-sm text-orange-700">2. Share your unique referral link</p>
              <p className="text-sm text-orange-700">3. Friend makes a qualifying purchase</p>
              <p className="text-sm text-orange-700 font-bold">4. You both earn KES 30 airtime! 🎉</p>
            </div>

            <p className="text-gray-700 font-semibold text-lg mb-6">
              How would you like to refer?
            </p>

            <div className="grid grid-cols-1 gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setChosen("app")}
                className="flex items-center gap-4 bg-orange-500 text-white px-6 py-5 rounded-2xl shadow-lg hover:bg-orange-600 transition"
              >
                <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                  <FaMobileAlt className="text-2xl" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">Via App</p>
                  <p className="text-orange-100 text-sm">Use SSTOPUP Exchange app referral</p>
                </div>
                <span className="ml-auto text-2xl">→</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setChosen("website")}
                className="flex items-center gap-4 bg-purple-600 text-white px-6 py-5 rounded-2xl shadow-lg hover:bg-purple-700 transition"
              >
                <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                  <FaGlobe className="text-2xl" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">Via Website</p>
                  <p className="text-purple-100 text-sm">Use SSTOPUP Exchange website referral</p>
                </div>
                <span className="ml-auto text-2xl">→</span>
              </motion.button>
            </div>

            <p className="text-xs text-gray-400">
              Both options work equally well. Choose whichever is easier for you.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {chosen === "app" ? "Refer via App" : "Refer via Website"}
              </h2>
              <p className="text-gray-500 mb-6">
                {chosen === "app"
                  ? "Download or open the SSTOPUP Exchange app and find your unique referral link inside."
                  : "Visit the SSTOPUP Exchange website and find your referral link in your account dashboard."}
              </p>

              <Link
                href={chosen === "app" ? "https://scofhub.com/app" : "https://scofhub.com/topup"}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-white px-8 py-4 rounded-xl font-bold text-lg transition mb-4 ${
                  chosen === "app"
                    ? "bg-orange-500 hover:bg-orange-600"
                    : "bg-purple-600 hover:bg-purple-700"
                }`}
              >
                {chosen === "app" ? "Open App" : "Open Website"}
              </Link>

              <button
                onClick={() => setChosen(null)}
                className="text-sm text-gray-400 hover:text-gray-600 transition underline"
              >
                Go back &amp; choose differently
              </button>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl px-6 py-4 mb-6">
              <p className="text-sm text-green-800 font-semibold mb-2">Share via WhatsApp too!</p>
              <Link
                href="https://wa.me/?text=Ninatumia%20SSTOPUP%20Exchange%20kununua%20airtime%20na%20data%20kwa%20bei%20nzuri!%20Jisajili%20na%20upate%20KES%2030%20bure%20-%20scofhub.com/refer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition"
              >
                <FaWhatsapp className="text-xl" />
                Share on WhatsApp
              </Link>
            </div>

            <p className="text-xs text-gray-400">
              Learn more about Refer &amp; Earn at{" "}
              <Link href="https://scofhub.com/refer-earn" className="underline text-purple-600">
                scofhub.com/refer-earn
              </Link>
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}