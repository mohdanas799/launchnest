"use client";
import Link from "next/link";

export default function BuildAIAppsSection() {
  return (
    <section className="py-20 px-4 md:px-10 bg-white">
      <h2 className="text-4xl max-md:text-2xl max-md:w-80 max-md:mx-5 font-bold text-center  w-[56rem] mx-[17rem] mb-4 leading-tight">
        Everything you need—AI, Auth, Billing, i18n, and more—
        <span className="text-black">packaged and ready to launch.</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-tr from-pink-500 via-red-500 to-purple-500 p-1">
            <img
              src="https://www.usesaaskit.com/_next/image?url=%2Fclear-solution%2Fbuild-ai-apps.png&w=750&q=75" // save the image as this in /public/images
              alt="AI App Preview"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
        {/* Text Content */}
        <div>
          <div className="mt-6 inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Save 16+ Hours
          </div>

          <h3 className="text-2xl font-bold mt-6 text-pink-600">
            Build AI Apps
          </h3>
          <p className="mt-4 text-gray-700">
            You can build and launch AI apps in a week using our AI boilerplate.
            It uses the Vercel AI SDK, which supports OpenAI, Claude, Gemini,
            and other LLMs out of the box. Launching an AI app is now easier
            than ever with our boilerplate.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">
              🧠 OpenAI
            </span>
            <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">
              ⚡ Grok
            </span>
            <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">
              🔮 Google Gemini
            </span>
            <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">
              🤖 Anthropic Claude
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
