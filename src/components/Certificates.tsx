
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, ExternalLink } from 'lucide-react';

interface CertificatesProps {
  className?: string;
}

const Certificates: React.FC<CertificatesProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates = [
    {
      title: 'Full Stack Web Development',
      issuer: 'Coursera - Meta',
      date: '2024',
      description: 'Comprehensive course covering React, Node.js, databases, and deployment',
      image: '/api/placeholder/400/300',
      credentialUrl: '#'
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: '2023',
      description: 'Advanced JavaScript concepts, algorithms, and data structure implementations',
      image: '/api/placeholder/400/300',
      credentialUrl: '#'
    },
    {
      title: 'Python for Data Science',
      issuer: 'IBM - Coursera',
      date: '2023',
      description: 'Python programming fundamentals with focus on data analysis and visualization',
      image: '/api/placeholder/400/300',
      credentialUrl: '#'
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta - Coursera',
      date: '2024',
      description: 'Advanced React concepts including hooks, context, and state management',
      image: '/api/placeholder/400/300',
      credentialUrl: '#'
    },
    {
      title: 'Database Design and Management',
      issuer: 'University of California - Coursera',
      date: '2023',
      description: 'Database design principles, SQL optimization, and NoSQL databases',
      image: '/api/placeholder/400/300',
      credentialUrl: '#'
    }
  ];

  const nextCertificate = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <section className={`${className || ''} py-6 px-6 bg-gray-800 overflow-y-auto`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certificates</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Professional certifications and courses that have enhanced my skills
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Certificate Display */}
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900 rounded-2xl overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-80 bg-gradient-to-br from-primary/20 to-green-400/20 flex items-center justify-center">
                      <Award className="text-primary" size={80} />
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {certificates[currentIndex].title}
                      </h3>
                      <p className="text-primary font-semibold text-lg">
                        {certificates[currentIndex].issuer}
                      </p>
                      <p className="text-gray-400">
                        {certificates[currentIndex].date}
                      </p>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {certificates[currentIndex].description}
                    </p>
                    <motion.a
                      href={certificates[currentIndex].credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-green-600 text-black px-6 py-3 rounded-lg font-medium transition-colors w-fit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>View Credential</span>
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevCertificate}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextCertificate}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Certificate Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>

          {/* Certificate Thumbnails */}
          <div className="flex justify-center mt-8 gap-4 overflow-x-auto pb-4">
            {certificates.map((cert, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 p-4 rounded-lg transition-all ${
                  index === currentIndex 
                    ? 'bg-primary/20 border-2 border-primary' 
                    : 'bg-gray-700 hover:bg-gray-600 border-2 border-transparent'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-center">
                  <Award 
                    className={index === currentIndex ? 'text-primary' : 'text-gray-400'} 
                    size={24} 
                  />
                  <p className={`text-sm mt-2 ${
                    index === currentIndex ? 'text-primary' : 'text-gray-400'
                  }`}>
                    {cert.title.split(' ').slice(0, 2).join(' ')}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
