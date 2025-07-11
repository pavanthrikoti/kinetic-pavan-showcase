
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Code, Target } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'LeetCode Problem Solver',
      description: 'Solved 200+ coding problems on LeetCode with focus on algorithms and data structures',
      icon: Code,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/20',
      stats: '200+ Problems'
    },
    {
      title: 'GeeksforGeeks Contributor',
      description: 'Active contributor with consistent problem-solving and article contributions',
      icon: Star,
      color: 'text-green-400',
      bgColor: 'bg-green-400/20',
      stats: 'Top Contributor'
    },
    {
      title: 'HackerRank Achiever',
      description: 'Earned multiple badges and certificates in programming challenges',
      icon: Trophy,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/20',
      stats: '5-Star Rating'
    },
    {
      title: 'Open Source Contributor',
      description: 'Contributed to various open-source projects on GitHub',
      icon: Award,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/20',
      stats: '50+ Contributions'
    },
    {
      title: 'Full Stack Projects',
      description: 'Built and deployed multiple full-stack applications',
      icon: Target,
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/20',
      stats: '10+ Projects'
    },
    {
      title: 'Coding Competition Participant',
      description: 'Regular participant in coding contests and hackathons',
      icon: Trophy,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-400/20',
      stats: 'Multiple Contests'
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Milestones and accomplishments in my coding journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-8 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className={`w-16 h-16 ${achievement.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={achievement.color} size={32} />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {achievement.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className={`${achievement.color} font-bold text-lg`}>
                    {achievement.stats}
                  </span>
                  <div className={`px-3 py-1 ${achievement.bgColor} ${achievement.color} rounded-full text-sm font-medium`}>
                    Achievement
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/20 to-green-400/20 rounded-2xl p-8 backdrop-blur-sm border border-primary/30">
            <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
            <p className="text-gray-300 text-lg mb-6">
              Always striving to learn new technologies and improve my skills through hands-on projects and challenges.
            </p>
            <div className="flex justify-center gap-8 text-center">
              <div className="text-primary">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-gray-300">Hours Coded</div>
              </div>
              <div className="text-primary">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-gray-300">Technologies</div>
              </div>
              <div className="text-primary">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-gray-300">Projects</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
