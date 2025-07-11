
import React, { useEffect, useState, memo } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = memo(({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationId: number;
    const startTime = Date.now();
    const duration = 2000; // 2 seconds
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(newProgress);
      
      if (newProgress >= 100) {
        setTimeout(onComplete, 300);
      } else {
        animationId = requestAnimationFrame(updateProgress);
      }
    };

    animationId = requestAnimationFrame(updateProgress);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center gradient-bg"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="text-center max-w-md mx-auto px-6">
        <motion.div
          className="w-20 h-20 border-4 border-muted border-t-primary rounded-full mx-auto mb-6"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        />
        
        <motion.h2 
          className="text-2xl font-bold text-primary mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Pavan Thrikoti
        </motion.h2>
        
        <motion.p 
          className="text-muted-foreground mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Loading Portfolio...
        </motion.p>
        
        <div className="w-48 h-2 bg-muted rounded-full mx-auto overflow-hidden">
          <motion.div 
            className="h-full bg-primary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        
        <p className="text-sm text-muted-foreground mt-3" aria-live="polite">
          {Math.round(progress)}%
        </p>
      </div>
    </motion.div>
  );
});

Preloader.displayName = 'Preloader';

export default Preloader;
