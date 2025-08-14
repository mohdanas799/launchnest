'use client';

import Link from 'next/link';
import {
  YoutubeIcon,
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Logo & About */}
        <div>
          <Link
            href="/"
            className="text-2xl font-extrabold flex items-center gap-2 text-gray-900"
          >
            <span className="text-yellow-500 text-3xl">▲</span> Launchnest
          </Link>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Accelerate AI development with the Next.js.
            <br />
            <strong>LaunchNest</strong> offers a customizable solution for scalable app creation.
          </p>
          <button className="mt-4 inline-flex items-center px-4 py-1.5 text-xs bg-yellow-100 text-yellow-800 border border-yellow-300 rounded-md hover:bg-yellow-200 transition">
            🚀 Built with <span className="ml-1 font-semibold">LaunchNest</span>
          </button>
        </div>

        {/* Templates */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Templates</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="#">Next.js AI Boilerplate</Link></li>
            <li><Link href="#">Next.js AI Template</Link></li>
            <li><Link href="#">React Native AI Boilerplate</Link></li>
            <li><Link href="#">React Native AI Template</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Company</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="#">Pricing</Link></li>
            <li><Link href="#">Affiliates</Link></li>
            <li><Link href="#">Documentation</Link></li>
            <li><Link href="#">Blog</Link></li>
          </ul>
        </div>

        {/* Free Tools */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Free Tools</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="#">SaaS Idea Validator</Link></li>
            <li><Link href="#">SaaS Name Generator</Link></li>
            <li><Link href="#">SaaS Pricing Generator</Link></li>
            <li><Link href="#">SaaS Content Generator</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Legal</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="#">Terms of Service</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">License</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-white py-5 border-t border-gray-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-6 text-gray-600 text-sm">
          <p>© 2025 LaunchNest. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="#"><YoutubeIcon className="w-5 h-5 hover:text-red-500 transition" /></Link>
            <Link href="#"><FacebookIcon className="w-5 h-5 hover:text-blue-600 transition" /></Link>
            <Link href="#"><LinkedinIcon className="w-5 h-5 hover:text-sky-600 transition" /></Link>
            <Link href="#"><TwitterIcon className="w-5 h-5 hover:text-gray-900 transition" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
