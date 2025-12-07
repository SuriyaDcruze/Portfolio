import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';


const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
              Soundhar N
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed">
              Crafting exceptional digital experiences where extensive functionality meets elegant design.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://github.com/SuriyaDcruze" className="p-2 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-gray-800 dark:hover:text-primary-400 transition-all duration-300 hover:-translate-y-1">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/soundhar-n-826718352" className="p-2 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-gray-800 dark:hover:text-primary-400 transition-all duration-300 hover:-translate-y-1">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-gray-800 dark:hover:text-primary-400 transition-all duration-300 hover:-translate-y-1">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="mailto:soundharnanthakumar@gmail.com" className="p-2 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-gray-800 dark:hover:text-primary-400 transition-all duration-300 hover:-translate-y-1">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`/#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
              Contact Info
            </h4>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="block">Chennai, Tamil Nadu</span>
              </li>
              <li>
                <a href="mailto:suriyananthakumar0007@gmail.com" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  suriyananthakumar0007@gmail.com
                </a>
              </li>
              <li>
                <span className="block">+91 95977 54821</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center bg-gray-50/0">
          <p className="text-gray-500 dark:text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Soundhar N. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;