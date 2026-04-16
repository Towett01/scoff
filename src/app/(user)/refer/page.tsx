"use client";
import { useState } from "react";
import Link from "next/link";
import { FaGlobe, FaWhatsapp, FaFacebook, FaStore } from "react-icons/fa";
import { motion } from "framer-motion";
import { trackReferMethodChosen, trackReferWhatsAppShare, trackTopUp } from "@/lib/analytics";

export default function ReferPage() {
  const [chosen, setChosen] = useState(false);

  const LearnMoreBanner = () => (
    <div className="bg-purple-50 border border-purple-200 rounded-2xl px-6 py-5 text-center mt-6">
      <p className="text-purple-800 font-bold text-lg mb-2">
        Want to learn more about Refer &amp; Earn?
      </p>
      <p className="text-purple-600 text-sm mb-4">
        Read the full guide on how to refer friends and earn KES 20 per referral.
      </p>
      <Link
        href="https://scofhub.com/refer-earn"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold text-base hover:bg-purple-700 transition"
      >
        Read Full Guide →
      </Link>
    </div>
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full">

        {/* Top Up Banner - always visible */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Link
            href="https://datarush.lunar.cyou/sstopup"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackTopUp("refer_page_banner")}
            className="block bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-xs font-semibold uppercase tracking-wider mb-1">SSTOPUP Exchange</p>
                <p className="text-white text-xl font-bold">Buy Your Package Now!</p>
                <p className="text-green-100 text-sm mt-1">Airtime, Data, Bonga Points, Okoa Jahazi &amp; more</p>
              </div>
              <div className="bg-white rounded-xl px-4 py-3 flex-shrink-0">
                <p className="text-green-600 font-bold text-sm">Top Up</p>
                <p className="text-green-600 font-bold text-sm">Now →</p>
              </div>
            </div>
          </Link>
        </motion.div>

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
            
              <p className="text-sm text-orange-700">2. They make a purchase of KES 20+ or more</p>
              <p className="text-sm text-orange-700 font-bold">3. You earn KES 20 CASH! 🎉</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl px-6 py-4 mb-8 text-left">
              <p className="text-sm text-blue-800 font-semibold mb-1">Important:</p>
              <p className="text-sm text-blue-700">• Referred person must be a <strong>new user</strong></p>
              <p className="text-sm text-blue-700">• They must purchase a package of <strong>KES 20 or more</strong></p>
              <p className="text-sm text-blue-700">• You can refer via <strong>link or phone number</strong></p>
              <p className="text-sm text-blue-700">• No limit on how many people you can refer!</p>
            </div>

            <p className="text-gray-700 font-semibold text-lg mb-6">
              Ready to start referring?
            </p>

            <div className="grid grid-cols-1 gap-4 mb-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => { setChosen(true); trackReferMethodChosen("website"); }}
                className="flex items-center gap-4 bg-purple-600 text-white px-6 py-5 rounded-2xl shadow-lg hover:bg-purple-700 transition"
              >
                <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                  <FaGlobe className="text-2xl" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">Refer Via Website</p>
                  <p className="text-purple-100 text-sm">Share link or enter phone number on website</p>
                </div>
                <span className="ml-auto text-2xl">→</span>
              </motion.button>
            </div>

            <p className="text-xs text-gray-400 mb-2">
              Share your referral link with as many friends as you want.
            </p>

            <LearnMoreBanner />
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
                Refer via Website
              </h2>
              <p className="text-gray-500 mb-6">
                Visit the SSTOPUP Exchange website and share your referral link or enter your friend&apos;s phone number.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 mb-6 text-left">
                <p className="text-sm text-gray-600 font-semibold mb-2">Remember:</p>
                <p className="text-sm text-gray-500">✓ Friend must be a new user</p>
                <p className="text-sm text-gray-500">✓ They must buy KES 20+ package</p>
                <p className="text-sm text-gray-500">✓ You earn KES 20 once they purchase</p>
              </div>

              <Link
                href="https://scofhub.com/topup"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white px-8 py-4 rounded-xl font-bold text-lg transition mb-4 bg-purple-600 hover:bg-purple-700"
              >
                Open Website
              </Link>

              <button
                onClick={() => setChosen(false)}
                className="text-sm text-gray-400 hover:text-gray-600 transition underline"
              >
                Go back
              </button>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl px-6 py-4 mb-6">
              <p className="text-sm text-green-800 font-semibold mb-2">Share via WhatsApp too!</p>
              <Link
                href="https://wa.me/?text=I%20use%20SS%20TOPUP%20to%20buy%20data%2C%20minutes%2C%20calls%2C%20SMS%20%E2%80%94%20even%20with%20Okoa%20Jahazi%20%E2%80%94%20at%20great%20prices!%20Sign%20up%20and%20make%20your%20first%20purchase%20of%20KES%2020%2B%20to%20earn%20me%20KES%2020.%20Check%20out%20scofhub.com%2Ftopup%20to%20make%20purchases%20even%20without%20data.%20Join%20to%20also%20refer%20and%20make%20some%20money%20-%20scofhub.com%2Frefer"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackReferWhatsAppShare()}
                className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition"
              >
                <FaWhatsapp className="text-xl" />
                Share on WhatsApp
              </Link>
            </div>

            {/* Tell your friend how to buy */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-5 py-5 mb-6 text-left">
              <p className="text-sm font-semibold text-yellow-800 mb-1">🛒 Tell your friend how to buy</p>
              <p className="text-sm text-yellow-700 mb-4">
                Your friend needs to purchase KES 20+ for you to earn. They can buy even without data!
              </p>

              <div className="flex flex-col gap-2">
                <Link
                  href="https://datarush.lunar.cyou/sstopup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white border border-yellow-200 rounded-lg p-3 hover:shadow-md transition"
                >
                  <div className="w-9 h-9 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaGlobe className="text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-yellow-800">Website</p>
                    <p className="text-xs text-yellow-700">scofhub.com/topup</p>
                  </div>
                </Link>

                <Link
                  href="https://wa.me/254700042349?text=Hello"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white border border-yellow-200 rounded-lg p-3 hover:shadow-md transition"
                >
                  <div className="w-9 h-9 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-yellow-800">WhatsApp Bot</p>
                    <p className="text-xs text-yellow-700">Message &quot;Hello&quot; to start</p>
                  </div>
                  <span className="bg-green-50 text-green-700 text-xs font-semibold px-2 py-1 rounded-md whitespace-nowrap">FREE WhatsApp</span>
                </Link>

                <Link
                  href="https://www.facebook.com/kevin.rotich.9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white border border-yellow-200 rounded-lg p-3 hover:shadow-md transition"
                >
                  <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaFacebook className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-yellow-800">Facebook Bot</p>
                    <p className="text-xs text-yellow-700">Message &quot;Start&quot; to activate</p>
                  </div>
                  <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-1 rounded-md whitespace-nowrap">FREE Facebook</span>
                </Link>

                <Link
                  href="https://www.scofhub.com/post/buy-ss-topup-packages-offline-using-paybill"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white border border-yellow-200 rounded-lg p-3 hover:shadow-md transition"
                >
                  <div className="w-9 h-9 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaStore className="text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-yellow-800">Offline (no data needed)</p>
                    <p className="text-xs text-yellow-700">Buy via Paybill — works without data</p>
                  </div>
                  <span className="bg-orange-50 text-orange-700 text-xs font-semibold px-2 py-1 rounded-md whitespace-nowrap">No data</span>
                </Link>
              </div>

              <p className="text-xs text-yellow-700 mt-3 text-center">
                ✅ WhatsApp &amp; Facebook are free on most Kenyan networks — no data charges!
              </p>
            </div>

            <LearnMoreBanner />
          </motion.div>
        )}
      </div>
    </section>
  );
}