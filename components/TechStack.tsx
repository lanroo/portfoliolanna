import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  SiReact, SiVuedotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiRedux, SiBootstrap, SiSass, SiStorybook, SiPython, SiFlask,
  SiPhp, SiExpress, SiNextdotjs, SiPostgresql, SiSqlite, SiPrisma,
  SiDocker, SiKubernetes, SiNginx, SiJsonwebtokens, SiAuth0,
  SiSelenium, SiPostman, SiAmazon
} from 'react-icons/si';

interface TechItem {
  name: string;
  icon: JSX.Element;
  color: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'testing';
}

const techStack: TechItem[] = [
  { name: 'React', icon: <SiReact />, color: '#61DAFB', category: 'frontend' },
  { name: 'Vue.js', icon: <SiVuedotjs />, color: '#4FC08D', category: 'frontend' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', category: 'frontend' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E', category: 'frontend' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: '#38B2AC', category: 'frontend' },
  { name: 'Redux', icon: <SiRedux />, color: '#764ABC', category: 'frontend' },
  { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3', category: 'frontend' },
  { name: 'SASS', icon: <SiSass />, color: '#CC6699', category: 'frontend' },
  { name: 'Storybook', icon: <SiStorybook />, color: '#FF4785', category: 'frontend' },
  { name: 'Python', icon: <SiPython />, color: '#3776AB', category: 'backend' },
  { name: 'Flask', icon: <SiFlask />, color: '#ffffff', category: 'backend' },
  { name: 'PHP', icon: <SiPhp />, color: '#777BB4', category: 'backend' },
  { name: 'Express', icon: <SiExpress />, color: '#ffffff', category: 'backend' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff', category: 'frontend' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791', category: 'database' },
  { name: 'SQLite', icon: <SiSqlite />, color: '#003B57', category: 'database' },
  { name: 'Prisma', icon: <SiPrisma />, color: '#2D3748', category: 'database' },
  { name: 'Docker', icon: <SiDocker />, color: '#2496ED', category: 'devops' },
  { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5', category: 'devops' },
  { name: 'AWS', icon: <SiAmazon />, color: '#FF9900', category: 'devops' },
  { name: 'Nginx', icon: <SiNginx />, color: '#009639', category: 'devops' },
  { name: 'JWT', icon: <SiJsonwebtokens />, color: '#ffffff', category: 'backend' },
  { name: 'OAuth', icon: <SiAuth0 />, color: '#EB5424', category: 'backend' },
  { name: 'Postman', icon: <SiPostman />, color: '#FF6C37', category: 'testing' },
  { name: 'Selenium', icon: <SiSelenium />, color: '#43B02A', category: 'testing' },
];

export default function TechStack() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(techStack.length / itemsPerPage);

  let currentTechnologies = techStack.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  if (currentTechnologies.length < itemsPerPage) {
    const placeholders = Array(itemsPerPage - currentTechnologies.length).fill(null);
    currentTechnologies = [...currentTechnologies, ...placeholders];
  }

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const interval = setInterval(nextPage, 5000);
    return () => clearInterval(interval);
  }, [currentPage]);

  return (
    <section className="py-12 bg-gradient-to-b from-black to-zinc-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-white">Tech Stack</h2>
          <p className="text-zinc-400 mt-2">Explorando as tecnologias que impulsionam minhas soluções</p>
        </motion.div>

        <div className="relative flex items-center justify-center">
          <button
            onClick={prevPage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
          >
            <ChevronLeft className="text-white w-5 h-5" />
          </button>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {currentTechnologies.map((tech, index) =>
              tech ? (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center bg-zinc-800/50 rounded-lg p-4 hover:shadow-lg hover:scale-105 transition-all group relative border-2 border-transparent hover:border-[var(--hover-color)]"
                  style={{ '--hover-color': tech.color } as React.CSSProperties}
                >
                  <div className="text-3xl text-white mb-2 group-hover:text-[var(--hover-color)] transition-colors">
                    {tech.icon}
                  </div>
                  <p className="text-sm text-zinc-300 font-medium">{tech.name}</p>
                </motion.div>
              ) : (
                <div
                  key={`placeholder-${index}`}
                  className="flex flex-col items-center bg-zinc-800/20 rounded-lg p-4"
                />
              )
            )}
          </div>

          <button
            onClick={nextPage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
          >
            <ChevronRight className="text-white w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

