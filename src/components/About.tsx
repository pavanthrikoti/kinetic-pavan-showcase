
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Brain, Award, ExternalLink } from 'lucide-react';

const About: React.FC = memo(() => {
  const skills = [
    { name: 'Frontend Development', icon: Code, level: 90 },
    { name: 'Backend Development', icon: Database, level: 85 },
    { name: 'Full Stack', icon: Globe, level: 88 },
    { name: 'Problem Solving', icon: Brain, level: 92 },
  ];

  const platforms = [
    {
      name: 'GitHub',
      url: 'https://github.com/pavanthrikoti',
      icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      description: 'Open source contributions'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/pavanthrikoti/',
      icon: 'https://leetcode.com/static/images/LeetCode_logo_rvs.png',
      description: 'Competitive programming'
    },
    {
      name: 'GeeksforGeeks',
      url: 'https://www.geeksforgeeks.org/user/pavan_thrikoti2415/',
      icon: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png',
      description: 'Technical articles & solutions'
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/profile/pavanthrikoti',
      icon: 'https://hrcdn.net/fcore/assets/brand/typemark_60x200-7435b42d3d.svg',
      description: 'Coding challenges'
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-4" id="about">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate BTech CSE student with a drive for innovation and excellence in software development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&auto=format"
                alt="Coding workspace"
                className="rounded-2xl shadow-2xl w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-2xl font-semibold text-foreground mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                As a dedicated BTech Computer Science Engineering student, I'm passionate about leveraging technology 
                to solve real-world problems. My journey in software development has been driven by curiosity and 
                a constant desire to learn and grow in this ever-evolving field.
              </p>
            </div>
          </motion.div>

          {/* Right side - Skills and platforms */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Skills */}
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Award className="text-primary" size={24} />
                Core Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <skill.icon className="text-primary" size={20} />
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-green-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Platforms */}
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Find Me On</h3>
              <div className="grid grid-cols-2 gap-4">
                {platforms.map((platform, index) => (
                  <motion.a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-secondary/50 hover:bg-secondary/80 p-4 rounded-xl transition-all duration-300 card-hover group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <img 
                        src={platform.icon} 
                        alt={platform.name}
                        className="w-6 h-6 object-contain"
                      />
                      <span className="font-medium text-foreground">{platform.name}</span>
                      <ExternalLink 
                        size={14} 
                        className="text-muted-foreground group-hover:text-primary transition-colors ml-auto"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">{platform.description}</p>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
