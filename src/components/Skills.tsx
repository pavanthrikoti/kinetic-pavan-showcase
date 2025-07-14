
import React from 'react';
import { motion } from 'framer-motion';

interface SkillsProps {
  className?: string;
}

const Skills: React.FC<SkillsProps> = ({ className }) => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
        { name: 'TypeScript', level: 85, color: 'bg-blue-500' },
        { name: 'Python', level: 80, color: 'bg-green-500' },
        { name: 'Java', level: 75, color: 'bg-red-500' },
        { name: 'C++', level: 70, color: 'bg-purple-500' },
      ]
    },
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React', level: 90, color: 'bg-blue-400' },
        { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
        { name: 'Tailwind CSS', level: 85, color: 'bg-teal-500' },
        { name: 'Next.js', level: 80, color: 'bg-gray-700' },
        { name: 'Vue.js', level: 70, color: 'bg-green-400' },
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: 85, color: 'bg-green-600' },
        { name: 'Express.js', level: 80, color: 'bg-gray-600' },
        { name: 'MongoDB', level: 75, color: 'bg-green-500' },
        { name: 'PostgreSQL', level: 70, color: 'bg-blue-600' },
        { name: 'Firebase', level: 75, color: 'bg-yellow-600' },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 90, color: 'bg-gray-800' },
        { name: 'Docker', level: 65, color: 'bg-blue-600' },
        { name: 'AWS', level: 60, color: 'bg-orange-600' },
        { name: 'Figma', level: 75, color: 'bg-purple-600' },
        { name: 'Linux', level: 70, color: 'bg-yellow-500' },
      ]
    }
  ];

  return (
    <section className={`${className || ''} py-6 px-6 bg-gray-800 overflow-y-auto`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I've worked with throughout my learning journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-gray-900 rounded-xl p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-primary font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
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
