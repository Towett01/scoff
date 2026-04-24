"use client";
import { useState } from "react";
import Link from "next/link";
import { FaGlobe, FaWhatsapp, FaFacebook, FaStore } from "react-icons/fa";
import { motion } from "framer-motion";
import { trackReferMethodChosen, trackTopUp } from "@/lib/analytics";
// NOTE: `trackReferWhatsAppShare` removed — WhatsApp share section was deleted.
//       Re-add the import and section if you want to restore it.

// Save the 5 PNGs to /public/refer/ (see instructions).
const IMG_REGISTER     = "/refer/register-login.png";
const IMG_SIDEBAR_LINK = "/refer/sidebar-link.png";
const IMG_LINK_MODAL   = "/refer/link-modal.png";
const IMG_REFER_CARD   = "/refer/refer-card.png";
const IMG_MANUAL_FORM  = "/refer/manual-form.png";

export default function ReferPage() {
  // null = intro screen; "link" or "manual" once a path is chosen
  const [chosen, setChosen] = useState<"link" | "manual" | null>(null);

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
            {/* Hero */}
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

            {/* Two Ways to Refer */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl px-6 py-7 mb-6 text-left">
              <p className="text-sm text-orange-800 font-bold mb-1 uppercase tracking-widest">
                Two Ways to Refer
              </p>
              <p className="text-sm text-orange-700 mb-5">
                Pick whichever works for you
              </p>

              {/* Method 1 — Link (recommended) */}
              <div className="bg-white border-2 border-green-400 rounded-xl p-5 mb-4 relative shadow-sm">
                <span className="absolute -top-2.5 right-3 bg-green-500 text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                  Recommended
                </span>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🔗</span>
                  <p className="text-base font-bold text-gray-900">Share your referral link</p>
                </div>
                <ol className="text-sm text-gray-700 space-y-1.5 list-none mb-3">
                  <li><span className="font-semibold text-green-700">1.</span> Register(SIGNUP) or log in</li>
                  <li><span className="font-semibold text-green-700">2.</span> Tap <strong>&quot;My Referral Link&quot;</strong> → copy your link</li>
                  <li><span className="font-semibold text-green-700">3.</span> Share anywhere to your friends — WhatsApp, SMS etc</li>
                  <li><span className="font-semibold text-green-700">4.</span> Any friend using the link to make a purchase amounting to 20Ksh+ → you earn 20Ksh to your mpesa </li>
                </ol>
                <p className="text-xs text-green-700 mb-4 font-medium">
                  ✓ Reusable  • Unlimited referrals
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => { setChosen("link"); trackReferMethodChosen("link"); }}
                  className="w-full bg-green-600 text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-green-700 transition flex items-center justify-center gap-2 shadow-sm"
                >
                  Get My Referral Link <span className="text-base">→</span>
                </motion.button>
              </div>

              {/* Method 2 — Manual (no signup) */}
              <div className="bg-white border border-blue-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">📱</span>
                  <p className="text-base font-bold text-gray-900">Refer manually (no signup)</p>
                </div>
                <ol className="text-sm text-gray-700 space-y-1.5 list-none mb-3">
                  <li><span className="font-semibold text-blue-700">1.</span> Open <strong>Refer &amp; Earn</strong> on the site</li>
                  <li><span className="font-semibold text-blue-700">2.</span> Enter <strong>your name</strong> + <strong>your M-Pesa number</strong></li>
                  <li><span className="font-semibold text-blue-700">3.</span> Enter the <strong>paying number</strong> of your friend</li>
                  <li><span className="font-semibold text-blue-700">4.</span> When purchase is made amounting toKES 20+ → you get paid instantly</li>
                </ol>
                <p className="text-xs text-blue-700 mb-4 font-medium">
                  ✓ No account needed • Quick one-off
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => { setChosen("manual"); trackReferMethodChosen("manual"); }}
                  className="w-full bg-blue-600 text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-sm"
                >
                  Refer Manually <span className="text-base">→</span>
                </motion.button>
              </div>
            </div>

            {/* Important */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl px-6 py-4 mb-8 text-left">
              <p className="text-sm text-blue-800 font-semibold mb-1">Important:</p>
              <p className="text-sm text-blue-700">• Referred person must be a <strong>new user</strong></p>
              <p className="text-sm text-blue-700">• They must purchase a package of <strong>KES 20 or more</strong></p>
              <p className="text-sm text-blue-700">• No limit on how many people you can refer!</p>
            </div>

            <p className="text-xs text-gray-400 mb-2 mt-6">
              No limit on referrals — keep earning as long as friends keep buying.
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
              <div className="text-5xl mb-4">{chosen === "link" ? "🔗" : "📱"}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {chosen === "link" ? "Get Your Referral Link" : "Refer Someone Manually"}
              </h2>
              <p className="text-gray-500 mb-6">
                {chosen === "link"
                  ? "Open the site, register(sign up) or log in, then grab your unique referral link and share it."
                  : "Open the site and fill the quick form with your details and your friend's paying number. No account required."}
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 mb-5 text-left">
                <p className="text-sm text-gray-700 font-semibold mb-3">On the website:</p>
                {chosen === "link" ? (
                  <ol className="text-sm text-gray-600 space-y-4 list-none">
                    <li>
                      <p className="mb-2"><span className="font-bold text-purple-600">1.</span> Click <strong>Register</strong> (or <strong>Login</strong> if you have an account) in the top-right</p>
                      <img src={IMG_REGISTER} alt="Register and Login buttons in the top navigation" className="rounded-lg border border-gray-200 shadow-sm w-full" />
                    </li>
                    <li>
                      <p className="mb-2"><span className="font-bold text-purple-600">2.</span> In the sidebar, tap <strong>&quot;My Referral Link&quot;</strong></p>
                      <img src={IMG_SIDEBAR_LINK} alt="My Referral Link option in the sidebar" className="rounded-lg border border-gray-200 shadow-sm max-w-[200px] mx-auto block" />
                    </li>
                    <li>
                      <p className="mb-2"><span className="font-bold text-purple-600">3.</span> Copy the link (looks like <code className="bg-gray-200 px-1 rounded text-xs">?ref=XXXXXX</code>)</p>
                      <img src={IMG_LINK_MODAL} alt="Your Referral Link modal with copy button" className="rounded-lg border border-gray-200 shadow-sm w-full" />
                    </li>
                    <li><span className="font-bold text-purple-600">4.</span> Share it with friends — WhatsApp, SMS, anywhere</li>
                  </ol>
                ) : (
                  <ol className="text-sm text-gray-600 space-y-4 list-none">
                    <li>
                      <p className="mb-2"><span className="font-bold text-blue-600">1.</span> On the homepage, tap <strong>Refer to Earn</strong> inside the Refer &amp; Earn card</p>
                      <img src={IMG_REFER_CARD} alt="Refer and Earn card with Refer to Earn button" className="rounded-lg border border-gray-200 shadow-sm max-w-[220px] mx-auto block" />
                    </li>
                    <li>
                      <p className="mb-2"><span className="font-bold text-blue-600">2.</span> A form pops up. Fill these three fields:</p>
                      <img src={IMG_MANUAL_FORM} alt="Manual referral form with three fields" className="rounded-lg border border-gray-200 shadow-sm max-w-[320px] mx-auto block mb-2" />
                      <ul className="text-xs text-gray-600 space-y-1 ml-4 list-disc">
                        <li><strong>Your Full Name</strong></li>
                        <li><strong>Your Number</strong> — your M-Pesa number (where the KES 20 will be sent)</li>
                        <li><strong>Number you are referring</strong> — your friend&apos;s paying number</li>
                      </ul>
                    </li>
                    <li><span className="font-bold text-blue-600">3.</span> Tap the green <strong>Refer</strong> button — done!</li>
                  </ol>
                )}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-5 text-left">
                <p className="text-xs text-amber-800">
                  <strong>Remember:</strong> Your friend must be a <strong>new user</strong> and buy <strong>KES 20+</strong>. You earn <strong className="text-green-700">KES 20</strong> to your M-Pesa.
                </p>
              </div>

              <Link
                href="https://datarush.lunar.cyou/sstopup"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white px-8 py-4 rounded-xl font-bold text-lg transition mb-4 bg-purple-600 hover:bg-purple-700"
              >
                {chosen === "link" ? " Get My Link & Start Sharing" : "Refer Now"}
              </Link>

              <button
                onClick={() => setChosen(null)}
                className="text-sm text-gray-400 hover:text-gray-600 transition underline"
              >
                ← Go back
              </button>
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
                ✅ WhatsApp &amp; Facebook free — no data charges!
              </p>
            </div>

            <LearnMoreBanner />
          </motion.div>
        )}
      </div>
    </section>
  );
}