
import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 90, color: 'bg-primary' },
        { name: 'TypeScript', level: 85, color: 'bg-secondary' },
        { name: 'Python', level: 80, color: 'bg-accent' },
        { name: 'Java', level: 75, color: 'bg-muted' },
        { name: 'C++', level: 70, color: 'bg-primary/80' },
      ]
    },
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React', level: 90, color: 'bg-primary' },
        { name: 'HTML/CSS', level: 95, color: 'bg-secondary' },
        { name: 'Tailwind CSS', level: 85, color: 'bg-accent' },
        { name: 'Next.js', level: 80, color: 'bg-muted' },
        { name: 'Vue.js', level: 70, color: 'bg-primary/60' },
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: 85, color: 'bg-primary' },
        { name: 'Express.js', level: 80, color: 'bg-secondary' },
        { name: 'MongoDB', level: 75, color: 'bg-accent' },
        { name: 'PostgreSQL', level: 70, color: 'bg-muted' },
        { name: 'Firebase', level: 75, color: 'bg-primary/70' },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 90, color: 'bg-primary' },
        { name: 'Docker', level: 65, color: 'bg-secondary' },
        { name: 'AWS', level: 60, color: 'bg-accent' },
        { name: 'Figma', level: 75, color: 'bg-muted' },
        { name: 'Linux', level: 70, color: 'bg-primary/50' },
      ]
    }
  ];

  return (
    <section className="min-h-screen py-12 md:py-20 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Technologies and tools I've worked with throughout my learning journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-card rounded-xl p-6 md:p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border border-border"
            >
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8 text-center">
                {category.title}
              </h3>
              <div className="space-y-4 md:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-medium text-sm md:text-base">{skill.name}</span>
                      <span className="text-primary font-bold text-sm md:text-base">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 md:h-3 overflow-hidden">
                      <motion.div
                        className={`h-full ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
