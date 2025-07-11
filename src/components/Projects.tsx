
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React, TypeScript, and Framer Motion featuring smooth animations and modern design.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/pavanthrikoti',
      demo: '#',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with user authentication, product management, and payment integration.',
      tech: ['Node.js', 'Express', 'MongoDB', 'React'],
      github: 'https://github.com/pavanthrikoti',
      demo: '#',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Socket.io'],
      github: 'https://github.com/pavanthrikoti',
      demo: '#',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasts and interactive charts.',
      tech: ['React', 'Chart.js', 'Weather API', 'CSS3'],
      github: 'https://github.com/pavanthrikoti',
      demo: '#',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with group messaging, file sharing, and emoji support.',
      tech: ['Socket.io', 'Node.js', 'React', 'MongoDB'],
      github: 'https://github.com/pavanthrikoti',
      demo: '#',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Algorithm Visualizer',
      description: 'Interactive tool to visualize sorting and searching algorithms with step-by-step animations.',
      tech: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Algorithms'],
      github: 'https://github.com/pavanthrikoti',
      demo: '#',
      image: '/api/placeholder/400/250'
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-green-400/20 flex items-center justify-center">
                  <Code className="text-primary" size={48} />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="text-white" size={20} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="text-white" size={20} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
