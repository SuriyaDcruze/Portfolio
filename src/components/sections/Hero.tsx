import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = Math.max(1 - scrollY / 700, 0);
      const translateY = scrollY * 0.3;
      
      heroRef.current.style.opacity = String(opacity);
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {theme === 'light' && (
        <div className="absolute inset-0 w-full h-full">
          {/* <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
          >
          <source src="https://cdn.coverr.co/videos/coverr-typing-on-computer-1584/1080p.mp4" type="video/mp4" />
          </video> */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
        </div>
      )}
      
      <div className={theme === 'dark' ? 'absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800' : ''} />
      
      <div 
        ref={heroRef}
        className="container mx-auto px-4 z-10 transition-all duration-300 ease-out"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 slide-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500">
              SOUNDHAR N
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 slide-up">
            <span className="font-semibold">Full Stack Developer & Automation Tester</span> building intelligent web solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up">
            <a 
              href="#projects" 
              className="btn btn-primary"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="btn btn-outline"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a 
          href="#about"
          className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </a>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-400/20 dark:bg-primary-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-400/20 dark:bg-secondary-600/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Hero;