"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { trackReferPopupShown, trackReferPopupDismissed, trackReferStart } from "@/lib/analytics";

export default function ReferPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("referPopupShown");
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setShow(true);
      sessionStorage.setItem("referPopupShown", "true");
      trackReferPopupShown();
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-orange-500 to-purple-600" />

        <button
          onClick={() => { setShow(false); trackReferPopupDismissed(); }}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition text-xl font-bold"
        >
          ✕
        </button>

        <div className="px-6 py-8 text-center">
          <div className="text-5xl mb-5">🎁</div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Earn <span className="text-orange-500">KES 20</span> Free!
          </h2>

          <p className="text-gray-500 mb-6">
            Invite a new user to SSTOPUP Exchange via link or phone number. When they purchase KES 20+, you earn KES 20 M-Pesa cash!
          </p>

          <div className="flex justify-center gap-3 mb-6">
            <div className="bg-orange-50 border border-orange-200 rounded-lg px-3 py-2 text-center">
              <p className="text-lg">🔗</p>
              <p className="text-xs text-orange-700 font-medium">Share link</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg px-3 py-2 text-center">
              <p className="text-lg">👤</p>
              <p className="text-xs text-orange-700 font-medium">New user buys</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg px-3 py-2 text-center">
              <p className="text-lg">💰</p>
              <p className="text-xs text-orange-700 font-medium">You earn 20!</p>
            </div>
          </div>

          <Link
            href="/refer"
            onClick={() => { setShow(false); trackReferStart("popup"); }}
            className="block w-full py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold text-lg rounded-xl hover:opacity-90 transition"
          >
            Start Earning Now
          </Link>

          <button
            onClick={() => { setShow(false); trackReferPopupDismissed(); }}
            className="mt-3 text-sm text-gray-400 hover:text-gray-600 transition"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}