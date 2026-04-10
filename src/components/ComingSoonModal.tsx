"use client";
import { useState } from "react";

export function useComingSoon() {
  const [show, setShow] = useState(false);
  const open = (e: React.MouseEvent) => {
    e.preventDefault();
    setShow(true);
  };
  const close = () => setShow(false);
  return { show, open, close };
}

export default function ComingSoonModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl p-10 max-w-sm w-full text-center mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-6xl mb-4">🚀</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon!</h2>
        <p className="text-gray-600 mb-6">
          Our app is currently under development. Stay tuned — it will be available very soon!
        </p>
        <button
          onClick={onClose}
          className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300"
        >
          Got it!
        </button>
      </div>
    </div>
  );
}