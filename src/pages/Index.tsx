
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

const SECTIONS = ['home', 'about', 'projects', 'skills', 'achievements', 'certificates', 'contact'] as const;

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
    const sectionProps = {
      className: `w-full ${isMobile ? 'h-[calc(100vh-80px)]' : 'h-[calc(100vh-80px)]'} overflow-hidden`
    };

    switch (activeSection) {
      case 'home':
        return <Hero {...sectionProps} />;
      case 'about':
        return <About {...sectionProps} />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'achievements':
        return <Achievements />;
      case 'certificates':
        return <Certificates />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero {...sectionProps} />;
    }
  }, [activeSection, isMobile]);

  const mainContent = useMemo(() => (
    <div className="w-full h-screen overflow-hidden">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange}
        isMobile={isMobile}
      />
      
      <main className={`w-full ${isMobile ? 'mt-0' : 'mt-20'} ${isMobile ? 'h-[calc(100vh-80px)]' : 'h-[calc(100vh-80px)]'} overflow-hidden`}>
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
      
      {activeSection === 'contact' && (
        <div className="absolute bottom-0 left-0 right-0">
          <Footer />
        </div>
      )}
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
