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
}

const techStack: TechItem[] = [
  { name: 'React', icon: <SiReact />, color: '#61DAFB' },
  { name: 'Vue.js', icon: <SiVuedotjs />, color: '#4FC08D' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38B2AC' },
  { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
  { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3' },
  { name: 'SASS', icon: <SiSass />, color: '#CC6699' },
  { name: 'Storybook', icon: <SiStorybook />, color: '#FF4785' },
  { name: 'Python', icon: <SiPython />, color: '#3776AB' },
  { name: 'Flask', icon: <SiFlask />, color: '#ffffff' },
  { name: 'PHP', icon: <SiPhp />, color: '#777BB4' },
  { name: 'Express', icon: <SiExpress />, color: '#ffffff' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
  { name: 'JWT', icon: <SiJsonwebtokens />, color: '#ffffff' },
  { name: 'OAuth', icon: <SiAuth0 />, color: '#EB5424' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
  { name: 'SQLite', icon: <SiSqlite />, color: '#003B57' },
  { name: 'Prisma', icon: <SiPrisma />, color: '#2D3748' },
  { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
  { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
  { name: 'AWS', icon: <SiAmazon />, color: '#FF9900' },
  { name: 'Nginx', icon: <SiNginx />, color: '#009639' },
  { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
  { name: 'Selenium', icon: <SiSelenium />, color: '#43B02A' },
];

export default function TechStack() {
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

        {/* Grid centralizada com 5 colunas em telas grandes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center">
          {techStack.map((tech, index) => (
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
                className="p-4 h-full bg-zinc-900/50 border-zinc-800 transition-all duration-300 group relative"
                style={{
                  '--hover-color': tech.color,
                } as React.CSSProperties}
              >
                <div
                  className="absolute inset-0 rounded-md border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    borderColor: 'var(--hover-color)',
                  }}
                ></div>
                <div className="flex flex-col items-center justify-center h-full gap-2 relative z-10">
                  {/* Ícone */}
                  <div className="text-4xl text-white">{tech.icon}</div>
                  {/* Nome da stack */}
                  <span className="text-sm font-medium text-zinc-300 text-center">{tech.name}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
