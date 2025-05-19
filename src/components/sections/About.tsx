import React, { useRef } from 'react';
import { User, Calendar, MapPin, Briefcase } from 'lucide-react';
import aboutImg from "../../assets/about-1.jpg";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Removed IntersectionObserver and animation useEffect

  return (
    <section id="about" className="section bg-white dark:bg-gray-900 py-24">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h6 className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2">
            About Me
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Professional Journey
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            With over 2+ years of experience in design and development, I create intuitive and impactful digital solutions by combining user-centered design with clean, efficient code to solve real-world challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
            <img 
  src={aboutImg} 
  alt="Professional portrait" 
  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
/>           <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Soundhar</h3>
            <p className="text-gray-700 dark:text-gray-300">
             I’m a passionate Python full stack developer with a keen eye for UI/UX design and a drive to build intuitive, high-performing web applications. I combine aesthetic design principles with solid backend logic to deliver products that are both visually appealing and functionally robust. My approach bridges the gap between user experience and technical execution, ensuring seamless, efficient, and engaging digital solutions.


            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <User size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Name</div>
                  <div className="font-medium">Soundhar N</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <Calendar size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Experience</div>
                  <div className="font-medium">2+ Years</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
                  <div className="font-medium">Chennai, porur</div>
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
