
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

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  const mainContent = useMemo(() => (
    <div className="w-full min-h-screen">
      <Navigation isMobile={isMobile} />
      
      <main className={`w-full ${isMobile ? 'pb-20' : ''}`}>
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        
        <section id="about" className="min-h-screen">
          <About />
        </section>
        
        <section id="projects" className="min-h-screen">
          <Projects />
          <Skills />
        </section>
        
        <section id="achievements" className="min-h-screen">
          <Achievements />
          <Certificates />
        </section>
        
        <section id="contact" className="min-h-screen">
          <Contact />
          <Footer />
        </section>
      </main>
    </div>
  ), [isMobile]);

  return (
    <div className="w-full min-h-screen bg-background text-foreground antialiased">
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
