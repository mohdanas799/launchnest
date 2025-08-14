"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Github } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full shadow-sm border-b bg-white fixed z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-bold flex items-center gap-2 text-gray-800"
          >
            <span className="text-yellow-500">▲</span> Launchnest
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 items-center text-lg font-semibold text-gray-700">
            <Link href="/pricing" className="hover:text-black">
              Pricing
            </Link>
            <Link href="/documentation" className="hover:text-black">
              Documentation
            </Link>
            <Link href="/demo" className="hover:text-black">
              Demo
            </Link>
            <Link href="/blog" className="hover:text-black">
              Blog
            </Link>
            <a
              href="/pricing"
              target="_blank"
              className="ml-6 flex gap-2 items-center bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded text-black font-semibold"
            >
              <Github size={20} />
              Get Access
            </a>
          </div>

          {/* Mobile Button */}
          <button className="md:hidden" onClick={() => setOpen(true)}>
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* Right Drawer with animation */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-lg z-50 transform transition-all duration-500 ease-in-out ${
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <h2 className="text-lg font-bold text-gray-800">Launchnest</h2>
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col p-6 gap-4 text-gray-700 font-semibold text-base">
          <Link href="/pricing" onClick={() => setOpen(false)} className="hover:text-black">
            Pricing
          </Link>
          <Link href="/docs" onClick={() => setOpen(false)} className="hover:text-black">
            Documentation
          </Link>
          <Link href="/demo" onClick={() => setOpen(false)} className="hover:text-black">
            Demo
          </Link>
          <Link href="/blog" onClick={() => setOpen(false)} className="hover:text-black">
            Blog
          </Link>
          <a
            href="https://github.com/mohdanas799"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 px-4 py-2 mt-6 rounded text-black font-semibold justify-center"
          >
            <Github size={18} /> Get Access
          </a>
        </div>
      </div>

      {/* Animated Overlay behind drawer */}
      <div
        className={`fixed inset-0 z-40 backdrop-blur-sm bg-black/40 transition-opacity duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />
    </>
  );
}
