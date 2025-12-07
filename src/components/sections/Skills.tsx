import React, { useRef } from 'react';
import { skills } from '../../data/skills';
import { motion, useInView } from 'framer-motion';

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="section bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A comprehensive overview of my technical expertise and tools I use to build digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Technical Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-primary-500 pl-4">
              Technical Skills
            </h3>

            {skills.technical.map((skill) => (
              <motion.div key={skill.name} variants={itemVariants} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                    {skill.name}
                  </h4>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-2.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Design & Soft Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-secondary-500 pl-4">
              Design & Tools
            </h3>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12"
            >
              {skills.design.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-100 dark:border-gray-700/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-white dark:bg-gray-700 rounded-full shadow-sm p-2">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200">
                    {skill.name}
                  </h4>
                </motion.div>
              ))}
            </motion.div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-4">
              Soft Skills
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.soft.map((skill) => (
                <motion.span
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
