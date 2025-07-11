
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
    if (activeSection === section) return;
    
    setActiveSection(section);
    
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [activeSection]);

  // Improved scroll detection
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;
          
          let currentSection = 'home';
          let maxVisibility = 0;
          
          SECTIONS.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
              const visibility = Math.max(0, visibleHeight) / windowHeight;
              
              if (visibility > maxVisibility && visibility > 0.4) {
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Prevent horizontal scrolling
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    
    return () => {
      document.body.style.overflowX = 'auto';
      document.documentElement.style.overflowX = 'auto';
    };
  }, []);

  const mainContent = useMemo(() => (
    <div className="w-full overflow-x-hidden">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange}
        isMobile={isMobile}
      />
      
      <main className={`${isMobile ? 'pb-20' : 'pt-16'} w-full`}>
        <section id="home" className="min-h-screen w-full">
          <Hero />
        </section>
        
        <section id="about" className="min-h-screen w-full">
          <About />
        </section>
        
        <section id="projects" className="min-h-screen w-full">
          <Projects />
        </section>
        
        <section id="skills" className="min-h-screen w-full">
          <Skills />
        </section>
        
        <section id="achievements" className="min-h-screen w-full">
          <Achievements />
        </section>
        
        <section id="certificates" className="min-h-screen w-full">
          <Certificates />
        </section>
        
        <section id="contact" className="min-h-screen w-full">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  ), [activeSection, handleSectionChange, isMobile]);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased w-full overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {mainContent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
