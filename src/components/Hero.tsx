// src/components/Hero.tsx
import React from 'react';

export default function Hero() {
  return (
    // Full-screen section with dark gradient background and centered content
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-8 text-center">
      <div>
        {/* Main heading – replace with your name */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-indigo-400">Dagimawi Tamrat</span>
        </h1>

        {/* Tagline or intro message */}
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-6">
          I build fast, responsive, and beautiful web applications.
        </p>

        {/* CTA button linking to the projects section */}
        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-xl transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
