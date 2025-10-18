import React from 'react';
import { ProjectCard } from '../components/ProjectCard';

export const ProjectsPage: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern design and seamless user experience.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/api/placeholder/400/300',
      link: 'https://example.com',
      github: 'https://github.com/example'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team features.',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
      image: '/api/placeholder/400/300',
      link: 'https://example.com',
      github: 'https://github.com/example'
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Projects</h1>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Explore our portfolio of innovative solutions and creative projects 
          that showcase our expertise and passion for technology.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              link={project.link}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </div>
  );
};