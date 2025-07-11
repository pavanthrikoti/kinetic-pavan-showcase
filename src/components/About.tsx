
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Heart, Target, Users, Rocket } from 'lucide-react';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  const passions = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive and interactive web applications',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Finding creative solutions to complex challenges',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10'
    },
    {
      icon: Heart,
      title: 'User Experience',
      description: 'Creating intuitive and delightful user interfaces',
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/10'
    },
    {
      icon: Target,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and best practices',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams and contributing to open source',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10'
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Pushing boundaries and building cutting-edge solutions',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10'
    }
  ];

  return (
    <section className={`relative bg-gradient-to-br from-background via-background to-muted/30 ${className}`}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center overflow-y-auto custom-scroll">
        <div className="w-full max-w-7xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              I'm Pavan Thrikoti, a passionate BTech Computer Science Engineering student with a love for creating 
              innovative web solutions and exploring the latest technologies in software development.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image and Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <div className="relative inline-block mb-8">
                <div className="w-64 h-64 mx-auto lg:mx-0 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Pavan Thrikoti"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary/20 backdrop-blur-sm rounded-xl p-4 border border-primary/30">
                  <Code className="text-primary" size={24} />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Computer Science Student & Developer
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing my BTech in Computer Science Engineering, I'm passionate about 
                  full-stack web development, cloud technologies, and AI-powered solutions. I enjoy 
                  turning complex problems into simple, beautiful, and intuitive solutions.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">2+</div>
                    <div className="text-sm text-muted-foreground">Years Learning</div>
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">Projects Built</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Passions Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-foreground text-center lg:text-left mb-8">
                What Drives Me
              </h3>
              <div className="grid gap-4">
                {passions.map((passion, index) => {
                  const Icon = passion.icon;
                  return (
                    <motion.div
                      key={passion.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 ${passion.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                          <Icon className={passion.color} size={24} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {passion.title}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {passion.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary/10 to-green-400/10 rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">My Journey</h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto">
                From learning my first programming language to building full-stack applications, 
                my journey in tech has been filled with curiosity, challenges, and growth. I believe 
                in the power of technology to solve real-world problems and create meaningful impact.
              </p>
              <div className="flex justify-center gap-8 mt-8">
                <div className="text-primary">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-muted-foreground">Technologies</div>
                </div>
                <div className="text-primary">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-muted-foreground">Hours Coded</div>
                </div>
                <div className="text-primary">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-muted-foreground">Problems Solved</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
