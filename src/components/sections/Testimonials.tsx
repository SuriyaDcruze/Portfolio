import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };
  
  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    // Removed IntersectionObserver animation code

    // Just keep auto-advance logic
    timeoutRef.current = setTimeout(next, 6000);
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current]);

  return (
    <section id="testimonials" className="section bg-gray-50 dark:bg-gray-800 py-24">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h6 className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2">
            Testimonials
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What People Say
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Feedback from  colleagues about my work and collaboration.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-10 left-10 text-primary-300 dark:text-primary-600 opacity-50">
            <Quote size={60} />
          </div>
          
          <div className="relative z-10 bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 md:p-12">
            <div className="min-h-[320px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute w-full ${index === current ? 'z-10' : 'z-0 hidden'}`}
                >
                  <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl italic mb-8">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {testimonial.title}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === current
                        ? 'bg-primary-600 w-6'
                        : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={next}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
