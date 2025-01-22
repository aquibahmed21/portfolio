import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Static Web Hosting Platform',
      description: 'A full-featured online store with React and Node.js',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
      tags: ['HTML', 'CSS', 'Typescript', 'Google Protobuf'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
      tags: ['HTML', 'CSS', 'Typescript', 'Google Protobuf'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with animations',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      tags: ['React', 'TypeScript', 'Tailwind'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      id: 4,
      title: 'Crypto Tracker and Managment App',
      description: 'Manage your crypto portfolio and get alerts when your portfolio is in profit or loss. Powered by WazirX.',
      image: 'https://images.unsplash.com/photo-1643488072086-9d7318c0a04b?auto=format&fit=crop&q=80&w=800',
      tags: ['React', 'TypeScript', 'Tailwind'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;