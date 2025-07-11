
import React, { useState, useEffect, useCallback, useMemo } from 'react';
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

const SECTIONS = ['home', 'about', 'projects', 'skills', 'achievements', 'certificates', 'contact'] as const;

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<string>('home');
  const isMobile = useIsMobile();

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleSectionChange = useCallback((section: string) => {
    if (activeSection === section) return; // Prevent unnecessary operations
    
    setActiveSection(section);
    
    const element = document.getElementById(section);
    if (element) {
      // Use more performant scrolling
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [activeSection]);

  // Optimized scroll detection with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;
          const threshold = windowHeight * 0.3; // 30% of viewport
          
          // Find the section that's most in view
          let currentSection = 'home';
          let maxVisibility = 0;
          
          SECTIONS.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
              const visibility = Math.max(0, visibleHeight) / windowHeight;
              
              if (visibility > maxVisibility && visibility > 0.3) {
                maxVisibility = visibility;
                currentSection = section;
              }
            }
          });
          
          if (currentSection !== activeSection) {
            setActiveSection(currentSection);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const mainContent = useMemo(() => (
    <>
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange}
        isMobile={isMobile}
      />
      
      <main className={isMobile ? 'pb-20' : 'pt-16'}>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="achievements">
          <Achievements />
        </section>
        
        <section id="certificates">
          <Certificates />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </>
  ), [activeSection, handleSectionChange, isMobile]);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      </AnimatePresence>

      {!isLoading && mainContent}
    </div>
  );
};

export default Index;
