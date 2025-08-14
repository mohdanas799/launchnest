"use client";

import React from "react";

const ToolCard = ({ title, desc, color, img, align }) => {
  const isLeft = align === "left";

  return (
    <div
      className={`relative flex items-center ${
        isLeft ? "justify-end" : "justify-start"
      } max-md:justify-center`}
    >
      {/* Horizontal line (desktop only) */}
      {isLeft && <div className="h-0.5 w-10 bg-gray-300 mr-3 max-md:hidden" />}

      <div className="bg-white border border-gray-200 shadow-lg rounded-lg px-5 py-4 w-64 flex items-center gap-4">
        <img src={img} alt={title} className="w-10 h-10 object-contain" />
        <div>
          <h3 className={`font-semibold text-base ${color}`}>{title}</h3>
          <p className="text-sm text-gray-500">{desc}</p>
        </div>
      </div>

      {!isLeft && <div className="h-0.5 w-10 bg-gray-300 ml-3 max-md:hidden" />}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative bg-white py-20 px-6 sm:px-12 pt-40 max-md:pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 relative z-10">
        {/* LEFT TEXT */}
        <div className="md:w-1/2 z-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
            Why Wait? <br />
            Launch Your <br />
            AI Startup{" "}
            <span className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 bg-clip-text text-transparent">
              in a Week
            </span>
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            The Next.js boilerplate that gives you auth, multi-org, admin tools,
            billing, marketing pages, analytics, and AI — ready from day one.
          </p>

          <div className="flex items-center space-x-3 mb-6">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={`https://randomuser.me/api/portraits/men/${30 + i}.jpg`}
                  className="w-9 h-9 rounded-full border-2 border-white"
                  alt="user"
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-medium">Loved by makers</p>
              <div className="flex text-yellow-500 text-sm">★★★★★</div>
            </div>
          </div>

          <div className="flex gap-4 mb-4 flex-wrap">
            <button className="bg-yellow-400 hover:bg-yellow-500 transition text-black font-semibold px-6 py-3 rounded-md shadow">
              Get Access
            </button>
            <button className="border border-yellow-400 px-6 py-3 rounded-md text-yellow-600 hover:bg-yellow-50 transition">
              Documentation
            </button>
          </div>
          <p className="text-green-600 font-semibold">
            🎁 $100 OFF for first 50 customers (8 left)
          </p>
        </div>

        {/* RIGHT VISUAL */}
        <div className="md:w-1/2 w-full relative flex justify-center items-center">
          {/* Vertical Line (hide on mobile) */}
          <div className="absolute top-0 bottom-0 w-[2px] bg-gray-200 left-1/2 transform -translate-x-1/2 z-0 max-md:hidden" />

          {/* + SEO Circle (hide on mobile) */}
          <div className="absolute max-md:hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <div className="w-24 h-24 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-lg shadow-lg text-center">
              + SEO
            </div>
          </div>

          {/* Tool Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-16 mt-6 relative z-10">
            {/* Left */}
            <div className="flex flex-col items-end gap-16 max-md:items-center">
              <ToolCard
                title="Supabase"
                desc="Auth, Storage & Database"
                img="https://img.icons8.com/color/512/supabase.png"
                color="text-green-600"
                align="right"
              />
              <ToolCard
                title="Next.js"
                desc="Built for Web Apps"
                img="https://img.icons8.com/fluent-systems-filled/512/nextjs.png"
                color="text-black"
                align="right"
              />
              <ToolCard
                title="Stripe"
                desc="Subscription & Payments"
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYcX9uh7FHVzyUZuSZmjFeC7W9Dcli8sNg-Q&s"
                color="text-purple-600"
                align="right"
              />
            </div>

            {/* Right */}
            <div className="flex flex-col items-start gap-20 max-md:pt-3 pt-20 max-md:items-center">
              <ToolCard
                title="Tailwind CSS"
                desc="UI & Components"
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcoZsMBFkU9ArhUL_HlgeESChICNA1cZcIZg&s"
                color="text-blue-500"
                align="left"
              />
              <ToolCard
                title="Resend"
                desc="Marketing Emails"
                img="https://avatars.githubusercontent.com/u/109384852?s=200&v=4"
                color="text-black"
                align="left"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
