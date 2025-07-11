
import React, { useEffect, useState, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Download, ExternalLink } from 'lucide-react';

const Hero: React.FC = memo(() => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Pavan Thrikoti, a BTech CSE Student";

  useEffect(() => {
    let index = 0;
    let animationId: number;

    const typeText = () => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
        animationId = requestAnimationFrame(() => {
          setTimeout(typeText, 80);
        });
      }
    };

    const timeoutId = setTimeout(typeText, 500);

    return () => {
      clearTimeout(timeoutId);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const handleResumeDownload = useCallback(() => {
    // Add analytics tracking here if needed
    console.log('Resume download initiated');
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg px-6" id="hero">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div 
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-green-400 p-1 glow-effect"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold text-primary">
              PT
            </div>
          </motion.div>
          
          <div className="h-16 mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground min-h-[4rem] flex items-center justify-center">
              <span aria-live="polite">
                {displayText}
                <span className="border-r-2 border-primary animate-pulse ml-1" aria-hidden="true">|</span>
              </span>
            </h1>
          </div>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Passionate about coding, problem-solving, and building innovative solutions
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <motion.a
            href="https://github.com/pavanthrikoti"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 px-6 py-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Visit GitHub profile (opens in new tab)"
          >
            <Github size={20} aria-hidden="true" />
            <span>GitHub</span>
            <ExternalLink size={16} className="opacity-60" aria-hidden="true" />
          </motion.a>
          
          <motion.a
            href="https://linkedin.com/in/pavanthrikoti"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Visit LinkedIn profile (opens in new tab)"
          >
            <Linkedin size={20} aria-hidden="true" />
            <span>LinkedIn</span>
            <ExternalLink size={16} className="opacity-60" aria-hidden="true" />
          </motion.a>
          
          <motion.button
            onClick={handleResumeDownload}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Download resume"
          >
            <Download size={20} aria-hidden="true" />
            <span>Resume</span>
          </motion.button>
        </motion.div>

        <motion.div 
          className="animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          aria-hidden="true"
        >
          <div className="w-8 h-8 border-2 border-primary rounded-full mx-auto flex items-center justify-center">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
