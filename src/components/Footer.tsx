
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-gray-300">Made with</span>
            <Heart className="text-red-500 fill-current" size={16} />
            <span className="text-gray-300">and</span>
            <Coffee className="text-yellow-600" size={16} />
            <span className="text-gray-300">by</span>
            <Code className="text-primary" size={16} />
          </div>
          
          <p className="text-gray-300 mb-4">
            © 2024 Pavan Thrikoti. All rights reserved.
          </p>
          
          <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
            <span>Built with React & TypeScript</span>
            <span>•</span>
            <span>Styled with Tailwind CSS</span>
            <span>•</span>
            <span>Animated with Framer Motion</span>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              "The only way to do great work is to love what you do." - Steve Jobs
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
