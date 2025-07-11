
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Database, Globe } from 'lucide-react';

const About: React.FC = () => {
  const profiles = [
    { name: 'GitHub', url: 'https://github.com/pavanthrikoti', icon: Code, color: 'text-gray-400' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/pavanthrikoti/', icon: Code, color: 'text-yellow-400' },
    { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/user/pavan_thrikoti2415/', icon: Database, color: 'text-green-400' },
    { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/pavanthrikoti', icon: Globe, color: 'text-blue-400' },
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-full max-w-sm mx-auto bg-gradient-to-br from-primary/20 to-green-400/20 rounded-2xl p-8 backdrop-blur-sm border border-primary/30">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary to-green-400 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-black">
                    PT
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Pavan Thrikoti</h3>
                  <p className="text-primary font-medium">BTech CSE Student</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Hello! I'm Pavan</h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I'm a passionate BTech Computer Science Engineering student with a strong foundation in 
              programming and problem-solving. I love exploring new technologies, building innovative 
              projects, and constantly challenging myself with competitive programming.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              My journey in computer science has led me to develop expertise in various programming 
              languages and frameworks. I'm always eager to learn and apply new concepts to real-world problems.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {profiles.map((profile, index) => {
                const Icon = profile.icon;
                return (
                  <motion.a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Icon className={`${profile.color} group-hover:scale-110 transition-transform`} size={20} />
                    <span className="text-white font-medium">{profile.name}</span>
                    <ExternalLink className="text-gray-400 ml-auto group-hover:text-primary transition-colors" size={16} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
