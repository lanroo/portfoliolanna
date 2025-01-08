'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PageIndicator() {
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'tech-stack', 'projects']; 
      const scrollPosition = window.scrollY + window.innerHeight / 2;
  
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActivePage(i + 1);
          break;
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
      {[1, 2, 3].map((page) => ( 
        <motion.div
          key={page}
          className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
            activePage === page ? 'bg-black' : 'bg-zinc-300'
          }`}
          whileHover={{ scale: 1.2 }}
          onClick={() => {
            const sections = ['home', 'tech-stack', 'projects']; 
            const section = document.getElementById(sections[page - 1]);
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
      ))}
      </div>
    );
  }
  