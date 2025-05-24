// src/data/projects.ts

// Array of project objects used to populate the Projects section
export const projects = [
  {
    title: 'DevFinder',                           // Project name
    description: 'A GitHub user search app using the GitHub API.', // Short summary
    tech: ['React', 'Tailwind', 'TypeScript'],  // Technologies used
    liveUrl: 'https://your-live-site.com',       // Link to live demo
    githubUrl: 'https://github.com/yourusername/devfinder', // GitHub repo URL
  },
  {
    title: 'TaskTracker',
    description: 'A simple Kanban-style task board with drag-and-drop.',
    tech: ['Next.js', 'Framer Motion', 'Zustand'],
    liveUrl: 'https://your-live-site.com',
    githubUrl: 'https://github.com/yourusername/tasktracker',
  },
  {
    title: 'Portfolio Site',
    description: 'The site you’re looking at right now — built with love.',
    tech: ['Next.js', 'Tailwind', 'TypeScript'],
    liveUrl: '/',  // Root URL for the portfolio
    githubUrl: 'https://github.com/yourusername/portfolio-website',
  },
];
