import React from 'react';

export default function About() {
  return (
    // About section with padding, max width, and centered content
    <section id="about" className="bg-gray-900 text-white py-20 px-6 md:px-12 max-w-4xl mx-auto">
      {/* Section heading */}
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>

      {/* Intro paragraph with personal description */}
      <p className="text-lg leading-relaxed mb-4">
        Hello! I’m <strong>Dagimawi Tamrat</strong>, a passionate software engineer with experience in building scalable web applications using modern technologies like React, Next.js, and TypeScript. I enjoy solving complex problems and creating delightful user experiences.
      </p>

      {/* Additional paragraph about learning and enthusiasm */}
      <p className="text-lg leading-relaxed">
        I’m constantly learning and excited to contribute to innovative projects that make a difference.
      </p>
    </section>
  );
}
