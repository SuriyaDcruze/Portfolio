import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../../utils/cn';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-950"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div
          style={{ y: y1, opacity: 0.6 }}
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary-400/20 dark:bg-primary-500/10 blur-[100px]"
        />
        <motion.div
          style={{ y: y2, opacity: 0.6 }}
          className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-secondary-400/20 dark:bg-secondary-500/10 blur-[100px]"
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <motion.div
        style={{ opacity }}
        className="container mx-auto px-6 z-10 relative"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary-100/50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6 backdrop-blur-sm border border-primary-200/50 dark:border-primary-700/30">
              Available for Freelance Projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
          >
            Hi, I'm <br className="md:hidden" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 bg-300% animate-gradient">
              Soundhar N
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            <span className="font-semibold text-gray-900 dark:text-white">Full Stack Developer</span> &
            <span className="font-semibold text-gray-900 dark:text-white"> Automation Tester</span> crafting
            robust web applications with modern technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#projects"
              className="btn btn-primary min-w-[160px] group"
            >
              View My Work
              <ArrowDown className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-1" />
            </a>
            <a
              href="#contact"
              className="btn btn-outline min-w-[160px] bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex justify-center gap-6 text-gray-500"
          >
            <a href="https://github.com/SuriyaDcruze" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors hover:scale-110 transform duration-200">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/soundhar-n-826718352" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors hover:scale-110 transform duration-200">
              <Linkedin size={24} />
            </a>
            <a href="mailto:soundharnanthakumar@gmail.com" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors hover:scale-110 transform duration-200">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="text-gray-400 dark:text-gray-500" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;