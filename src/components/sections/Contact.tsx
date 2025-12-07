import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // 🔴 IMPORTANT: Replace this with your Google Apps Script URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwPw7gWGaNOg3kxpG93sei1CLYCSgZcO2COZm-W1qsfsty6dNTDEV88Xaxc6kSsQ6tT/exec";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');



    try {
      // Use FormData for Google Apps Script
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('subject', formData.subject);
      data.append('message', formData.message);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // standard for Google Apps Script post
        body: data,
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);

    } catch (err) {
      console.error("Error submitting form:", err);
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                I'm currently available for freelance work and full-time opportunities.
                If you have a project that needs some creative touch, I'd love to hear about it.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Location", value: "Chennai, Porur", sub: "Tamil Nadu, India" },
                { icon: Mail, title: "Email", value: "suryananthakumar0007@gmail.com", sub: "Send me a message anytime!" },
                { icon: Phone, title: "Phone", value: "+91 95977 54821", sub: "Mon-Fri from 9am to 6pm" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="font-medium text-gray-900 dark:text-gray-200 mt-1">
                      {item.value}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {item.sub}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700/50"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 transition-shadow"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 transition-shadow"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 transition-shadow"
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 transition-shadow resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              {error && (
                <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`btn btn-primary w-full py-4 text-lg font-bold shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transform hover:-translate-y-1 transition-all duration-300 ${(isSubmitting || submitted) ? 'cursor-not-allowed opacity-90' : ''
                  }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </span>
                ) : submitted ? (
                  <span className="flex items-center justify-center text-green-100">
                    Message Sent Successfully!
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send size={20} className="mr-2" /> Send Message
                  </span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
