
import React, { useEffect, useState, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Download, ExternalLink, Code, Briefcase } from 'lucide-react';

const Hero: React.FC = memo(() => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const roles = [
    "React Developer",
    "Full Stack Web Developer", 
    "Software Engineer",
    "BTech CSE Student",
    "Cloud Developer",
    "AI Tools Expert",
    "Prompt Engineer"
  ];

  const currentRole = roles[currentRoleIndex];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (isTyping) {
      if (displayedText.length < currentRole.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isTyping, currentRole, roles.length]);

  const handleResumeDownload = useCallback(() => {
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual resume URL
    link.download = 'Pavan_Thrikoti_Resume.pdf';
    link.click();
    console.log('Resume download initiated');
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg px-4 relative overflow-hidden" id="home">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Profile Avatar */}
          <motion.div 
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-green-400 p-1 glow-effect"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format"
                alt="Pavan Thrikoti"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
          
          {/* Name */}
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm <span className="text-primary">Pavan Thrikoti</span>
          </motion.h1>
          
          {/* Typewriter Role */}
          <div className="h-16 mb-6 flex items-center justify-center">
            <motion.h2 
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium min-h-[3rem] flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Code className="mr-3 text-primary" size={28} />
              <span className="relative">
                {displayedText}
                <span className="border-r-2 border-primary animate-pulse ml-1">|</span>
              </span>
            </motion.h2>
          </div>
          
          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Passionate about coding, problem-solving, and building innovative solutions that make a difference in the digital world.
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.a
            href="https://github.com/pavanthrikoti"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 glass-effect hover:bg-secondary/80 px-6 py-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary card-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Visit GitHub profile"
          >
            <Github size={20} />
            <span>GitHub</span>
            <ExternalLink size={16} className="opacity-60" />
          </motion.a>
          
          <motion.a
            href="https://linkedin.com/in/pavanthrikoti"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary card-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Visit LinkedIn profile"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
            <ExternalLink size={16} className="opacity-60" />
          </motion.a>
          
          <motion.button
            onClick={handleResumeDownload}
            className="flex items-center gap-2 btn-primary card-hover focus:ring-2 focus:ring-primary focus:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Download resume"
          >
            <Download size={20} />
            <span>Resume</span>
          </motion.button>

          <motion.a
            href="https://leetcode.com/u/pavanthrikoti/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 glass-effect hover:bg-secondary/80 px-6 py-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary card-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Visit LeetCode profile"
          >
            <Briefcase size={20} />
            <span>LeetCode</span>
            <ExternalLink size={16} className="opacity-60" />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <motion.div 
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div 
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
