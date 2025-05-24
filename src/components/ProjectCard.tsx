import React from 'react';

interface ProjectCardProps {
  title: string;         // Project title
  description: string;   // Short project description
  tech: string[];        // List of technologies used
  liveUrl: string;       // URL to live demo
  githubUrl: string;     // URL to GitHub repo
}

export default function ProjectCard({ title, description, tech, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    // Card container with rounded corners, shadow, and hover effect
    <div className="bg-gray-900 rounded-2xl shadow-xl p-6 border border-gray-700 hover:shadow-2xl transition">
      {/* Project title */}
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

      {/* Project description */}
      <p className="text-gray-300 mb-4">{description}</p>

      {/* Tech stack badges */}
      <ul className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, i) => (
          // Each tech item styled as a badge
          <li key={i} className="bg-gray-800 text-sm px-2 py-1 rounded text-indigo-400">
            {item}
          </li>
        ))}
      </ul>

      {/* Links to live site and GitHub repo */}
      <div className="flex gap-4">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">
          Live Site
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">
          GitHub
        </a>
      </div>
    </div>
  );
}
