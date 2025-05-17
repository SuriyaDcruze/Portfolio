import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/projects';

const Projects: React.FC = () => {
  const [category, setCategory] = useState<string>('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const filteredProjects = category === 'all' 
    ? projects 
    : projects.filter(project => project.category === category);
  
  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-800 py-24">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 transition-opacity duration-500" style={{ animationDelay: '100ms' }}>
          <h6 className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2">
            My Work
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Recent Projects
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Explore my recent work and discover how I bring ideas to life through design and development.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-12 opacity-0 transition-opacity duration-500" style={{ animationDelay: '200ms' }}>
          <div className="flex flex-wrap justify-center space-x-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2 mb-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === cat
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="card group overflow-hidden opacity-0 transition-opacity duration-500"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary py-2 px-3 text-sm flex-1"
                    >
                      <ExternalLink size={16} className="mr-1" /> Live
                    </a>
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline py-2 px-3 text-sm bg-white/20 text-white border-white/30 flex-1"
                    >
                      <Github size={16} className="mr-1" /> Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 text-xs font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                  <div className="flex space-x-1">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;