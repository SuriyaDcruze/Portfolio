import React, { useRef } from 'react';
import { User, Calendar, MapPin, Briefcase, ArrowRight } from 'lucide-react';
import aboutImg from "../../assets/about-1.jpeg";
import { motion, useInView } from 'framer-motion';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="section relative bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image Column */}
          <motion.div variants={itemVariants} className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl z-10">
              <img
                src={aboutImg}
                alt="Soundhar N - Professional portrait"
                className="object-cover w-full h-full transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-primary-200 dark:border-primary-800 rounded-2xl -z-10 hidden md:block"></div>
          </motion.div>

          {/* Content Column */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2 space-y-8">
            <div>
              <motion.div variants={itemVariants} className="flex items-center space-x-2 mb-4">
                <span className="h-px w-8 bg-primary-600 dark:bg-primary-400"></span>
                <span className="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                  About Me
                </span>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Crafting digital experiences with <span className="text-primary-600 dark:text-primary-400">passion</span>.
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate Python Full Stack Developer with a keen eye for UI/UX design. With 4+ years of experience, I combine aesthetic design principles with robust backend logic and AI integrations to build intuitive, high-performing web applications.
              </motion.p>
            </div>

            <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: User, label: "Name", value: "Soundhar N" },
                { icon: Calendar, label: "Experience", value: "4+ Years" },
                { icon: MapPin, label: "Location", value: "Chennai, Porur" },
                { icon: Briefcase, label: "Status", value: "Currently Employed" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">{item.label}</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <a href="#contact" className="btn btn-primary group">
                Let's Work Together
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
