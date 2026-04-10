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
                Earn <span className="text-orange-500">KES 20</span> per referral!
              </h1>
              <p className="text-gray-500 text-lg">
                Share SSTOPUP Exchange with new users via link or phone number &amp; earn real M-Pesa cash.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl px-6 py-4 mb-8 text-left">
              <p className="text-sm text-orange-800 font-semibold mb-1">How it works:</p>
              <p className="text-sm text-orange-700">1. Share your referral link or enter friend&apos;s phone number</p>
              <p className="text-sm text-orange-700">2. Your friend signs up as a new user</p>
              <p className="text-sm text-orange-700">3. They make a purchase of KES 20 or more</p>
              <p className="text-sm text-orange-700 font-bold">4. You earn KES 20 airtime! 🎉</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl px-6 py-4 mb-8 text-left">
              <p className="text-sm text-blue-800 font-semibold mb-1">Important:</p>
              <p className="text-sm text-blue-700">• Referred person must be a <strong>new user</strong></p>
              <p className="text-sm text-blue-700">• They must purchase a package of <strong>KES 20 or more</strong></p>
              <p className="text-sm text-blue-700">• You can refer via <strong>link or phone number</strong></p>
              <p className="text-sm text-blue-700">• No limit on how many people you can refer!</p>
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
                  <p className="text-orange-100 text-sm">Share link or enter phone number in app</p>
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
                  <p className="text-purple-100 text-sm">Share link or enter phone number on website</p>
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
                  ? "Open the SSTOPUP Exchange app and share your referral link or enter your friend's phone number."
                  : "Visit the SSTOPUP Exchange website and share your referral link or enter your friend's phone number."}
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 mb-6 text-left">
                <p className="text-sm text-gray-600 font-semibold mb-2">Remember:</p>
                <p className="text-sm text-gray-500">✓ Friend must be a new user</p>
                <p className="text-sm text-gray-500">✓ They must buy KES 20+ package</p>
                <p className="text-sm text-gray-500">✓ You earn KES 20 once they purchase</p>
              </div>

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
                href="https://wa.me/?text=I%20use%20SS%20TOPUP%20to%20buy%20data%2C%20minutes%2C%20calls%2C%20SMS%20%E2%80%94%20even%20with%20Okoa%20Jahazi%20%E2%80%94%20at%20great%20prices!%20Sign%20up%20and%20make%20your%20first%20purchase%20of%20KES%2020%2B%20to%20earn%20me%20KES%2020.%20Check%20out%20scofhub.com%2Ftopup%20to%20make%20purchases%20even%20without%20data.%20Join%20to%20also%20refer%20and%20make%20some%20money%20-%20scofhub.com%2Frefer"
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