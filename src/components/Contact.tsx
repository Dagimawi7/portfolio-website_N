import React from 'react';

export default function Contact() {
  return (
    // Contact section with padding, max width, and centered text
    <section id="contact" className="bg-black text-white py-20 px-6 md:px-12 max-w-4xl mx-auto text-center">
      {/* Section heading */}
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      {/* Invitation message */}
      <p className="mb-6 text-lg">
        Interested in working together? Feel free to reach out!
      </p>

      {/* Email link styled as a button */}
      <a
        href="mailto:your.email@example.com"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition"
      >
        Send Email
      </a>
    </section>
  );
}
