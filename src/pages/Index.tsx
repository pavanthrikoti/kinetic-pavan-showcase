
import React, { useState, useCallback, useMemo } from 'react';
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

const SECTIONS = ['home', 'about', 'projects', 'achievements', 'contact'] as const;

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<string>('home');
  const isMobile = useIsMobile();

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleSectionChange = useCallback((section: string) => {
    setActiveSection(section);
  }, []);

  const renderActiveSection = useMemo(() => {
    switch (activeSection) {
      case 'home':
        return <Hero />;
      case 'about':
        return <About />;
      case 'projects':
        return (
          <div className="w-full min-h-full overflow-y-auto custom-scroll">
            <Projects />
            <Skills />
          </div>
        );
      case 'achievements':
        return (
          <div className="w-full min-h-full overflow-y-auto custom-scroll">
            <Achievements />
            <Certificates />
          </div>
        );
      case 'contact':
        return (
          <div className="w-full min-h-full overflow-y-auto custom-scroll">
            <Contact />
            <Footer />
          </div>
        );
      default:
        return <Hero />;
    }
  }, [activeSection]);

  const mainContent = useMemo(() => (
    <div className="w-full h-screen overflow-hidden">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange}
        isMobile={isMobile}
      />
      
      <main className={`w-full ${isMobile ? 'pt-0 pb-20' : 'pt-20'} h-full overflow-hidden`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full h-full"
          >
            {renderActiveSection}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  ), [activeSection, handleSectionChange, isMobile, renderActiveSection]);

  return (
    <div className="w-full h-screen bg-background text-foreground antialiased overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full overflow-hidden"
          >
            {mainContent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
