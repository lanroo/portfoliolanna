'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import * as SimpleIcons from 'simple-icons';

interface TechItem {
  name: string;
  icon: string;
  color: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  lightBg?: boolean;
}

const techStack: TechItem[] = [
  // Frontend
  { name: 'React', icon: 'siReact', color: '#61DAFB', category: 'frontend' },
  { name: 'Vue.js', icon: 'siVuedotjs', color: '#4FC08D', category: 'frontend' },
  { name: 'TypeScript', icon: 'siTypescript', color: '#3178C6', category: 'frontend' },
  { name: 'JavaScript', icon: 'siJavascript', color: '#F7DF1E', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'siTailwindcss', color: '#38B2AC', category: 'frontend' },
  { name: 'React Native', icon: 'siReact', color: '#61DAFB', category: 'frontend' },
  { name: 'Redux', icon: 'siRedux', color: '#764ABC', category: 'frontend' },
  { name: 'Bootstrap', icon: 'siBootstrap', color: '#7952B3', category: 'frontend' },
  { name: 'SASS', icon: 'siSass', color: '#CC6699', category: 'frontend' },
  { name: 'Storybook', icon: 'siStorybook', color: '#FF4785', category: 'frontend' },
  
  // Backend
  { name: 'Python', icon: 'siPython', color: '#3776AB', category: 'backend' },
  { name: 'Flask', icon: 'siFlask', color: '#ffffff', category: 'backend', lightBg: true },
  { name: 'PHP', icon: 'siPhp', color: '#777BB4', category: 'backend' },
  { name: 'Express', icon: 'siExpress', color: '#ffffff', category: 'backend', lightBg: true },
  { name: 'Next.js', icon: 'siNextdotjs', color: '#ffffff', category: 'backend', lightBg: true },
  { name: 'Pytest', icon: 'siPython', color: '#0A9EDC', category: 'backend' },
  { name: 'WebSocket', icon: 'siSocketdotio', color: '#ffffff', category: 'backend', lightBg: true },
  { name: 'JWT', icon: 'siJsonwebtokens', color: '#ffffff', category: 'backend', lightBg: true },
  { name: 'OAuth', icon: 'siAuth0', color: '#EB5424', category: 'backend' },
  
  // Database
  { name: 'PostgreSQL', icon: 'siPostgresql', color: '#336791', category: 'database' },
  { name: 'SQLite', icon: 'siSqlite', color: '#003B57', category: 'database' },
  { name: 'Prisma', icon: 'siPrisma', color: '#2D3748', category: 'database' },
  
  // Tools & Infrastructure
  { name: 'Docker', icon: 'siDocker', color: '#2496ED', category: 'tools' },
  { name: 'Kubernetes', icon: 'siKubernetes', color: '#326CE5', category: 'tools' },
  { name: 'AWS', icon: 'siAmazonaws', color: '#FF9900', category: 'tools' },
  { name: 'Nginx', icon: 'siNginx', color: '#009639', category: 'tools' },
  { name: 'PM2', icon: 'siPm2', color: '#2B037A', category: 'tools' },
  { name: 'CI/CD', icon: 'siGithubactions', color: '#2088FF', category: 'tools' },
  { name: 'REST API', icon: 'siPostman', color: '#FF6C37', category: 'tools' },
  { name: 'Selenium', icon: 'siSelenium', color: '#43B02A', category: 'tools' }
];

export default function TechStack() {
  const getIcon = (iconName: string) => {
    const cleanName = iconName.replace('si', '').toLowerCase();
    const icon = SimpleIcons[iconName as keyof typeof SimpleIcons];
    return icon ? (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="w-8 h-8"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={icon.path} />
      </svg>
    ) : null;
  };

  const categories = ['frontend', 'backend', 'database', 'tools'] as const;
  const categoryTitles = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    database: 'Database',
    tools: 'Tools & Infrastructure'
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden" id="tech-stack">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-white"
        >
          Tech Stack
        </motion.h2>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xl font-semibold mb-6 text-zinc-200"
              >
                {categoryTitles[category]}
              </motion.h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {techStack
                  .filter((tech) => tech.category === category)
                  .map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.2,
                        delay: index * 0.05,
                      }}
                    >
                      <Card 
                        className={`p-4 h-full bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:border-[color:var(--glow-color)] transition-all duration-300 group ${
                          tech.lightBg ? 'bg-zinc-800/80' : ''
                        }`}
                        style={{ '--glow-color': tech.color } as any}
                      >
                        <div className="flex flex-col items-center justify-center h-full gap-2 relative">
                          <div className="text-3xl mb-2 relative text-[color:var(--glow-color)]">
                            {getIcon(tech.icon)}
                            <div
                              className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                              style={{ backgroundColor: tech.color }}
                            />
                          </div>
                          <span className="text-sm font-medium text-zinc-300 text-center">
                            {tech.name}
                          </span>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}