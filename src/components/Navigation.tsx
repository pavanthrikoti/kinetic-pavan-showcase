
import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Code, Award, FileText, Mail, Menu } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isMobile: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange, isMobile }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Menu },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'certificates', label: 'Certificates', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  if (isMobile) {
    return (
      <motion.nav 
        className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-40 px-2 py-2"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-around items-center max-w-sm mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                  isActive ? 'text-primary' : 'text-gray-400'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={20} />
                <span className="text-xs mt-1">{item.label}</span>
                {isActive && (
                  <motion.div
                    className="w-1 h-1 bg-primary rounded-full mt-1"
                    layoutId="activeIndicator"
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </motion.nav>
    );
  }

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 bg-card/90 backdrop-blur-md border-b border-border z-40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold text-primary"
            whileHover={{ scale: 1.05 }}
          >
            Pavan Thrikoti
          </motion.h1>
          <div className="flex space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`relative text-sm font-medium transition-colors ${
                    isActive ? 'text-primary' : 'text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      layoutId="desktopActiveIndicator"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
