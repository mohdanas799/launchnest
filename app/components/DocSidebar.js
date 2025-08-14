// components/DocSidebar.js
"use client";
import Link from "next/link";

export default function DocSidebar() {
  return (
    <aside className="hidden lg:block w-64 h-screen sticky top-0 border-r border-gray-200 p-6 bg-white">
      <h1 className="text-xl font-bold mb-6 text-pink-600">useSAAKit</h1>
      <nav className="space-y-2 text-sm">
        <Link href="#overview" className="block text-pink-600 font-semibold">Overview</Link>
        <Link href="#tips" className="block hover:text-pink-600">Tips & Tricks</Link>
        <Link href="#start" className="block hover:text-pink-600">Start here</Link>
        <p className="mt-4 font-semibold text-gray-600">Guides</p>
        <ul className="ml-3 text-gray-500">
          <li><Link href="#auth" className="block hover:text-pink-600">Authentication</Link></li>
          <li><Link href="#ai" className="block hover:text-pink-600">AI</Link></li>
          <li><Link href="#profile" className="block hover:text-pink-600">Profile Management</Link></li>
          {/* Add more here */}
        </ul>
      </nav>
    </aside>
  );
}
