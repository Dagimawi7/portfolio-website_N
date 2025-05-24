import React from 'react';
import { projects } from '@/data/projects';  // Import project data array
import ProjectCard from './ProjectCard';     // Import reusable ProjectCard component

export default function Projects() {
  return (
    // Section containing all projects with padding and background color
    <section id="projects" className="bg-black text-white py-20 px-6 md:px-12">
      {/* Section title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>

      {/* Grid layout for project cards, responsive columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          // Render ProjectCard for each project item
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
