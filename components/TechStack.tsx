import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  SiReact, SiVuedotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiBootstrap, SiSass, SiStorybook, SiPython, SiFlask,
  SiExpress, SiNextdotjs, SiPostgresql, SiSqlite, SiPrisma,
  SiDocker, SiJsonwebtokens, SiAuth0,
  SiSelenium, SiPostman, 
  SiCypress,
  SiMongodb,
  SiThreedotjs,
  SiVite
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
  { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3', category: 'frontend' },
  { name: 'SASS', icon: <SiSass />, color: '#CC6699', category: 'frontend' },
  { name: 'Storybook', icon: <SiStorybook />, color: '#FF4785', category: 'frontend' },
  { name: 'Python', icon: <SiPython />, color: '#3776AB', category: 'backend' },
  { name: 'Flask', icon: <SiFlask />, color: '#ffffff', category: 'backend' },
  { name: 'Express', icon: <SiExpress />, color: '#ffffff', category: 'backend' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff', category: 'frontend' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791', category: 'database' },
  { name: 'SQLite', icon: <SiSqlite />, color: '#003B57', category: 'database' },
  { name: 'Prisma', icon: <SiPrisma />, color: '#dac497', category: 'database' },
  { name: 'Docker', icon: <SiDocker />, color: '#2496ED', category: 'devops' },
  { name: 'JWT', icon: <SiJsonwebtokens />, color: '#ffffff', category: 'backend' },
  { name: 'OAuth', icon: <SiAuth0 />, color: '#EB5424', category: 'backend' },
  { name: 'Postman', icon: <SiPostman />, color: '#FF6C37', category: 'testing' },
  { name: 'Selenium', icon: <SiSelenium />, color: '#43B02A', category: 'testing' },
  { name: 'Cypress', icon: <SiCypress />, color: '#5ad19f', category: 'testing' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', category: 'database' },
  { name: 'Vite', icon: <SiVite />, color: '#646CFF', category: 'frontend' },
  { name: 'Three.js', icon: <SiThreedotjs />, color: '#FFFFFF', category: 'frontend' },
];


export default function TechStack() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
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
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(nextPage, 5000);
    }
    return () => clearInterval(interval);
  }, [currentPage, isAutoPlaying]);

  return (
    <section className="py-16 bg-gradient-to-b from-black to-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Tech Stack
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Explorando as tecnologias que impulsionam minhas soluções
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={() => {
                prevPage();
                setIsAutoPlaying(false);
              }}
              className="group -ml-2 p-3 focus:outline-none"
              aria-label="Previous page"
            >
              <div className="rounded-full p-2 bg-white/10 group-hover:bg-white/20 transition-all duration-200">
                <ChevronLeft className="w-5 h-5 text-white" />
              </div>
            </button>
          </div>

          <div className="overflow-hidden px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6"
              >
                {currentTechnologies.map((tech, index) =>
                  tech ? (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex flex-col items-center bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 group relative border-2 border-transparent hover:border-[var(--hover-color)]"
                      style={{ '--hover-color': tech.color } as React.CSSProperties}
                    >
                      <div className="text-4xl text-white mb-3 group-hover:text-[var(--hover-color)] transition-colors duration-300">
                        {tech.icon}
                      </div>
                      <p className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                        {tech.name}
                      </p>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ) : (
                    <div
                      key={`placeholder-${index}`}
                      className="flex flex-col items-center bg-zinc-800/20 rounded-xl p-6"
                    />
                  )
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={() => {
                nextPage();
                setIsAutoPlaying(false);
              }}
              className="group -mr-2 p-3 focus:outline-none"
              aria-label="Next page"
            >
              <div className="rounded-full p-2 bg-white/10 group-hover:bg-white/20 transition-all duration-200">
                <ChevronRight className="w-5 h-5 text-white" />
              </div>
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(index);
                setIsAutoPlaying(false);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentPage === index ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}