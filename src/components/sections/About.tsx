import React, { useEffect, useRef } from 'react';
import { User, Calendar, MapPin, Briefcase } from 'lucide-react';

const About: React.FC = () => {
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
    <section id="about" className="section bg-white dark:bg-gray-900 py-24">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h6 className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2 opacity-0 transition-opacity duration-500 delay-100" style={{ animationDelay: '100ms' }}>
            About Me
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 opacity-0 transition-opacity duration-500 delay-200" style={{ animationDelay: '200ms' }}>
            My Professional Journey
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6 opacity-0 transition-opacity duration-500 delay-300" style={{ animationDelay: '300ms' }}></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 opacity-0 transition-opacity duration-500 delay-400" style={{ animationDelay: '400ms' }}>
            With over 8 years of experience in design and development, I craft intuitive digital experiences
            that solve real-world problems through thoughtful design and clean code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 transition-opacity duration-500 delay-500" style={{ animationDelay: '500ms' }}>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Professional portrait" 
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-6 opacity-0 transition-opacity duration-500 delay-600" style={{ animationDelay: '600ms' }}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">John Doe</h3>
            <p className="text-gray-700 dark:text-gray-300">
              I'm a passionate UI/UX designer and front-end developer with a keen eye for detail and a love for creating 
              intuitive, engaging user experiences. My approach combines aesthetic sensibility with technical expertise
              to build products that are both beautiful and functional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <User size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Name</div>
                  <div className="font-medium">John Doe</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <Calendar size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Experience</div>
                  <div className="font-medium">8+ Years</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
                  <div className="font-medium">New York, NY</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <Briefcase size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Freelance</div>
                  <div className="font-medium">Available</div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;