
import React, { memo, useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Code, Award, Mail } from 'lucide-react';

interface NavigationProps {
  isMobile: boolean;
}

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Work', icon: Code },
  { id: 'achievements', label: 'Awards', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
] as const;

const Navigation: React.FC<NavigationProps> = memo(({ isMobile }) => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'achievements', 'contact'];
      const scrollY = window.scrollY;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isMobile) {
    return (
      <motion.nav 
        className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md border-t border-border z-50 px-2 py-2 safe-area-pb h-20"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex justify-around items-center max-w-md mx-auto h-full">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary min-h-[60px] ${
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Navigate to ${item.label}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon size={20} aria-hidden="true" />
                <span className="text-xs mt-1 font-medium">{item.label}</span>
                {isActive && (
                  <motion.div
                    className="w-1 h-1 bg-primary rounded-full mt-1"
                    layoutId="activeIndicator"
                    aria-hidden="true"
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
      className="fixed top-0 left-0 right-0 bg-card/90 backdrop-blur-md border-b border-border z-50 h-20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex justify-between items-center h-full">
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
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-3 py-2 ${
                    isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  aria-label={`Navigate to ${item.label}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      layoutId="desktopActiveIndicator"
                      aria-hidden="true"
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
});

Navigation.displayName = 'Navigation';

export default Navigation;
