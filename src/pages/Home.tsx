import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;