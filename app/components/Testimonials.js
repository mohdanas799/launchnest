"use client";

import { MessageSquareQuote, Twitter } from "lucide-react"; // use Twitter icon

const testimonials = [
  {
    name: "Thomas Sanlis",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: (
      <>
        If you're looking for a SaaS boilerplate with a perfect balance between
        features and simplicity, look no further 😅! useSAASkit has an
        outstanding documentation,{" "}
        <span className="bg-pink-200 text-pink-800 font-semibold px-1 rounded">
          all the essential features
        </span>
        , and a modular architecture that makes it the ideal foundation for your
        next SaaS project.
      </>
    ),
  },
  {
    name: "Philipp Bruhin",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    text: (
      <>
        useSAASkit is a well-crafted Next.js and Supabase skeleton that stands
        out for its use of cutting-edge technologies. It offers a perfect
        balance of features, providing essential{" "}
        <span className="bg-pink-200 text-pink-800 font-semibold px-1 rounded">
          functionality without unnecessary complexity
        </span>
        , allowing for increased productivity right from the start.
      </>
    ),
  },
  {
    name: "Peter Mick",
    avatar: "https://randomuser.me/api/portraits/men/64.jpg",
    text: (
      <>
        A rock-solid template, made up of industry leading packages.{" "}
        <span className="bg-pink-200 text-pink-800 font-semibold px-1 rounded">
          100% helpful to get you started faster.
        </span>
      </>
    ),
  },
  {
    name: "Terje Gløerstad",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    text: (
      <>
        I love the detailed documentation, it's the best I've seen. No{" "}
        <span className="bg-pink-200 text-pink-800 font-semibold px-1 rounded">
          fluff UI elements
        </span>
        , just core-focused and productivity-oriented building blocks.
      </>
    ),
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl px-6 mx-auto text-center">
        <p className="text-pink-500 font-semibold mb-2 text-lg">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Some awesome products made by awesome founders
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 bg-white shadow-sm text-left flex flex-col gap-4"
            >
              {/* Avatar + Name + Twitter X icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-semibold">{testimonial.name}</span>
                </div>
                {/* <Twitter className="w-5 h-5 text-gray-400" /> */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 1227"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M714.9 496.6L1178.9 0h-107.5L661.1 429.2 297.6 0H0l492.6 585.4 0 0L0 1227h107.5l447.3-460.2 386.6 460.2H1200L714.9 496.6zm-126 129.7l-51.8-61.7L138.6 79.8h121.1l335.1 399.3 51.8 61.7 437.3 521.6H962.9L588.9 626.3z" />
                  </svg>
                </a>
              </div>

              {/* Message */}
              <p className="text-gray-800 leading-relaxed text-[15px]">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
