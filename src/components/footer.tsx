'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGlobe, FaMobileAlt, FaWhatsapp, FaFacebook, FaStore } from "react-icons/fa";
import googlePlayIcon from "../../public/assets/google-play.png";

export default function Footer() {
  return (
    <footer className="relative text-black py-8">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ec8787] to-[#76f576] opacity-90"></div>

      <div className="relative container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">


        {/* Contact Info */}
        <div>
          <h3 className="text-lg text-black font-semibold uppercase">How To Purchase</h3>

          <Link href="/website-purchase">
            <p className="mt-2 flex items-center text-black justify-start gap-2 cursor-pointer underline">
              <FaGlobe className="text-2xl text-red-600 mb-2" />
              Website
            </p>
          </Link>

          <Link href="whatsapp-bot">
            <p className="mt-2 flex items-center text-black justify-start gap-2 cursor-pointer underline">
              <FaWhatsapp className="text-2xl text-green-600 mb-2" />
              WhatsApp Bot
            </p>
          </Link>

          <Link href="facebook-bot">
            <p className="mt-2 flex items-center text-black justify-start gap-2 cursor-pointer underline">
              <FaFacebook className="text-2xl text-blue-600 mb-2" />
              Facebook Bot
            </p>
          </Link>

          <Link href="mobile-app">
            <p className="mt-2 flex items-center text-black justify-start gap-2 cursor-pointer underline">
              <FaMobileAlt className="text-2xl text-red-600 mb-2" />
              App
            </p>
          </Link>

          <Link href="offline">
            <p className="mt-2 flex items-center text-black justify-start gap-2 cursor-pointer underline">
              <FaStore className="text-2xl text-red-600 mb-2" />
              Offline
            </p>
          </Link>
        </div>


        {/* Download App */}
        <div>
          <h3 className="text-lg font-semibold uppercase">Download SSTOPUP</h3>
          <div className="mt-4 flex justify-center">
            <Link href="https://play.google.com/store/apps/details?id=com.lunartech.sstopup">
              <Image src={googlePlayIcon} alt="Google Play" width={150} height={50} />
            </Link>
          </div>
          <h3 className="text-lg text-black font-semibold uppercase mt-6">Need Help?</h3>
          <div className="mt-4 flex flex-col items-center">
            <p>If you have questions, +254XXXXXXXX</p>
            <Link
              href="https://api.whatsapp.com/send/?phone=%2B254701087389&text&type=phone_number&app_absent=0"
              className="inline-block bg-green-600 text-white px-4 py-2 mt-2 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Contact Support
            </Link>

          </div>
        </div>

        {/* FAQs */}
        <div>
          <h3 className="text-lg font-semibold uppercase">FAQs</h3>
          <ul className="mt-4 space-y-2 text-sm text-black underline">
            <li>
              <Link href="/post/12-free-must-know-websites-for-every-developer-authorimage-noor-mohammad-product-insights-knowledge" className="hover:underline hover:text-gray-200">
                How does the referral program work?
              </Link>
            </li>
            <li>
              <Link href="/post/12-free-must-know-websites-for-every-developer-authorimage-noor-mohammad-product-insights-knowledge" className="hover:underline hover:text-gray-200">
                How can I check my Bonga Points balance?
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="relative mt-8 text-center text-sm text-black font-semibold">
        Copyright © {new Date().getFullYear()} All Rights Reserved By Scof Services
      </div>
    </footer>
  );
}
