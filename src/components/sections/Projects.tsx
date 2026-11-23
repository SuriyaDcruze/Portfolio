import React, { useState, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/projects';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const Projects: React.FC = () => {
  const [category, setCategory] = useState<string>('all');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const filteredProjects = category === 'all'
    ? projects
    : projects.filter(project => project.category === category);

  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Recent Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A showcase of my latest work, featuring full-stack applications and responsive designs.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${category === cat
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25 scale-105'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="card group h-full flex flex-col"
              >
                <div className={`relative overflow-hidden aspect-video ${project.isLogo ? 'bg-[#060b1a]' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${project.isLogo ? 'object-contain p-6' : 'object-cover'}`}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 backdrop-blur-sm">
                    <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.liveLink !== '#' && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn bg-white text-gray-900 hover:bg-gray-100 border-none min-w-[100px]"
                        >
                          <ExternalLink size={18} className="mr-2" /> Live
                        </a>
                      )}

                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <div className="flex space-x-2">
                      {/* Only show first 3 technologies to keep card clean */}
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
