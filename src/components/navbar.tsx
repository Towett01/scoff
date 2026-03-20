'use client';
import Link from "next/link";
import Image from "next/image";
import logoImage from "../../public/assets/logoo.png";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-green-100 via-white to-red-100 py-4 top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-4 relative">
        {/* Logo */}
        <div className="flex items-center z-50">
          <Link href="/" title="Home">
            <Image
              src={logoImage}
              alt="Scof Services"
              width={80}
              height={80}
              className="w-auto h-auto"
              priority
            />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className="block md:hidden text-green-500 focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`
            ${isOpen ? "block" : "hidden"}
            absolute top-full left-0 w-full bg-black text-white py-6 z-50
            md:static md:flex md:items-center md:justify-center md:space-x-8 md:bg-transparent md:text-dark
          `}
        >
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block text-lg font-medium hover:text-red-500 transition py-2 px-4 text-green-500 md:text-dark"
          >
            Home
          </Link>
          <Link
            href="/aboutus"
            onClick={() => setIsOpen(false)}
            className="block text-lg font-medium hover:text-red-500 transition py-2 px-4 text-green-500  md:text-dark"
          >
            About Us
          </Link>
          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className="block text-lg font-medium hover:text-red-500 transition py-2 px-4 text-green-500  md:text-dark"
          >
            Services
          </Link>
          <Link
            href="/blogs"
            onClick={() => setIsOpen(false)}
            className="block text-lg font-medium hover:text-red-500 transition py-2 px-4 text-green-500  md:text-dark"
          >
            Our Blogs
          </Link>
          {/* CTA Button for Mobile too */}
          <div className="mt-4 md:hidden px-4"> 
            <span className="block bg-gray-400 text-white text-center py-2 rounded-lg font-medium cursor-not-allowed">
              🚀 Coming Soon
            </span>
          </div>
        </nav>

        {/* CTA Button Desktop */}
        {/* <div className="hidden md:inline-flex items-center space-x-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="bg-red-500 text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-red-600 transition"
          >
            Get The App
          </Link>
        </div> */}
      </div>
    </header>
  );
}