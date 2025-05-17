import React, { useEffect, useRef } from 'react';
import { skills } from '../../data/skills';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    <section id="skills" className="section bg-white dark:bg-gray-900 py-24">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 transition-opacity duration-500" style={{ animationDelay: '100ms' }}>
          <h6 className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2">
            My Expertise
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I've honed my skills across various design and development technologies to deliver comprehensive solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-8 opacity-0 transition-opacity duration-500" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>
            
            {skills.technical.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    {skill.name}
                  </h4>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: '0%', 
                      transitionDelay: `${200 + index * 100}ms` 
                    }}
                    onAnimationEnd={(e) => {
                      (e.target as HTMLDivElement).style.width = `${skill.level}%`;
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="opacity-0 transition-opacity duration-500" style={{ animationDelay: '300ms' }}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Design Skills
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.design.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white dark:bg-gray-700 rounded-full shadow-sm">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <h4 className="text-base font-medium text-gray-900 dark:text-white">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Soft Skills
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {skills.soft.map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-800 dark:hover:text-primary-300 transition-colors duration-300"
                    style={{ animationDelay: `${500 + index * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;