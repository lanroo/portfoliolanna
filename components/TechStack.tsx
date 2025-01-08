'use client'

import { motion } from 'framer-motion'
import {
  SiReact,
  SiVuedotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiPython,
  SiFlask,
  SiNextdotjs,
  SiDocker,
  SiSelenium,
  SiVite,
  SiThreedotjs,
} from 'react-icons/si'

const techStack = [
  { name: 'React', icon: <SiReact />, color: '#61DAFB' },
  { name: 'Vue.js', icon: <SiVuedotjs />, color: '#4FC08D' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: '#38B2AC' },
  { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3' },
  { name: 'Python', icon: <SiPython />, color: '#3776AB' },
  { name: 'Flask', icon: <SiFlask />, color: '#ffffff' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
  { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
  { name: 'Selenium', icon: <SiSelenium />, color: '#43B02A' },
  { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
  { name: 'Three.js', icon: <SiThreedotjs />, color: '#FFFFFF' },
]

export default function TechStack() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Tech Stack
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto overflow-hidden">
          <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10" />
          <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10" />
          
          <div className="flex gap-8 items-center py-4">
            <motion.div
              animate={{ 
                x: [0, -100 * techStack.length], 
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-8 items-center whitespace-nowrap"
            >
              {/* Original tech stack items */}
              {techStack.map((tech, index) => (
                <div
                  key={`original-${index}`}
                  className="group flex items-center gap-3 bg-zinc-900/50 px-6 py-3 rounded-full backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300"
                >
                  <div className="text-xl text-zinc-400 group-hover:text-[var(--hover-color)] transition-colors duration-300"
                       style={{ '--hover-color': tech.color } as React.CSSProperties}>
                    {tech.icon}
                  </div>
                  <span className="text-zinc-400 text-sm font-medium tracking-wide">
                    {tech.name}
                  </span>
                </div>
              ))}
              
              {techStack.map((tech, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="group flex items-center gap-3 bg-zinc-900/50 px-6 py-3 rounded-full backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300"
                >
                  <div className="text-xl text-zinc-400 group-hover:text-[var(--hover-color)] transition-colors duration-300"
                       style={{ '--hover-color': tech.color } as React.CSSProperties}>
                    {tech.icon}
                  </div>
                  <span className="text-zinc-400 text-sm font-medium tracking-wide">
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

