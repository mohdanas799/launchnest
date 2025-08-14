"use client";

import { ArrowRight, ArrowLeft, ArrowDown, ArrowUp, Plus } from "lucide-react";
import Image from "next/image";

export default function BoilerplateLoopSection() {
  return (
    <>
      <section className="py-20 px-4 md:px-0 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Tired of spending weeks on boilerplate features?
        </h2>

        <div className="max-w-5xl mx-auto relative flex flex-col items-center space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:grid-rows-3 gap-8">
          {/* Center label */}
          <p className="absolute top-1/2 left-1/2 text-gray-500 text-sm -translate-x-1/2 -translate-y-1/2 text-center hidden md:block">
            It’s a never
            <br />
            ending loop
          </p>

          {/* Top middle box */}
          <div className="flex flex-col items-center justify-center row-start-1 col-start-2 border-2 rounded-lg px-6 py-4 text-center border-orange-300 bg-white relative">
            <p className="text-xl">🥴</p>
            <p className="font-semibold mt-1">
              Spend time 🙆🏻‍♀️ on
              <br />
              boilerplate features
            </p>
            <div className="flex md:absolute md:-left-5 md:top-1/2 md:-translate-y-1/2 mt-3 md:mt-0 bg-gradient-to-r from-orange-400 to-pink-500 p-1 rounded-full shadow">
              <ArrowRight className="hidden md:block text-white w-4 h-4" />
              <ArrowDown className="md:hidden text-white w-4 h-4" />
            </div>
          </div>

          {/* Right middle box */}
          <div className="flex flex-col items-center justify-center row-start-2 col-start-3 border-2 rounded-lg px-6 py-4 text-center border-orange-300 bg-white relative">
            <p className="text-xl">😫</p>
            <p className="font-semibold mt-1">
              Constantly update
              <br />
              landing page for sales
            </p>
            <div className="flex md:absolute md:top-[-20px] md:left-1/2 md:-translate-x-1/2 mt-3 md:mt-0 bg-gradient-to-r from-orange-400 to-pink-500 p-1 rounded-full shadow">
              <ArrowDown className="text-white w-4 h-4" />
            </div>
          </div>

          {/* Bottom middle box */}
          <div className="flex flex-col items-center justify-center row-start-3 col-start-2 border-2 rounded-lg px-6 py-4 text-center border-orange-300 bg-white relative">
            <p className="text-xl">😬</p>
            <p className="font-semibold mt-1">
              Months wasted
              <br />
              Zero conversions
            </p>
            <div className="flex md:absolute md:-right-5 md:top-1/2 md:-translate-y-1/2 mt-3 md:mt-0 bg-gradient-to-r from-orange-400 to-pink-500 p-1 rounded-full shadow">
              <ArrowLeft className="hidden md:block text-white w-4 h-4" />
              <ArrowDown className="md:hidden text-white w-4 h-4" />
            </div>
          </div>

          {/* Left middle box */}
          <div className="flex flex-col items-center justify-center row-start-2 col-start-1 border-2 rounded-lg px-6 py-4 text-center border-orange-300 bg-white relative">
            <p className="text-xl">🥴</p>
            <p className="font-semibold mt-1">
              Cycle restarts with a<br />
              new idea
            </p>
            <div className="flex md:absolute md:-bottom-5 md:left-1/2 md:-translate-x-1/2 mt-3 md:mt-0 bg-gradient-to-r from-orange-400 to-pink-500 p-1 rounded-full shadow">
              <ArrowUp className="hidden md:block text-white w-4 h-4" />
              <ArrowDown className="md:hidden text-white w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center max-md:gap-20 gap-60">
          {/* Left Box */}
          <div className="flex flex-col items-center relative">
            {/* Core Setup */}
            <div className="bg-[#2b0616] text-white rounded-xl p-6 w-[320px] md:w-[380px] shadow-md">
              <h3 className="text-xl font-bold mb-4">Core boilerplate setup</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-red-400">• 16+ hours</span> implementing
                  AI-driven features
                </li>
                <li>
                  <span className="text-red-400">• 10+ hours</span> building
                  authentication
                </li>
                <li>
                  <span className="text-red-400">• 10+ hours</span> building
                  multi-org support
                </li>
                <li>
                  <span className="text-red-400">• 8+ hours</span> building
                  admin tools
                </li>
                <li>
                  <span className="text-red-400">• 12+ hours</span> integrating
                  billing & subscription
                </li>
              </ul>
              <p className="mt-4 text-sm text-pink-300 italic">
                plus testing all features...
              </p>
            </div>

            {/* Plus Icon */}
            <div className="absolute bottom-[200px] z-10 bg-yellow-400 p-2 rounded-full border-4 border-white shadow-lg">
              <Plus className="text-black" size={20} />
            </div>

            {/* Marketing Setup */}
            <div className="bg-[#1e0524] text-white rounded-xl p-6 w-[320px] md:w-[380px] shadow-md mt-12">
              <h3 className="text-xl font-bold mb-4">Marketing Setup</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-red-400">• 6+ hours</span> creating
                  marketing pages
                </li>
                <li>
                  <span className="text-red-400">• 4+ hours</span> optimizing
                  SEO & analytics
                </li>
                <li>
                  <span className="text-red-400">• 3+ hours</span> crafting
                  email campaigns
                </li>
                <li>
                  <span className="text-red-400">• 5+ hours</span> adding
                  translations (i18n)
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side */}
          <div className="text-center">
            <img
              src="https://thumb.ac-illust.com/96/964a8d0b03dcf7217c0ab262f1ec1f64_t.jpeg"
              alt="emoji"
              width={60}
              height={60}
              className="mx-auto mb-4"
            />
            <h2 className="text-5xl font-bold text-pink-500">74+ Hours</h2>
            <p className="text-pink-400 mt-1 text-lg font-medium">hard work</p>
          </div>
        </div>
      </section>
    </>
  );
}
