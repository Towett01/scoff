'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoImage from "../../public/assets/logoo.png";
import { FaGlobe, FaMobileAlt, FaWhatsapp, FaFacebook, FaStore, FaPhoneAlt } from "react-icons/fa";
import ComingSoonModal, { useComingSoon } from "./ComingSoonModal";

export default function Footer() {
  const { show, open, close } = useComingSoon();
  return (
    <footer className="relative bg-gray-950 text-gray-300">
      {show && <ComingSoonModal onClose={close} />}

      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-green-500 via-red-500 to-green-500" />

      <div className="container mx-auto px-6 md:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src={logoImage}
                alt="Scof Services"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div>
                <p className="text-white font-bold text-lg">SSTOPUP Exchange</p>
                <p className="text-gray-500 text-xs">by Scof Services</p>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Your trusted platform for affordable airtime, data bundles, Bonga Points, and more in Kenya.
            </p>
            <button
              onClick={open}
              className="bg-red-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-red-600 transition"
            >
              📱 Download App
            </button>
          </div>

          {/* How To Purchase */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">How To Purchase</h3>
            <div className="space-y-3">
              <Link href="https://datarush.lunar.cyou/sstopup" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-green-400 transition">
                <FaGlobe className="text-lg text-green-500" />
                Website
              </Link>
              <Link href="https://wa.me/254700042349?text=Hello" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-green-400 transition">
                <FaWhatsapp className="text-lg text-green-500" />
                WhatsApp Bot
              </Link>
              <Link href="https://www.facebook.com/kevin.rotich.9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-blue-400 transition">
                <FaFacebook className="text-lg text-blue-500" />
                Facebook Bot
              </Link>
              <p className="text-xs text-gray-600 ml-7">💬 Message &quot;Start&quot; to activate</p>
              <Link href="https://www.facebook.com/profile.php?id=100089017086830&sk=followers" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-blue-400 transition">
                <FaFacebook className="text-lg text-blue-400" />
                Visit Our Page
              </Link>
              <Link href="https://datarush.lunar.cyou/sstopup" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-red-400 transition">
                <FaMobileAlt className="text-lg text-red-400" />
                App
              </Link>
              <Link href="https://www.scofhub.com/post/buy-ss-topup-packages-offline-using-paybill" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-orange-400 transition">
                <FaStore className="text-lg text-orange-400" />
                Offline (Paybill)
              </Link>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">FAQs</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/blogs" className="text-sm hover:text-green-400 transition">
                  How do I buy packages without data?
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-sm hover:text-green-400 transition">
                  How do I convert airtime to cash?
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-sm hover:text-green-400 transition">
                  How do I redeem Bonga Points for cash?
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-sm hover:text-green-400 transition">
                  Can I buy packages using Okoa Jahazi?
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-sm hover:text-green-400 transition">
                  How do I buy Bonga Points?
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-sm hover:text-green-400 transition">
                  How can I access packages from different channels?
                </Link>
              </li>
              <li>
                <Link href="/refer" className="text-sm hover:text-orange-400 transition">
                  How does the Refer &amp; Earn program work?
                </Link>
              </li>
            </ul>
          </div>

          {/* Need Help */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Need Help?</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-500" />
                <p className="text-sm">+254724047256</p>
              </div>
              <Link
                href="https://api.whatsapp.com/send/?phone=%2B254701087389&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-green-700 transition"
              >
                <FaWhatsapp className="text-lg" />
                Contact Support
              </Link>
            </div>

            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mt-8 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-green-400 transition">Home</Link></li>
              <li><Link href="/aboutus" className="text-sm hover:text-green-400 transition">About Us</Link></li>
              <li><Link href="/services" className="text-sm hover:text-green-400 transition">Services</Link></li>
              <li><Link href="/plans" className="text-sm hover:text-green-400 transition">Plans &amp; Packages</Link></li>
              <li><Link href="/blogs" className="text-sm hover:text-green-400 transition">Blog</Link></li>
              <li><Link href="/refer" className="text-sm text-orange-400 hover:text-orange-300 transition">Refer &amp; Earn KES 20</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            Copyright © {new Date().getFullYear()} All Rights Reserved By Scof Services
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://www.facebook.com/profile.php?id=100089017086830&sk=followers" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition">
              <FaFacebook className="text-lg" />
            </Link>
            <Link href="https://wa.me/254700042349?text=Hello" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-400 transition">
              <FaWhatsapp className="text-lg" />
            </Link>
            <Link href="https://datarush.lunar.cyou/sstopup" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-400 transition">
              <FaGlobe className="text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}