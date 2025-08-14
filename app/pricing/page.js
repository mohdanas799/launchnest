"use client";
import React from "react";

const Page = () => {
  // Handle Checkout Function
  const handleCheckout = async (type) => {
    try {
      // const res = await fetch('/api/checkout', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ product: type }),
      // });

      const res = await fetch("/.netlify/functions/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product: type }),
      });

      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url;
      } else {
        console.error("No redirect URL found.");
      }
    } catch (err) {
      console.error("Checkout error:", err);
    }
  };

  return (
    <section id="pricing" className="bg-white py-32 px-4 text-center">
      <h4 className="text-sm text-orange-500 font-medium">Pricing</h4>
      <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
        Give your ultimate idea an ultimate solution
      </h2>

      <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm mb-8">
        💰 $100 OFF for first 50 customers{" "}
        <span className="font-semibold">(8 left)</span>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        {/* Web App Card */}
        <div className="border rounded-xl p-6 w-full max-w-sm shadow hover:shadow-md transition relative">
          <h3 className="text-lg font-semibold mb-2">Web App AI Boilerplate</h3>
          <p className="line-through text-gray-400 text-sm">$229</p>
          <p className="text-3xl font-bold mb-1">
            $119 <span className="text-sm font-normal">USD</span>
          </p>
          <p className="text-xs text-gray-500 mb-4">
            One-time payment. Lifetime access.
          </p>
          <ul className="text-left text-sm space-y-2 mb-6">
            <li>✓ AI Ready Codebase (Vercel AI SDK)</li>
            <li>
              ✓ Multiple LLM Support (OpenAI, Grok, Google Gemini, Anthropic
              Claude)
            </li>
            <li>✓ Multi Org Support (RBAC)</li>
            <li>✓ Authentication</li>
            <li>✓ Billing</li>
            <li>✓ Marketing Pages</li>
            <li>✓ Blog and Docs Pages (Markdown)</li>
            <li>✓ Waitlist Component</li>
            <li>✓ Translations (i18n)</li>
            <li>✓ Admin Tools</li>
          </ul>
          <button
            onClick={() => handleCheckout("web")}
            className="bg-yellow-400 hover:bg-yellow-500 transition text-black font-semibold w-full py-2 rounded-lg"
          >
            Buy this template
          </button>
        </div>

        {/* Mobile App Card */}
        <div className="border border-yellow-500 rounded-xl p-6 w-full max-w-sm shadow hover:shadow-md transition relative">
          {/* Badge */}
          <div className="absolute -top-4 right-4 bg-yellow-400 text-xs font-semibold px-3 py-1 rounded-full shadow">
            New Release
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Mobile App AI Boilerplate
          </h3>
          <p className="line-through text-gray-400 text-sm">$319</p>
          <p className="text-3xl font-bold mb-1">
            $219 <span className="text-sm font-normal">USD</span>
          </p>
          <p className="text-xs text-gray-500 mb-4">
            One-time payment. Lifetime access.
          </p>
          <ul className="text-left text-sm space-y-2 mb-6">
            <li>✓ AI Ready Codebase (Vercel AI SDK)</li>
            <li>
              ✓ Multiple LLM Support (OpenAI, Grok, Google Gemini, Anthropic
              Claude)
            </li>
            <li>✓ Multi Org Support (RBAC)</li>
            <li>✓ Authentication</li>
            <li>✓ Billing</li>
            <li>✓ Admin Tools</li>
          </ul>
          <button
            onClick={() => handleCheckout("mobile")}
            className="bg-yellow-400 hover:bg-yellow-500 transition text-black font-semibold w-full py-2 mt-28 rounded-lg"
          >
            Buy this template
          </button>
        </div>
      </div>

      {/* Code update message */}
      <div className="mt-10 inline-block bg-black text-green-400 font-mono text-sm px-4 py-2 rounded-lg shadow-md">
        <span className="text-purple-400">const</span>{" "}
        <span className="text-white">message</span> ={" "}
        <span className="text-green-500">"Code last updated 5 hours ago"</span>;
      </div>
    </section>
  );
};

export default Page;
