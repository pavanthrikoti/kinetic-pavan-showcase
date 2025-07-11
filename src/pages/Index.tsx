
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';
import Preloader from '../components/Preloader';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useIsMobile();

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    
    if (isMobile) {
      // For mobile, scroll to section
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For desktop, scroll to section
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Handle scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'achievements', 'certificates', 'contact'];
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
          
          if (isVisible && activeSection !== section) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence>
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navigation 
            activeSection={activeSection} 
            onSectionChange={handleSectionChange}
            isMobile={isMobile}
          />
          
          <main className={isMobile ? 'pb-20' : 'pt-16'}>
            <div id="home">
              <Hero />
            </div>
            
            <div id="about">
              <About />
            </div>
            
            <div id="projects">
              <Projects />
            </div>
            
            <div id="skills">
              <Skills />
            </div>
            
            <div id="achievements">
              <Achievements />
            </div>
            
            <div id="certificates">
              <Certificates />
            </div>
            
            <div id="contact">
              <Contact />
            </div>
          </main>
          
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
