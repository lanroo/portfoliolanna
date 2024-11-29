'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { SiAmazon } from 'react-icons/si';

import {
  SiReact,
  SiVuedotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiBootstrap,
  SiSass,
  SiStorybook,
  SiPython,
  SiFlask,
  SiPhp,
  SiExpress,
  SiNextdotjs,
  SiPostgresql,
  SiSqlite,
  SiPrisma,
  SiDocker,
  SiKubernetes,
  SiNginx,
  SiJsonwebtokens,
  SiAuth0,
  SiSelenium,
  SiPostman,
} from 'react-icons/si';

interface TechItem {
  name: string;
  icon: JSX.Element;
  color: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

const techStack: TechItem[] = [
  // Frontend
  { name: 'React', icon: <SiReact />, color: '#61DAFB', category: 'frontend' },
  { name: 'Vue.js', icon: <SiVuedotjs />, color: '#4FC08D', category: 'frontend' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', category: 'frontend' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E', category: 'frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38B2AC', category: 'frontend' },
  { name: 'Redux', icon: <SiRedux />, color: '#764ABC', category: 'frontend' },
  { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3', category: 'frontend' },
  { name: 'SASS', icon: <SiSass />, color: '#CC6699', category: 'frontend' },
  { name: 'Storybook', icon: <SiStorybook />, color: '#FF4785', category: 'frontend' },

  // Backend
  { name: 'Python', icon: <SiPython />, color: '#3776AB', category: 'backend' },
  { name: 'Flask', icon: <SiFlask />, color: '#ffffff', category: 'backend' },
  { name: 'PHP', icon: <SiPhp />, color: '#777BB4', category: 'backend' },
  { name: 'Express', icon: <SiExpress />, color: '#ffffff', category: 'backend' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff', category: 'backend' },
  { name: 'JWT', icon: <SiJsonwebtokens />, color: '#ffffff', category: 'backend' },
  { name: 'OAuth', icon: <SiAuth0 />, color: '#EB5424', category: 'backend' },

  // Database
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791', category: 'database' },
  { name: 'SQLite', icon: <SiSqlite />, color: '#003B57', category: 'database' },
  { name: 'Prisma', icon: <SiPrisma />, color: '#2D3748', category: 'database' },

  // Tools & Infrastructure
  { name: 'Docker', icon: <SiDocker />, color: '#2496ED', category: 'tools' },
  { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5', category: 'tools' },
  { name: 'AWS', icon: <SiAmazon />, color: '#FF9900', category: 'tools' },
  { name: 'Nginx', icon: <SiNginx />, color: '#009639', category: 'tools' },
  { name: 'Postman', icon: <SiPostman />, color: '#FF6C37', category: 'tools' },
  { name: 'Selenium', icon: <SiSelenium />, color: '#43B02A', category: 'tools' },
];

export default function TechStack() {
  const categories = ['frontend', 'backend', 'database', 'tools'] as const;
  const categoryTitles = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    database: 'Database',
    tools: 'Tools & Infrastructure',
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden" id="tech-stack">
      <div className="container px-4 mx-auto">
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
                        className={`p-4 h-full bg-zinc-900/50 border-zinc-800 hover:border-${tech.color} transition-all duration-300 group`}
                      >
                        <div className="flex flex-col items-center justify-center h-full gap-2">
                          <div className="text-3xl text-white">{tech.icon}</div>
                          <span className="text-sm font-medium text-zinc-300 text-center">{tech.name}</span>
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
