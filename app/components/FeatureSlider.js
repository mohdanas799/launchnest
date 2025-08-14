"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    tag: "Save 10+ hours",
    title: "Secure User Logins",
    description:
      "The boilerplate supports email-password, magic link, social auth, and phone auth out of the box. You simply need to update one configuration file to enable these features in your application.",
    image:
      "https://www.usesaaskit.com/_next/image?url=%2Fclear-solution%2Fbuild-ai-apps.png&w=750&q=75",
  },
  {
    tag: "Save 12+ hours",
    title: "Easy Payment Integration",
    description:
      "The boilerplate integrates Stripe subscriptions, free trials, a customer portal, and more. You can enable or disable features in one configuration file.",
    image:
      "https://www.usesaaskit.com/_next/image?url=%2Fclear-solution%2Fbuild-ai-apps.png&w=750&q=75",
  },
  {
    tag: "Save 14+ hours",
    title: "Admin Dashboard",
    description:
      "Includes a full-featured admin dashboard with user control, usage insights, plan changes, and more.",
    image:
      "https://www.usesaaskit.com/_next/image?url=%2Fclear-solution%2Fbuild-ai-apps.png&w=750&q=75",
  },
];

const tabs = ["Web App Boilerplate"];

export default function FeatureSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Top bar: Tab left, Arrows right */}
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <div className="flex gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-5 py-2 rounded-full border-2 text-sm font-semibold ${
                tab === activeTab
                  ? "bg-yellow-400 border-yellow-400 text-black"
                  : "border-yellow-400 text-black"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="p-2 bg-yellow-400 rounded-full hover:bg-yellow-500 transition shadow"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-yellow-400 rounded-full hover:bg-yellow-500 transition shadow"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.97, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: -30 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex-1 border rounded-xl overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6 p-6 items-center bg-white"
          >
            {/* Text */}
            <div>
              <div className="inline-block bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded shadow-sm">
                {features[currentIndex].tag}
              </div>
              <h3 className="text-2xl font-bold mt-4 text-pink-600">
                {features[currentIndex].title}
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed text-base">
                {features[currentIndex].description}
              </p>
            </div>

            {/* Image */}
            <div className="bg-gradient-to-tr from-pink-500 via-red-500 to-purple-500 rounded-xl p-2">
              <img
                src={features[currentIndex].image}
                alt={features[currentIndex].title}
                width={600}
                height={400}
                className="rounded-lg w-full h-auto shadow-lg"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
