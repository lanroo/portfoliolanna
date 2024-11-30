'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <ul className="space-y-2">
          {['home', 'about', 'tech-stack', 'projects'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === section
                    ? 'bg-primary scale-125'
                    : 'bg-gray-300 hover:scale-110'
                }`}
                aria-label={`Go to ${section} section`}
              />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
