
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Pavan Thrikoti, a BTech CSE Student";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg px-6">
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
          >
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl font-bold text-primary">
              PT
            </div>
          </motion.div>
          
          <div className="h-16 mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              {displayText}
              <span className="border-r-2 border-primary animate-pulse">|</span>
            </h1>
          </div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8"
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
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            <span>GitHub</span>
          </motion.a>
          
          <motion.a
            href="https://linkedin.com/in/pavanthrikoti"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </motion.a>
          
          <motion.button
            className="flex items-center gap-2 bg-primary hover:bg-green-600 text-black px-6 py-3 rounded-full transition-colors font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            <span>Resume</span>
          </motion.button>
        </motion.div>

        <motion.div 
          className="animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <div className="w-8 h-8 border-2 border-primary rounded-full mx-auto flex items-center justify-center">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
