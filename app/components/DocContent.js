// components/DocContent.js
import React from "react";

export default function DocContent() {
  return (
    <div className="space-y-10 text-gray-800">
      <section id="overview">
        <h2 className="text-3xl font-bold">Overview</h2>
        <p className="mt-2 text-gray-600">
          Welcome to the Next.js Supabase AI Template documentation! This guide
          will help you understand how to set up, customize, and deploy your
          template.
        </p>
      </section>

      <section id="tips">
        <h3 className="text-2xl font-semibold">Tips & Tricks</h3>
        <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
          <li>Search bar helps you find sections instantly.</li>
          <li>Quick jump using sidebar links.</li>
          <li>Copy/paste code snippets easily.</li>
          <li>
            Clone:{" "}
            <a
              href="https://github.com/usesaaskit/nextjs-supabase-ai-boilerplate-legacy"
              className="text-pink-600 underline"
            >
              Legacy
            </a>
            ,{" "}
            <a
              href="https://github.com/usesaaskit/nextjs-supabase-ai-boilerplate-latest"
              className="text-pink-600 underline"
            >
              Latest
            </a>
            ,{" "}
            <a
              href="https://github.com/usesaaskit/react-native-supabase-ai-boilerplate"
              className="text-pink-600 underline"
            >
              React Native
            </a>
          </li>
        </ul>
      </section>

      <section id="start">
        <h3 className="text-2xl font-semibold">Start here</h3>
        <p className="mt-2 text-gray-600">
          Everything you need to know to get started with our template.
        </p>
        <div className="mt-4 flex gap-4">
          <div className="w-1/2 p-4 border rounded shadow-sm">
            📁 Install CLI
          </div>
          <div className="w-1/2 p-4 border rounded shadow-sm">
            🔧 Configure Env
          </div>
        </div>
      </section>
    </div>
  );
}
