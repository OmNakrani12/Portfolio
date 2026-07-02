import React, { useEffect } from 'react';
import Lenis from 'lenis';

// Special effects components
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';

// Layout sections
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Statistics from './components/Statistics';
import CodingProfiles from './components/CodingProfiles';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Coordinate hash navigation links with Lenis
    const handleAnchorClicks = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        const id = target.getAttribute('href');
        if (id === '#') return;
        
        const element = document.querySelector(id);
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element, { offset: -70 }); // offset for sticky navbar
        }
      }
    };

    document.addEventListener('click', handleAnchorClicks);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClicks);
    };
  }, []);

  return (
    <div className="app-shell">
      {/* Visual background layers */}
      <ParticleBackground />
      <CustomCursor />

      {/* Main interface layers */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Statistics />
      <CodingProfiles />
      <Experience />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
